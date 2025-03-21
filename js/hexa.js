document.querySelectorAll(".hexagon").forEach(hex => {
    hex.addEventListener("click", function() {
        const title = this.getAttribute("data-title");
        const description = this.getAttribute("data-description");

        document.getElementById("popup-title").textContent = title;
        document.getElementById("popup-description").textContent = description;

        document.getElementById("popup").style.display = "block";
    });
});

function closePopup() {
    document.getElementById("popup").style.display = "none";
}