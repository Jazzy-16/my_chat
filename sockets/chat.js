module.exports = (io, socket) => {

    // listen to when new user joins
    socket.on('new user', (username) => {
        console.log(`${username} has joined the chat`)
        io.emit('new user', username);
    
        
    })
     //Listen for new messages
    socket.on('new message', (data) => {
        // Send that data back to ALL clients
        console.log(`🎤 ${data.sender}: ${data.message} 🎤`)
        io.emit('new message', data);
    })

}