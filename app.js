var io = require('socket.io')(8998);
var global_clients = new Array();

//namespace 'appointment'
var appointment = io.of('/appointment').on('connection', function (client) {
    console.log("client connected!");
    client.on('client_setup', function(data){
        console.log("client setup data: "+JSON.stringify(data));
        global_clients.push({socket: client, data: data});

        //just for debug
        for(var i = 0;i<global_clients.length; i++){
            console.log("user :"+i+"->"+global_clients[i].data);
        }
    });

    client.on("new_appointment", function(data){

    });
});
