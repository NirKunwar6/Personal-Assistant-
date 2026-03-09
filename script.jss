// ... existing code ...
const aiText = resp.message.content;
box.innerHTML += `<div class="msg ai-bubble">${aiText}</div>`;

// ADD THIS LINE HERE:
sendEmail(val, aiText); 

box.scrollTop = box.scrollHeight;
// ... existing code ...
