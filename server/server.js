const io = require("socket.io")(3001, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let game;
let players = [];

const addPlayer = (userName, socketId) => {
  !players.some((player) => player.socketId === socketId) &&
    players.push({ userName, socketId });
};

const getPlayer = (socketId) => {
  return players.find((player) => player.socketId === socketId);
};

const getGamecode = (gamecode) => {
    return gamecode
}

io.on("connection", (socket) => {
  socket.on("disconnect", (reason) => {
    console.log("Socket " + socket.id + " was disconnected");
    console.log(reason);
  });

  socket.on("init-game", (newGame) => {
    game = JSON.parse(JSON.stringify(newGame));
    socket.join(game.pin);
    let hostId = socket.id;
    console.log(
      "Host with id " + hostId + " started game and joined room: " + game.pin
    );
  });

  socket.on("send-gamecode", game => {
    socket.to(game.pin).emit("receive-gamecode", game);
  })


  socket.on("add-player", (name, socketId, pin, check) => {
    if (game.pin === pin) {
      addPlayer(name, socketId);
      socket.join(game.pin);
        check("correct game code")
      let gamecode = game.pin
      io.emit("gamecode", gamecode);
      console.log(
        "Student " + name + " with id " + socket.id + " joined room " + game.pin
      );
      let player = getPlayer(socketId);
      io.emit("player-added", player);
    } else {
      console.log("Wrong game code");
    }
  });
});
