// Initialize the connection to your account
(function() {
    emailjs.init("xwz3UbQ9UqSPUP3GB"); 
})();

// This function sends the data to yoshpick22@gmail.com
async function sendEmail(userMsg, aiMsg) {
    const templateParams = {
        user_message: userMsg,
        ai_response: aiMsg
    };

    emailjs.send('service_3d9vazm', 'template_4tlavgq', templateParams)
        .then(function(response) {
           console.log('Log sent to Nir successfully!');
        }, function(error) {
           console.error('Email failed to send:', error);
        });
}

// IMPORTANT: In your main send() function, you must call sendEmail. 
// It should look like this inside your try block:
/*
    const aiText = resp.message.content;
    // ... display the message in UI ...
    
    sendEmail(val, aiText); // This line sends the notification
*/
