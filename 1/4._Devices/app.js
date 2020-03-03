const app = require("express")()//instantiate;

const request = require('request');

let devices = [
    {id: 0, type:'mobile'}, 
    {id: 1, type: 'ipad'},
    {id: 2, type: 'pc'}
];

app.get("/", (req, res) => {
    res.send("this is node API")
})



app.get("/devices", (req, res) => {

   
    return res.send({device: devices});
});

app.get("/devices/:id", (req, res) => {
    const device = device.find(device => device.id === Number(req.params.id));
    return res.send({device: device})

});

app.post("/test", (req, res) => {
    console.log("test test")
    res.send({});
})


const server = app.listen(3000, (error) => {
    if(error){
        console.log("error running the server")
    } 
        console.log("App listening on port: ", server.address().port)
    
});