const express = require('express')
const http = require('http')
const socketIO = require('socket.io')


const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);

const io = socketIO(server);

let tempDB = {
    players: {
        humans: [
            
        ],

        alien: [

        ],
        spectators: [

        ]
    },
};

io.on("connection", (socket) => {
  console.log("New client connected");

    socket.on("player join", (data) => {
        tempDB.players.spectators.push(data);
        console.log(tempDB.players)
        // socket.emit('update client player join')
    })

    socket.on("assign", (data) => {
        console.log(data);
        socket.emit(data);
    })

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});


server.listen(port, () => console.log(`Listening on port ${port}`));