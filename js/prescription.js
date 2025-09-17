// prescription.js - Download prescription as text

function downloadPrescription(id){
    // Sample prescription data
    const prescriptions = [
        {
            patient: "Ravi Kumar",
            doctor: "Dr. Ramesh Kumar",
            medicines: "Paracetamol 500mg",
            instructions: "Take twice a day after meals"
        },
        {
            patient: "Meena Sharma",
            doctor: "Dr. Sneha Rao",
            medicines: "Amoxicillin 250mg",
            instructions: "Take one capsule every 8 hours"
        }
    ];

    const pres = prescriptions[id-1];
    if(!pres) return;

    let content = `Patient Name: ${pres.patient}\nDoctor: ${pres.doctor}\nMedicines: ${pres.medicines}\nInstructions: ${pres.instructions}`;
    let blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${pres.patient}_prescription.txt`;
    link.click();
}
