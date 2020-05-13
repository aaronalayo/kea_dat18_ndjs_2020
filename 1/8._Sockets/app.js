const app = require('express')();
const server = require('http').createServer(app);

const io = require('socket.io')(server);

const escape = require('escape-html');

const helmet = require('helmet');
app.use(helmet());

io.on('connection', socket => { 
    console.log("Socket joined", socket.id);
    

    // socket.on("I'm thinking about this", ({ thoughts }) => {
    //     // sends out to all the clients
    //     io.emit("Someone said", { thoughts: escape(thoughts) });
    //     console.log(thoughts);
    //     // sends back to the very same client
    //     //socket.emit("Someone said", { thoughts });

    //     // sends to all clients but the client itself
    //     // socket.broadcast.emit("Someone said", { thoughts });

    // });

    socket.on("colors", ( data) => {
       
        // sends out to all the clients
        io.emit("color changed", { color: escape(data.color) });
        
        // sends back to the very same client
        
        // socket.emit("color", { data });

        // sends to all clients but the client itself
        // socket.broadcast.emit("Color", { color });

    });


   socket.on('disconnect', () => {
        console.log("Socket left", socket.id);
    });
});


app.get("/", (req, res) => {

    res.sendFile(__dirname + '/index.html');

    console.log()
});

app.get("/colors", (req, res) => {
    res.sendFile(__dirname + '/colors.html' );
    
});

server.listen(2000);