const express = require("express"); //instantiate;

const app = express();
const User = require("./model/User.js");

// parse application/json
app.use(express.urlencoded({ extended: false })); //to get response from
// parse application/x-www-form-urlencoded
app.use(express.json()); //to sumit form

const session = require("express-session");
// app.use(session({
//     secret: require('./config/mysqlCredentials.js').sessionSecret,
//     resave: false,
//     saveUninitialized: true,
// }));
app.use(
  session({
    cookieName: "session",
    secret: require("./config/mysqlCredentials.js").sessionSecret,
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
    httpOnly: true,
    secure: true,
    ephemeral: true,
    resave: false,
    saveUninitialized: true,
    cookie: {
      expires: 600000,
    },
  })
);
//JWT client-server client to store the JWT
//Session lives entirely on the server

const rateLimit = require("express-rate-limit");

// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', 1);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 25, // limit each IP to 8 requests per windowMs
});
app.set('view engine', 'pug');
app.use(express.static("public"));

//  apply to all requests
app.use("/login", limiter);
app.use("/signup", limiter);
app.use("/dashboard", limiter);
app.use("/login", limiter);

// Setuo Objection + Knex

const { Model } = require("objection");

// const Model = require('objection').Model;

const Knex = require("knex");
const knexFile = require("./knexfile.js");

const knex = Knex(knexFile.development);

Model.knex(knex);

app.use(async (req, res, next) => {
  if (req.session && req.session.user) {
    const username = req.session.user[0].username;
    try {
      await User.query()
        .select()
        .where({ username: username })
        .then(function (user) {
          if (user) {
            req.user = user;
            delete req.user.password; // delete the password from the session
            req.session.user = user; //refresh the session value
            res.locals.user = user;
          }
          // finishing processing the middleware and run the route
          next();
        });
    } catch (error) {
      return res
        .status(500)
        .send({ response: "Something went wrong with database" });
    }
  } else {
    next();
  }
});

function requireLogin(req, res, next) {
  if (!req.user) {
    res.redirect("/login");
  } else {
    next();
  }
}

const fs = require("fs");

const homePage = fs.readFileSync(
  __dirname + "/public/homepage/homepage.html",
  "utf8"
);

const navbarPage = fs.readFileSync(
  __dirname + "/public/navbar/navbar.html",
  "utf8"
);
const footerPage = fs.readFileSync(
  __dirname + "/public/footer/footer.html",
  "utf8"
);
const loginPage = fs.readFileSync(
  __dirname + "/public/login/login.html",
  "utf8"
);
const signupPage = fs.readFileSync(
  __dirname + "/public/signup/signup.html",
  "utf8"
);
const logoutPage = fs.readFileSync(
  __dirname + "/public/logout/logout.html",
  "utf8"
);
const dashboardPage = fs.readFileSync(
  __dirname + "/public/dashboard/dashboard.html",
  "utf8"
);
const adminPage = fs.readFileSync(
  __dirname + "/public/admin/admin.html",
  "utf8"
);
app.get("/dashboard", requireLogin, (req, res) => {
  res.send(navbarPage + dashboardPage + footerPage);
});

app.get("/login", (req, res) => {
  res.send(navbarPage + loginPage + footerPage);
});

app.get("/signup", (req, res) => {
  res.send(navbarPage + signupPage + footerPage);
});

app.get("/admin", requireLogin, (req, res) => {
  //  knex('users').select().then(users => {
  //     return res.send({ response: users })

  //     });
  // const foundUsers = await knex("users")
  //   .select()
  //   .then((users) => {
  //     return res.send({ response: users });
  //   })
  //   .catch((error) => {
  //     return res.status(400).send({ response: error });
  //   });
  res.send(navbarPage + adminPage + footerPage);
});

/**Temp */

app.get("/", (req, res) => {
  res.send(navbarPage + homePage + footerPage);
 
});

/** Add routes */
//Rest api for models
const authRoute = require("./routes/auth.js");
const usersRoute = require("./routes/users.js");

app.use(authRoute);
app.use(usersRoute);

//auth routes

//endpoint - HTTP VERB

//  signin - POST
//  signup - POST
//  logout - GET

const port = process.env.PORT ? process.env.PORT : 2000;

const server = app.listen(port, (error) => {
  if (error) {
    console.log("error running the server");
  }
  console.log("App listening on port: ", server.address().port);
});
