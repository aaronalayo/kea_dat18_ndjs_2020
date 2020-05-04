const express = require("express")//instantiate;

const app = express();

app.use(express.urlencoded({extended:false})); //to get response from

app.use(express.json());//to sumit form

let devices = [
    {id: 1, type:'mobile'}, 
    {id: 2, type: 'ipad'},
    {id: 3, type: 'pc'}
];




app.get("/", (req, res) => {
    res.send("this is node API")
})



app.get("/devices", (req, res) => {

   
    return res.send({response: devices});
});

app.get("/devices/:id", (req, res) => {
    const device = devices.find(device => device.id === Number(req.params.id));
    return res.send({response: device});

});



app.post("/devices",(req, res) => {

    let newDevice = req.body;
    if(!newDevice.type){

        return res.status(400).send({response: "Missing the device type"});
    }
    // const maxId = devices.reduce((previous, current) => {
        
    //     if (current.id > previous.id){
    //         return current.id;

    //     }else {

    //         return previous.id
    //     }
    // });

    
    newDevice.id = nextDeviceId++;
    devices.push(newDevice)
   
    console.log(devices)
    return res.send({response: newDevice });
});



app.put('/devices/:id', function (req, res) {
    
    const foundIndex = devices.findIndex(device => device.id === Number(req.params.id));
    delete req.body.id;
    const newDevice = {...devices[foundIndex],...req.body}; //spread to new object

    devices[foundIndex] = newDevice;

    console.log(devices)

    return res.send({response: newDevice})
  });






  app.delete("/devices/:id", (req, res) => {

    devices = devices.filter(device => device.id != req.params.id)
    
    console.log(devices)
    return res.send({response : devices})

});






const server = app.listen(3000, (error) => {
    if(error){
        console.log("error running the server")
    } 
        console.log("App listening on port: ", server.address().port)
    
});