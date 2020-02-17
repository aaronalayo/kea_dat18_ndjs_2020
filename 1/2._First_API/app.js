// const express = require("express");
// const app = express();
// var liveServer = require("live-server");
 
// var params = {
//     port: 8080, // Set the server port. Defaults to 8080.
//     host: "localhost", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
//     root: "/", // Set root directory that's being served. Defaults to cwd.
//     open: true, // When false, it won't load your browser by default.
//     ignore: 'scss,my/templates', // comma-separated string for paths to ignore
//     file: "index.html", // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
//     wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
//     mount: [['/components', './node_modules']], // Mount a directory to a route.
//     logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
//     middleware: [function(req, res, next) { next(); }] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
// };
// liveServer.start(params);

const app = require("express")();

app.get("/", (req, res) => {
    res.send({
        message : "Hi"
    });

});
app.set('case sensitive routing', true);


app.get("/aboutMe", (req, res) => {
    res.send({
        name : "Aaron",
        lastname : "ALAYO",
        age: 37
    })
})
// define something on the path /aboutThisWebsite 
// that returns a JSON representation of the website
app.get("/aboutThisWebsite", (req, res) =>{
    const aboutThisWebsite = {
        website : "This is a REST API",
        description: "exercise for nodejs",
        author: " Aaron ALAYO",
    };
  //  if(aboutThisWebsite){
    res.send(aboutThisWebsite);// is a return statement
//}
//res.send("Sorry no information");
    //no code here won't run
});

app.get("/functionality", (req, res) => {
    var d = new Date();
    const functionality = {
        day : d.getDate(),
        month : d.getUTCMonth(),
        year : d.getUTCFullYear(),
        minutes : d.getMinutes(),
        hours : d.getHours(),
        seconds : d.getSeconds(),
        mili : d.getMilliseconds(),
      message : "hello"
        
    }
    
    res.send(functionality);
})

port = 5000;
app.listen(port, (error) => {
    if(error){
        console.log(error)
    } 
        console.log("App listening on port: ", port)
    
});
