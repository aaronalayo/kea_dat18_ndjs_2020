const express = require("express")//instantiate;

const app = express();

// parse application/json
app.use(express.urlencoded({extended:false})); //to get response from
// parse application/x-www-form-urlencoded
app.use(express.json());//to sumit form

const session = require('express-session');
app.use(session({
    secret: require('./config/mysqlCredentials.js').sessionSecret,
    resave: false,
    saveUninitialized: true,
}));

//JWT client-server client to store the JWT
//Session lives entirely on the server

const rateLimit = require("express-rate-limit");
 
// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', 1);
 
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 8 // limit each IP to 8 requests per windowMs
});
 
//  apply to all requests
app.use("/login",limiter);
app.use("/signup", limiter);
app.use("/dashboard", limiter);
app.use("/login", limiter)


// Setuo Objection + Knex

const {Model} = require('objection');

// const Model = require('objection').Model;

const Knex = require('knex');
const knexFile = require('./knexfile.js')

const knex = Knex(knexFile.development);

Model.knex(knex);



const fs = require('fs');

const dashboardPage = fs.readFileSync(__dirname + '/public/dashboard.html', "utf8");
const loginPage = fs.readFileSync(__dirname + '/public/login.html', "utf8");

app.get("/dashboard", (req, res) => {

    res.send(dashboardPage);
});
app.get("/login", (req, res) => {

    res.send(loginPage);
});

/**Temp */


app.get("/", async (req, res) => {
    // knex('users').select().then(users => {
    //     return res.send({ response: users })
        
    //     });
    const foundUsers = await knex('users').select().then(users => {
        return res.send({ response: users })
        
        }).catch(error => {
            return res.status(400).send({response: error})
        });
        
        
  
});


/** Add routes */
//Rest api for models
const authRoute = require('./routes/auth.js');
const usersRoute = require('./routes/users.js');

app.use(authRoute);
app.use(usersRoute);

//auth routes


//endpoint - HTTP VERB

//  signin - POST
//  signup - POST
//  logout - GET




















const port = process.env.PORT ? process.env.PORT : 2000;

const server = app.listen(port, (error) => {
    if(error){
        console.log("error running the server")
    } 
        console.log("App listening on port: ", server.address().port)
    
});
