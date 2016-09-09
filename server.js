// Flame - Server
// Rafi Khan

// Require Modules
var http_server = require('http').createServer();

module.exports = function(options) {

    return new Server(options)
}

function Server(options) {
    var server = {}

    var io = require('socket.io')(http_server);

    io.on('connection', function(socket){

        console.log("Client Connected")

        socket.on('light', function(data) {
            console.log("Received light:")
            console.log(data)
        })

        socket.on('login', function(data) {
            console.log("User trying to login : " + data.user_name)
        })

        socket.on('event', function(data){

        });
        socket.on('disconnect', function(){

        });
    });


    http_server.listen(options.port);

    console.log('Server created and listening on port: ' + options.port)

    server.io = io

    return server
}

Server.prototype.emit = function(msg) {
    // Check if connected, emit if connected
}
