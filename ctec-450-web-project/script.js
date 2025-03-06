// QR Code Generation (Contact page only)
const generateQRCode = () => {
    const qrContainer = document.getElementById('qrcode');
    if (qrContainer) {
        qrContainer.innerHTML = '';
        try {
            new QRCode(qrContainer, {
                text: 'https://github.com/ylkM',
                width: 200,
                height: 200,
                colorDark: '#00b4d8',
                colorLight: '#ffffff',
            });
        } catch (error) {
            console.error('QR Code generation failed:', error);
            qrContainer.innerHTML = '<p>Sorry, QR code generation failed.</p>';
        }
    }
};

// Download QR Code
const downloadQRCode = () => {
    const qrCanvas = document.querySelector('#qrcode canvas');
    if (!qrCanvas) {
        alert('Please wait for the QR code to generate!');
        return;
    }
    const qrImage = qrCanvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.href = qrImage;
    downloadLink.download = 'yilake-portfolio-qr.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
};

// Chatbot Logic
class Chatbot {
    constructor() {
        this.messagesContainer = document.getElementById('chat-messages');
        this.input = document.getElementById('chat-input');
        this.sendBtn = document.getElementById('chat-send');
        if (this.messagesContainer && this.input && this.sendBtn) {
            this.setupEventListeners();
        }
    }

    setupEventListeners() {
        this.sendBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.sendMessage();
        });
        
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.sendMessage();
            }
        });
    }

    sendMessage() {
        const message = this.input.value.trim();
        if (!message) return;

        this.displayMessage('You', message, 'user-message');
        this.input.value = '';

        setTimeout(() => {
            const reply = this.getReply(message);
            this.displayMessage('Bot', reply, 'bot-message');
        }, 800);
    }

    displayMessage(sender, text, className) {
        const messageElement = document.createElement('p');
        messageElement.className = className;
        messageElement.innerHTML = `<strong>${sender}:</strong> ${text}`;
        this.messagesContainer.appendChild(messageElement);
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }

    getReply(message) {
        const msg = message.toLowerCase();
        const responses = {
            greeting: ['hello', 'hi', 'hey'],
            education: ['education', 'degree', 'university', 'school'],
            certification: ['certification', 'certificate'],
            skills: ['skills', 'what can you do', 'technical skills', 'abilities'],
            experience: ['experience', 'work', 'job history', 'jobs'],
            projects: ['github', 'projects', 'work samples', 'what project', 'projects you did', 'work examples'],
            contact: ['apply', 'hiring', 'job', 'contact', 'email']
        };

        if (responses.greeting.some(word => msg.includes(word))) {
            return 'Hi there! How can I assist you with my portfolio today?';
        }
        if (responses.education.some(word => msg.includes(word))) {
            return 'I’m pursuing a Bachelor’s in Computer Technology and Security at Bowie State University (Expected Dec 2024) and hold an Associate of Arts from Prince George’s Community College.';
        }
        if (responses.certification.some(word => msg.includes(word))) {
            return 'I earned a Phi Theta Kappa Certification during my time at Prince George’s Community College.';
        }
        if (responses.skills.some(word => msg.includes(word))) {
            return 'I’m skilled in:<br>• Front-end: React, JavaScript, HTML, CSS<br>• Back-end: Node.js, Python, RESTful APIs<br>• Databases: MongoDB<br>• Cloud: AWS, Azure, Google Cloud<br>• Tools: Git, Slack';
        }
        if (responses.experience.some(word => msg.includes(word))) {
            return 'I’ve worked as a Sales Associate at Jamus Petro Inc. and BP Food Mart, handled delivery at Dunkin Donuts, supported operations at SSH Silver Spring LLC, and collaborated on marketing at East-West Marketing—blending tech and customer service expertise.';
        }
        if (responses.projects.some(word => msg.includes(word))) {
            return 'Check out my projects:<br>• <strong>Networking:</strong> Secure LAN/WAN configs<br>• <strong>Cybersecurity:</strong> Intrusion detection systems<br>• <strong>Web Dev:</strong> Interactive portfolio site<br>• <strong>Cloud:</strong> AWS/Azure/GC projects<br>More at: <a href="https://github.com/ylkM" target="_blank">github.com/ylkM</a>';
        }
        if (responses.contact.some(word => msg.includes(word))) {
            return 'Interested in collaborating? Reach me at <a href="mailto:ylkmngst7@gmail.com">ylkmngst7@gmail.com</a> or via <a href="https://linkedin.com/in/your-profile" target="_blank">LinkedIn</a>!';
        }
        return 'Not sure what you mean! Try asking about my education, skills, experience, or projects.';
    }
}

// Chatbox Toggle
const toggleChatbox = () => {
    const chatbox = document.getElementById('chatbox');
    const toggleBtn = document.getElementById('chat-toggle');
    if (chatbox && toggleBtn) {
        chatbox.hidden = !chatbox.hidden;
        toggleBtn.hidden = !chatbox.hidden;
    }
};

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
    generateQRCode();
    const chatbot = new Chatbot();
    const toggleBtn = document.getElementById('chat-toggle');
    const closeBtn = document.getElementById('close-chat');
    if (toggleBtn) toggleBtn.addEventListener('click', toggleChatbox);
    if (closeBtn) closeBtn.addEventListener('click', toggleChatbox);
});

// Error Handling for Missing Elements
const checkElements = () => {
    const requiredIds = ['chat-messages', 'chat-input', 'chat-send', 'chat-toggle', 'close-chat'];
    requiredIds.forEach(id => {
        if (!document.getElementById(id)) {
            console.warn(`Element with ID '${id}' not found in the DOM`);
        }
    });
};
checkElements();