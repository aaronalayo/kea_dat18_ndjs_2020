const express = require("express");
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({extended:false})); //to get response fromm

// parse application/json
app.use(express.json());//to sumit form

console.log("This is from the enviroment variables",);

app.use(express.static('public'));
app.use(express.static('videos'));
app.use(express.static('player'));


const fs = require('fs');

const navbarPage = fs.readFileSync(__dirname + '/public/navbar/navbar.html', "utf8");
const footerPage = fs.readFileSync(__dirname + '/public/footer/footer.html', "utf8");
const frontPage = fs.readFileSync(__dirname + '/public/frontpage/frontpage.html', "utf8");
const playerPage = fs.readFileSync(__dirname + '/public/player/player.html', "utf8");
const uploadPage = fs.readFileSync(__dirname + '/public/upload/upload.html', "utf8");


app.get("/", (req, res) => {
    return res.send(navbarPage + frontPage + footerPage);
});

app.get("/player/:videoid", (req, res) => {
    return res.send(navbarPage + playerPage + footerPage);
});

app.get("/upload", (req,res) => {
    return res.send(navbarPage + uploadPage + footerPage);
});

//import routes
const videoRoute = require("./routes/videos");

//setup routes
app.use(videoRoute);

//console.log(videoRoute)

const port = process.env.PORT ? process.env.PORT : 3000;

const server = app.listen(port, (error) => {
    if(error){
        console.log("error running the server")
    } 
        console.log("App listening on port: ", server.address().port)
    
});
