var net=require('net');
var server =net.createServer(function(socket){
    socket.once('data', function(data){
        socket.write(data);
    });
}).listen(8888);