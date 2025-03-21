function showUpcoming() {
    document.getElementById("upcoming-trainings").style.display = "block";
    document.getElementById("finished-trainings").style.display = "none";
    document.getElementById("upcoming-btn").classList.add("active");
    document.getElementById("finished-btn").classList.remove("active");
}

function showFinished() {
    document.getElementById("upcoming-trainings").style.display = "none";
    document.getElementById("finished-trainings").style.display = "block";
    document.getElementById("upcoming-btn").classList.remove("active");
    document.getElementById("finished-btn").classList.add("active");
}

function checkTrainings() {
    const today = new Date();
    const upcoming = document.getElementById("upcoming-trainings");
    const finished = document.getElementById("finished-trainings");
    
    document.querySelectorAll(".training-section").forEach(section => {
        const trainingDate = new Date(section.getAttribute("data-date"));
        if (trainingDate < today) {
            finished.appendChild(section);
        }
    });
}

checkTrainings();