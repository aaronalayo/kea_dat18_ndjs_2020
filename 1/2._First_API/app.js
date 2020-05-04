
const app = require("express")();

const request = require('request');

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
});
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


app.get("/time", (req, res) => {
    const date = new Date();
    
    res.send( date.toLocaleString('en-EU', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'}));
    });

app.get("/testroute", (req,res) => {

    if(true){

        return res.send({message : "inside the if"});
    }
    return res.send({message: "Outside the if"});
});

app.get("/user/:id", (req, res) => {

    console.log(req.params);
    return res.send({ id: req.params.id});
});

app.get("/search", (req, res) => {

    console.log(req.query)
    return res.send(req.query);

});


app.get("/google", (req, res) => {

    request('http://www.google.com', (error, response, body) => {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    return res.send(body);
});
   
});

app.get("/documentation", (req, res) => {

   // console.log(__dirname);
   //   return res.redirect("/documentationtwo")
    return res.sendFile(__dirname + "/public/documentation.html");
});

app.get("/documentationtwo", (req, res) => {

    console.log(__dirname);
    return res.sendFile(__dirname + "/public/documentationtwo.html");
});








port = 3000;
app.listen(port, (error) => {
    if(error){
        console.log(error)
    } 
        console.log("App listening on port: ", port)
    
});