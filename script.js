const form = document.getElementById('form')
const container = document.getElementById('container')
const input = document.getElementById('input')

const socket = new WebSocket('wss://dummychat-lwq3.onrender.com');

socket.addEventListener('open', (event) => {
    console.log(event, "open");
});
socket.addEventListener('connection', (event) => {
    console.log(event, "connect");
});

socket.addEventListener('message', (event) => {
    container.innerHTML += `<p>${event.data}</p>`

});

socket.addEventListener('close', (event) => {
    console.log('Connection closed');
});

// Sending a message to the server
function sendMessage() {
    const message = input.value
    socket.send(message);
    form.reset()

}


form.addEventListener('submit', (e) => {
    e.preventDefault()
    sendMessage()
})