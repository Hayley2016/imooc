var socket = io('ws://localhost:3000');
var Local = new Local(socket);
var Remote = new Remote(socket);
socket.on('waiting', function(str) {
    document.getElementById('waiting').innerHTML = str;
})