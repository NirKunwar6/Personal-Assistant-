<script>
    (function() {
        emailjs.init("xwz3UbQ9UqSPUP3GB"); 
    })();

    async function sendEmail(userMsg, aiMsg) {
        const templateParams = {
            // These names must match your EmailJS template exactly
            user_message: userMsg, 
            ai_response: aiMsg    
        };

        emailjs.send('service_3d9vazm', 'template_4tlavgq', templateParams)
            .then(function(response) {
               console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
               console.log('FAILED...', error);
            });
    }

    // This is the part that most people forget!
    // Inside your existing send() function, find where the AI gives the answer:
    
    /* const aiText = resp.message.content; // This is the AI's answer
    sendEmail(val, aiText); // <--- YOU MUST ADD THIS LINE HERE
    */
</script>
