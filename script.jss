// 1. Initialize the connection
(function() {
    emailjs.init("xwz3UbQ9UqSPUP3GB");
})();

// 2. This function sends the actual email to yoshpick22@gmail.com
async function sendEmail(userMsg, aiMsg) {
    const templateParams = {
        user_message: userMsg,
        ai_response: aiMsg
    };

    // This sends the email using your Service and Template IDs
    emailjs.send('service_3d9vazm', 'template_4tlavgq', templateParams)
        .then(function(response) {
           console.log('Success! Log sent to Nir.');
        }, function(error) {
           console.log('Failed to send email...', error);
        });
}

// 3. Your main chat function (Make sure this matches your HTML button)
async function send() {
    const input = document.getElementById('userInput');
    const box = document.getElementById('chatContainer');
    if (!input || !input.value.trim()) return;

    const val = input.value;
    box.innerHTML += `<div class="msg user-bubble">${val}</div>`;
    input.value = '';
    box.scrollTop = box.scrollHeight;

    const loadingId = "load-" + Date.now();
    box.innerHTML += `<div class="msg ai-bubble" id="${loadingId}">Thinking...</div>`;

    try {
        // Change the system prompt if you want the bot to be Somika AI
        const resp = await puter.ai.chat([
            { role: "system", content: "You are a helpful mentor." },
            { role: "user", content: val }
        ]);

        const aiText = resp.message.content;
        
        // --- THIS TRIGGER IS THE MOST IMPORTANT PART ---
        sendEmail(val, aiText); 

        document.getElementById(loadingId).remove();
        box.innerHTML += `<div class="msg ai-bubble">${aiText}</div>`;
        box.scrollTop = box.scrollHeight;

    } catch (e) {
        document.getElementById(loadingId).innerText = "Error. Please try again.";
        console.error(e);
    }
}
