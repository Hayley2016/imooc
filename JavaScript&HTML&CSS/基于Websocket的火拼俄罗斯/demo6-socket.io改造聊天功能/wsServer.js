var app = require('http').createServer()
var io = require('socket.io')(app);
var PORT = 3000;
var clientCount = 0;
app.listen(PORT);

io.on('connection', function(socket) {
    clientCount++
    socket.nickname = 'user' + clientCount;
    io.emit('enter', socket.nickname + 'come in');
    socket.on('message', function(str) {
        io.emit('message', socket.nickname + 'says:' + str);
    });
    socket.on('disconnect', function() {
        io.emit('leave', socket.nickname + 'left');
    });
});
console.log('websocket server listening on port' + PORT);
// var ws = require("nodejs-websocket")


// // Scream server example: "hi" -> "HI!!!"
// var server = ws.createServer(function(conn) {
//     console.log("New connection")
//     clientCount++
//     conn.nickname = 'user' + clientCount;
//     var mes = {};
//     mes.type = "enter";
//     mes.data = conn.nickname + 'come in';
//     broadcast(JSON.stringify(mes));
//     conn.on("text", function(str) {
//         var mes = {};
//         mes.type = "message";
//         mes.data = conn.nickname + 'says:' + str;
//         broadcast(JSON.stringify(mes));
//     })
//     conn.on("close", function(code, reason) {
//         var mes = {};
//         mes.type = "leave";
//         mes.data = conn.nickname + 'left';
//         broadcast(JSON.stringify(mes));
//     })
//     conn.on("error", function(error) {
//         console.log(error)
//     })
// }).listen(PORT)


// function broadcast(str) {
//     server.connections.forEach(function(connection) {
//         connection.sendText(str)
//     })
// }