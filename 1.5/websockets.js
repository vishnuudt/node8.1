module.exports = (server) => {
    var io = require('socket.io')(server);

    io.on('connection', (soket) => {
        soket.on('update', function (data){
            console.log(data);
            io.emit('update', data);
        });
    });
};