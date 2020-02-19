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
      message : "he"
        
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
