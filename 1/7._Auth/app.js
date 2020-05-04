const express = require("express")//instantiate;

const app = express();

// parse application/json
app.use(express.urlencoded({extended:false})); //to get response from
// parse application/x-www-form-urlencoded
app.use(express.json());//to sumit form




// Setuo Objection + Knex

const {Model} = require('objection');
// const Model = require('objection').Model;

const Knex = require('knex');
const knexFile = require('./knexfile.js')

const knex = Knex(knexFile.development);

Model.knex(knex);

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
const authRoute = require('./routes/auth.js');

app.use(authRoute);

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
