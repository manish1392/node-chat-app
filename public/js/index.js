var socket = io();
//Changed Arrow functions to normal function for cross browser compatibility.
socket.on('connect',function(){
    console.log('Connected to server');

    socket.emit('createMessage',{
        from:'Manish',
        text:'Yup, that works for me. '
    });
});

socket.on('disconnect',function(){
    console.log('Disconnected from server');
});

socket.on('newMessage',function(message){
    console.log('newMessage',message);
});
