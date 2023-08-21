const socket = io()

socket.on('countUpdateEvent', (count)=>{
    console.log('The count has been update!', count)
})

document.querySelector('#increment').addEventListener('click',()=>{
    console.log('Click')
    socket.emit('increment')
})

// const socket = io()

// socket.on('message',(message)=>{
//     console.log(message)
// })

// document.querySelector('#message-form').addEventListener('submit',(e)=>{
//     e.preventDefault()
//     // const message = document.querySelector('input').value
//     const message = e.target.elements.message.value
//     socket.emit('sendMessage',message)
// })