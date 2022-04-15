const socket = io();

socket.on('loadNotes', (data)=>{
    console.log(data);
});