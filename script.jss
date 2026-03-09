async function sendEmail(userMsg, aiMsg) {
    const templateParams = {
        user_message: userMsg, // This matches {{user_message}} in EmailJS
        ai_response: aiMsg    // This matches {{ai_response}} in EmailJS
    };

    emailjs.send('service_3d9vazm', 'template_4tlavgq', templateParams)
    // ... rest of the code
}
