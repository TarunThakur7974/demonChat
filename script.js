const form = document.getElementById('form')
const container = document.getElementById('container')
const input = document.getElementById('input')

const socket = new WebSocket('wss://dummychat-lwq3.onrender.com');
// const socket = new WebSocket('ws://localhost:5000');

let a = prompt('Enter your name');

socket.addEventListener('open', (event) => {
    socket.send(a + " Joined Chat")

});

socket.addEventListener('message', (event) => {
    container.innerHTML += `<p>${event.data}</p>`
});

socket.addEventListener('close', (event) => {
socket.send(a + " : " + "disconnected")
});

function sendMessage() {
    const message = input.value
    socket.send(a +" : " + message);
    form.reset();

}


form.addEventListener('submit', (e) => {
    e.preventDefault()
    sendMessage()
})