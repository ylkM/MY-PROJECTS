// QR Code Generation
function generateQRCode() {
    let qrContainer = document.getElementById("qrcode");
    qrContainer.innerHTML = ""; // Clear existing QR code

    let qr = new QRCode(qrContainer, {
        text: "https://github.com/ylkM", // Change this to your link
        width: 200,
        height: 200
    });
}

// Download QR Code
function downloadQRCode() {
    let qrCanvas = document.querySelector("#qrcode canvas");
    if (qrCanvas) {
        let qrImage = qrCanvas.toDataURL("image/png");
        let downloadLink = document.createElement("a");
        downloadLink.href = qrImage;
        downloadLink.download = "qrcode.png";
        downloadLink.click();
    } else {
        alert("QR code not found! Please generate it first.");
    }
}

// Call QR generation when the page loads
window.onload = generateQRCode;

// Chatbot Logic
function sendMessage() {
    let chatBody = document.getElementById("chat-body");
    let chatInput = document.getElementById("chat-input");
    let userMessage = chatInput.value.trim();

    if (userMessage === "") return;

    // Display user message
    let userMsgElement = document.createElement("p");
    userMsgElement.innerHTML = `<strong>You:</strong> ${userMessage}`;
    chatBody.appendChild(userMsgElement);

    // Clear input field
    chatInput.value = "";

    // Simulated Chatbot Response
    setTimeout(() => {
        let botReply = document.createElement("p");
        botReply.innerHTML = `<strong>Bot:</strong> ${getChatbotReply(userMessage)}`;
        chatBody.appendChild(botReply);

        // Auto-scroll to the latest message
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);
}

// AI Response Based on Your Profile
function getChatbotReply(userMessage) {
    let lowerCaseMessage = userMessage.toLowerCase();

    // Greeting Responses
    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
        return "Hello! How can I assist you today regarding my portfolio?";
    }

    // Education Related Responses
    if (lowerCaseMessage.includes("education") || lowerCaseMessage.includes("degree") || lowerCaseMessage.includes("university")) {
        return "I hold a Bachelor's degree in Computer Technology and Security from Bowie State University. Expected graduation: May 2025.";
    }
    if (lowerCaseMessage.includes("certification") || lowerCaseMessage.includes("certificate")) {
        return "I have a Phi Theta Kappa Certification from Prince George’s Community College.";
    }

    // Skills Related Responses
    if (lowerCaseMessage.includes("skills") || lowerCaseMessage.includes("what can you do") || lowerCaseMessage.includes("technical skills")) {
        return "I specialize in full-stack development. My skills include: \n- Front-end: React, JavaScript, HTML, CSS\n- Back-end: Python, Node.js, RESTful APIs\n- Database: MongoDB\n- Cloud Computing: AWS, Azure, Google Cloud";
    }

    // Work Experience Related Responses
    if (lowerCaseMessage.includes("experience") || lowerCaseMessage.includes("work") || lowerCaseMessage.includes("job history")) {
        return "I have experience as a Sales Associate, Delivery Service, and Web Developer, where I handled customer service, software development, and cloud technology integration.";
    }

    // GitHub or Portfolio Links
    if (lowerCaseMessage.includes("github") || lowerCaseMessage.includes("projects") || lowerCaseMessage.includes("work samples")) {
        return "You can check my projects on my GitHub: [GitHub Profile](https://github.com/ylkM)";
    }

    // Specific Project Inquiry
    if (lowerCaseMessage.includes("what project") || lowerCaseMessage.includes("projects you did") || lowerCaseMessage.includes("work examples")) {
        return "Here are some of my latest projects:\n- **Networking**: Configured LAN and WAN networks for secure data transfer.\n- **Cybersecurity**: Applied Cyber NIST framework for threat identification & risk analysis.\n- **Web Development**: Developed a school website for students to enroll in courses.";
    }

    // Job Application or Hiring
    if (lowerCaseMessage.includes("apply") || lowerCaseMessage.includes("hiring") || lowerCaseMessage.includes("job")) {
        return "I'm always open to new opportunities! Feel free to reach out to me at MY.email@example.com.";
    }

    // Default Response (Fallback)
    return "I'm not sure how to respond to that, but you can ask about my **education, skills, experience, or projects**!";
}

// Add "Enter" key functionality for sending messages
document.getElementById("chat-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission
        sendMessage();
    }
});

// Chatbox Toggle (Show/Hide)
document.getElementById("chat-toggle").addEventListener("click", function () {
    document.getElementById("chatbox").style.display = "block";
    document.getElementById("chat-toggle").style.display = "none";
});

document.getElementById("close-chat").addEventListener("click", function () {
    document.getElementById("chatbox").style.display = "none";
    document.getElementById("chat-toggle").style.display = "block";
});
