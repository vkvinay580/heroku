const server = require('http').createServer()
const io = require('socket.io')(server, {
    cors: {
        origin: "https://tictactoevk.herokuapp.com/",
        //origin:"http://localhost:8080",
        methods: ["GET", "POST"]
    }
});
io.on('connection', (socket)=> {
    socket.emit("hello", "tic-tac-toe game");
    socket.on("play", index => {
        console.log("server received", index)
        socket.broadcast.emit("play", index)
        ;
    })
})

const PORT = process.env.PORT;
server.listen(PORT);