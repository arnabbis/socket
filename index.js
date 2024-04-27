const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const path = require("path");
const { Server } = require("socket.io");
const io = new Server(server);

io.on('connection', (socket) => {
    console.log("server",socket.id)
    console.log('a user connected');
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        // io.emit('chat message', msg);
    })
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
})
app.get('/', (req, res) => {
    console.log("Hello World!",req.method);
    res.send({status:200,message:"Hello World!"});
  });

app.use(express.static('public'));

server.listen(3000, () => {
    console.log("Server is running on port 3000");
})