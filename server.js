// server side:
// matching "main": "server.js" in `package.json`

const express = require("express");
// create an instance of the Express application:
const app = express();

const http = require("http");
// create an HTTP server that listens for requests on the "app":
const expressServer = http.createServer(app);

// import the Server class from socket.io module:
const { Server } = require("socket.io");
// create a new instance of the Server class (on backend), and initialize it with the expressServer instance:
const io = new Server(expressServer);

app.get("/express-server", (req, res) =>
  res.end("This is my backend server. ")
);

io.on("connection", (socket) => {
  console.log("New user connected.");

  socket.on("disconnect", () => {
    console.log("User disconnected.");
  });
});

expressServer.listen(8000, () => {
  console.log("Server started on port 8000.");
});
