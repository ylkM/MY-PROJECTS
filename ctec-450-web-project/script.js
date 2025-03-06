// QR Code Generation
const generateQRCode = () => {
    const qrContainer = document.getElementById('qrcode');
    qrContainer.innerHTML = ''; // Clear existing QR code

    try {
        new QRCode(qrContainer, {
            text: 'https://github.com/ylkM',
            width: 200,
            height: 200,
            colorDark: '#00b4d8', // Match theme color
            colorLight: '#ffffff',
        });
    } catch (error) {
        console.error('QR Code generation failed:', error);
        qrContainer.innerHTML = '<p>Sorry, QR code generation failed.</p>';
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
        this.setupEventListeners();
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
            return 'I have a Bachelor’s Degree in Computer Technology and Security from Bowie State University and hold an Associate Degree from Prince George’s Community College.';
        }
        if (responses.certification.some(word => msg.includes(word))) {
            return 'I earned a Phi Theta Kappa Certification during my time at Prince George’s Community College.';
        }
        if (responses.skills.some(word => msg.includes(word))) {
            return 'I’m skilled in:<br>• Front-end: React, JavaScript, HTML, CSS<br>• Back-end: Node.js, Python, RESTful APIs<br>• Databases: MongoDB<br>• Cloud: AWS, Azure, Google Cloud<br>• Tools: Git, Slack';
        }
        if (responses.experience.some(word => msg.includes(word))) {
            return 'I’ve worked at multiple business institutions as a Sales and customer services Associate . i have also done various school projects such as network configuration, website development, cybersecurity and cloud based projects.';
        }
        if (responses.projects.some(word => msg.includes(word))) {
            return 'Check out my projects:<br>• <strong>Networking:</strong> Secure LAN/WAN configs<br>• <strong>Cybersecurity:</strong> NIST framework implementation<br>• <strong>Web Dev:</strong> School enrollment site<br>More at: <a href="https://github.com/ylkM" target="_blank">github.com/ylkM</a>';
        }
        if (responses.contact.some(word => msg.includes(word))) {
            return 'Interested in collaborating? Reach me at ylkmngst7@gmail.com or via <a href="https://linkedin.com/in/your-profile" target="_blank">LinkedIn</a>!';
        }

        return 'Not sure what you mean! Try asking about my education, skills, experience, or projects.';
    }
}

// Chatbox Toggle
const toggleChatbox = () => {
    const chatbox = document.getElementById('chatbox');
    const toggleBtn = document.getElementById('chat-toggle');
    
    chatbox.hidden = !chatbox.hidden;
    toggleBtn.hidden = !chatbox.hidden;
};

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
    // Generate QR Code
    generateQRCode();

    // Initialize Chatbot
    const chatbot = new Chatbot();

    // Event Listeners
    document.getElementById('chat-toggle').addEventListener('click', toggleChatbox);
    document.getElementById('close-chat').addEventListener('click', toggleChatbox);
    
    // Note: Add this to HTML: <button onclick="downloadQRCode()" class="btn">Download QR</button>
    // Already in your improved HTML
});

// Error Handling for Missing Elements
const checkElements = () => {
    const requiredIds = ['qrcode', 'chat-messages', 'chat-input', 'chat-send', 'chat-toggle', 'close-chat'];
    requiredIds.forEach(id => {
        if (!document.getElementById(id)) {
            console.warn(`Element with ID '${id}' not found in the DOM`);
        }
    });
};

checkElements();