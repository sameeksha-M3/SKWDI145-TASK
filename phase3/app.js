document.addEventListener('DOMContentLoaded', () => {
    const chatLog = document.getElementById('chat-log');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userMessage = chatInput.value.trim();
        if (userMessage) {
            appendMessage(userMessage, 'user-message');
            chatInput.value = '';
            getBotResponse(userMessage);
        }
    });

    function appendMessage(message, className) {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${className}`;
        messageElement.textContent = message;
        chatLog.appendChild(messageElement);
        chatLog.scrollTop = chatLog.scrollHeight;
    }

    function getBotResponse(userMessage) {
        const botMessage = generateBotResponse(userMessage);
        setTimeout(() => {
            appendMessage(botMessage, 'bot-message');
        }, 500);
    }

    function generateBotResponse(userMessage) {
        const responses = {
            'hello': 'Hi there! How can I assist you today?',
            'how are you?': 'I\'m just a bot, but I\'m doing great! How about you?',
            'what is your name?': 'I\'m your friendly chatbot.',
            'bye': 'Goodbye! Have a great day!',
        };

        return responses[userMessage.toLowerCase()] || 'Sorry, I didn\'t understand that.';
    }
});
