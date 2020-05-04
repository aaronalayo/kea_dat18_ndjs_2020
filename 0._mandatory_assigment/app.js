const express = require("express");
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({extended:false})); //to get response fromm

// parse application/json
app.use(express.json());//to sumit form

var path = require('path'); 

app.use(express.static(path.join(__dirname, 'public')));

app.set('public', path.join(__dirname, 'public'));

app.get("/", (req, res) => {

    return res.send("This Aaron's Documentation API");
});
app.get("/index", (req, res) => {

    return res.sendFile(__dirname + "/public/index.html");
});

app.get("/basics", (req, res) => {

    return res.sendFile(__dirname + "/public/basics.html");
});

app.get("/strings", (req, res) => {

    return res.sendFile(__dirname + "/public/strings.html");
});

app.get("/arrays", (req, res) => {

    return res.sendFile(__dirname + "/public/arrays.html");
});

app.get("/functions", (req, res) => {

    return res.sendFile(__dirname + "/public/functions.html");
});

app.get("/objects", (req, res) => {

    return res.sendFile(__dirname + "/public/objects.html");
});

app.get("/first_api", (req, res) => {

    return res.sendFile(__dirname + "/public/first_api.html");
});

app.get("/jquery", (req, res) => {

    return res.sendFile(__dirname + "/public/jquery.html");
});

app.get("/httprequests", (req, res) => {

    return res.sendFile(__dirname + "/public/httprequests.html");
});

app.get("/variables", (req, res) => {

    return res.sendFile(__dirname + "/public/variables.html");
});

app.get("/tools", (req, res) => {

    return res.sendFile(__dirname + "/public/tools.html");
});


let devices = [
    {id: 1, type:'mobile'}, 
    {id: 2, type: 'ipad'},
    {id: 3, type: 'pc'}
];


let nextDeviceId = 3;

app.get("/devices", (req, res) => {

   
    return res.send({response: devices});
});

app.get("/devices/:id", (req, res) => {
    const device = devices.find(device => device.id === Number(req.params.id));
    return res.send({response: device});

});

const port = process.env.PORT ? process.env.PORT : 3000;

const server = app.listen(port, (error) => {
    if (error) {
        console.log("Error starting the server");
    }
    console.log("This server is running on port", server.address().port);
});
