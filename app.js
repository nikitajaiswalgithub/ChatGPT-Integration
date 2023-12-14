const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

const socket = new WebSocket('ws://your-websocket-server-url');

socket.addEventListener('message', function (event) {
    appendMessage(event.data, 'bot');
});

function sendMessage() {
    const userMessage = userInput.value;
    if (userMessage.trim() === '') return;

    appendMessage(userMessage, 'user');
    socket.send(userMessage);

    // Clear the input field
    userInput.value = '';
}

function appendMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.innerText = message;
    chatBox.appendChild(messageDiv);

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}
