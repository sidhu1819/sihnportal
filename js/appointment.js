// appointment.js - Handle appointment form submission

document.getElementById("appointmentForm").addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const symptoms = document.getElementById("symptoms").value;
    const doctor = document.getElementById("doctor").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if(!name || !age || !symptoms || !doctor || !date || !time){
        alert("Please fill all fields");
        return;
    }

    // Show confirmation message
    document.getElementById("confirmation").style.display = "block";

    // Optionally, save appointment to localStorage
    let appointments = JSON.parse(localStorage.getItem("appointments") || "[]");
    appointments.push({name, age, symptoms, doctor, date, time});
    localStorage.setItem("appointments", JSON.stringify(appointments));

    // Reset form
    this.reset();
});
