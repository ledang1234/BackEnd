const path = require('path')
const http = require('http')
const express = require('express')

const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDictionaryPath =   path.join(__dirname, '../public')

app.use(express.static(publicDictionaryPath))

let count = 0 

//server (emit) -> client(receive) -countUpdateEvent
//client(emit)  -> server(receive) - indcrement

io.on('connection',(socket)=>{
    console.log('New webSocket connection')
    //send event from server to client
    socket.emit('countUpdateEvent', count)

    socket.on('increment',()=>{
        count++
        // //only specific connectiom
        // socket.emit('countUpdateEvent',count)
        
        // for all single connection
        io.emit('countUpdateEvent',count)
    })


})




server.listen(port,()=>{
    console.log('Server is up on port '+ port)
})





// const path = require('path')
// const http = require('http')
// const express = require('express')

// const socketio = require('socket.io')

// const app = express()
// const server = http.createServer(app)
// const io = socketio(server)

// const port = process.env.PORT || 3000
// const publicDictionaryPath =   path.join(__dirname, '../public')

// app.use(express.static(publicDictionaryPath))

// let count = 0 

// //server (emit) -> client(receive) -countUpdateEvent
// //client(emit)  -> server(receive) - indcrement

// io.on('connection',(socket)=>{
//     console.log('New webSocket connection')

//     socket.emit('message','Welcome !!!')
 
//     socket.on('sendMessage',(message)=>{
//         io.emit('message',message)
//     })


// })




// server.listen(port,()=>{
//     console.log('Server is up on port '+ port)
// })