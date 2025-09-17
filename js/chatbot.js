// chatbot.js - Simple AI symptom -> doctor suggestion

function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    if (!userInput) return;

    const chatLog = document.getElementById("chat-log");
    const userMsg = document.createElement("p");
    userMsg.innerHTML = `<b>You:</b> ${userInput}`;
    chatLog.appendChild(userMsg);

    // Basic symptom mapping
    let doctorSuggestion = "Dr. Ramesh Kumar (General Physician)";
    if (/fever|cough|cold/i.test(userInput)) doctorSuggestion = "Dr. Ramesh Kumar (General Physician)";
    else if (/child|baby|pediatric/i.test(userInput)) doctorSuggestion = "Dr. Sneha Rao (Pediatrician)";
    else if (/heart|chest/i.test(userInput)) doctorSuggestion = "Dr. Arvind Patel (Cardiologist)";

    const botMsg = document.createElement("p");
    botMsg.innerHTML = `<b>AI:</b> Based on your symptoms, we suggest <b>${doctorSuggestion}</b>. You can book an appointment now.`;
    chatLog.appendChild(botMsg);

    document.getElementById("user-input").value = "";
    chatLog.scrollTop = chatLog.scrollHeight;
}
