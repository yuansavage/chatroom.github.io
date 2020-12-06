const url = "ws://localhost:9876";
const server = new WebSocket(url);
const overflow = document.querySelector('.overflow');
let username;


server.onopen = function(){
    $(".sendbtn").attr("disabled",false);
}

$(".sendbtn").click(function(){
    const text = $(".txt").val();
    $(".txt").val("");
    server.send(text);
    
});

$(".txt").keyup(function(e){
    if(e.keyCode==13){
        const text = $(".txt").val();
        $(".txt").val(""); 
        server.send(text);
       
    }
});

server.onmessage = function(event){
    const data = event.data;
    const newDiv = document.createElement("div");
    newDiv.className = "new";
    newDiv.innerText = data; 
    $(".chatarea").append(newDiv);
    overflow.scrollTop = overflow.scrollHeight;
}
