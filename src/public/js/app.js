const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener('open',()=>{
    console.log('connected to Server');
})

socket.addEventListener('message',(message)=>{
    console.log('New message : ',message.data);
})

socket.addEventListener('close',()=>{
    console.log('connection closed');
})

setTimeout(()=>{
    socket.send('hello from the browser')
},3000)