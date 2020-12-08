let readName =false;


const Websocket = require('ws');
const wss = new Websocket.Server({
    port:9876
})

wss.on('connection',function(ws){
    const username = Math.random().toString(36).substring(7);
    ws.send("Welcome!! " + username);
    ws.on('message',function(data){
        wss.clients.forEach(function each(client){
            if(client.readyState == Websocket.OPEN){
                client.send(username+" : "+data);
            }
        })
    })
})

