const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});
io.on('connect',(socket)=>{
    socket.on('chat message',(msg)=>{
        io.emit('chat message',msg);
    })
})

http.listen(5000,()=>{
    console.log('3100 listening...')
})
