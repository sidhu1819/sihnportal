// emergency.js - Simple AI emergency guidance

function sendEmergency(){
    const userInput = document.getElementById("emergency-input").value.trim();
    if(!userInput) return;

    const log = document.getElementById("emergency-log");
    const userMsg = document.createElement("p");
    userMsg.innerHTML = `<b>You:</b> ${userInput}`;
    log.appendChild(userMsg);

    // Simple AI guidance
    let response = "Please call the nearest hospital or ambulance immediately.";
    if(/bleed|cut/i.test(userInput)) response = "Apply pressure with a clean cloth to stop bleeding.";
    else if(/faint|unconscious/i.test(userInput)) response = "Lay the person flat and raise their legs slightly.";
    else if(/burn/i.test(userInput)) response = "Cool the burn with running water for 10-15 minutes.";
    else if(/chest/i.test(userInput)) response = "Keep patient calm and call emergency immediately.";

    const botMsg = document.createElement("p");
    botMsg.innerHTML = `<b>AI:</b> ${response}`;
    log.appendChild(botMsg);

    document.getElementById("emergency-input").value = "";
    log.scrollTop = log.scrollHeight;
}
