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
    },
};

io.on("connection", (socket) => {
  console.log("New client connected");

    socket.on("player join", (data) => {
        // TODO - temporary db structure
        /*
         * {player_id: {player_name:, player_role}} 
         */
        tempDB.players[data.player_id] = {
            player_name: data.player_name,
            player_role: "spectator"
        };
        // console.log(tempDB)
        io.emit('update client player join', tempDB.players[data.player_id]);
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