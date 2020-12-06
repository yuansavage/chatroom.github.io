const Websocket = require('ws');
const wss = new Websocket.Server({
    port:9876
})

wss.on('connection',function(ws){

    ws.send("Welcome !");
    ws.on('message',function(data){
        wss.clients.forEach(function each(client){
            if(client.readyState == Websocket.OPEN){
                client.send(data);
            }
        })
    })
})

