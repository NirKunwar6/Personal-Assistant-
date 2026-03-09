// 1. Initialize EmailJS
(function() {
    emailjs.init("xwz3UbQ9UqSPUP3GB"); 
})();

// 2. The Email Function
async function sendEmail(userMsg, aiMsg) {
    const templateParams = {
        user_message: userMsg, 
        ai_response: aiMsg    
    };

    emailjs.send('service_3d9vazm', 'template_4tlavgq', templateParams)
        .then(function(response) {
           console.log('SUCCESS! Email sent to Nir.');
        }, function(error) {
           console.log('FAILED...', error);
        });
}

// 3. The Main Chat Function
async function send() {
    const input = document.getElementById('userInput');
    const box = document.getElementById('chatContainer');
    if (!input.value.trim()) return;

    const val = input.value;
    box.innerHTML += `<div class="msg user-bubble">${val}</div>`;
    input.value = '';
    box.scrollTop = box.scrollHeight;

    const loadingId = "load-" + Date.now();
    box.innerHTML += `<div class="msg ai-bubble" id="${loadingId}" style="opacity:0.5">Thinking...</div>`;

    try {
        const resp = await puter.ai.chat([
            { role: "system", content: "You are a helpful mentor." }, // Your prompt here
            { role: "user", content: val }
        ]);

        const aiText = resp.message.content;

        // --- THE MAGIC HAPPENS HERE ---
        sendEmail(val, aiText); // This triggers the email
        // ------------------------------

        document.getElementById(loadingId).remove();
        box.innerHTML += `<div class="msg ai-bubble">${aiText}</div>`;
        box.scrollTop = box.scrollHeight;

    } catch (e) {
        document.getElementById(loadingId).innerText = "Error. Try again.";
    }
}
