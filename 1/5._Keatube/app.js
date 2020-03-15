const express = require("express");
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({extended:false})); //to get response fromm

// parse application/json
app.use(express.json());//to sumit form

app.use(express.static('public'));
app.use(express.static('videos'));

console.log("This is from the enviroment variables",);

app.get("/video/:videoid", (req, res) => {

    return res.sendFile(__dirname + "/public/video.html");
});




const port = process.env.PORT ? process.env.PORT : 3000;

const server = app.listen(port, (error) => {
    if(error){
        console.log("error running the server")
    } 
        console.log("App listening on port: ", server.address().port)
    
});
