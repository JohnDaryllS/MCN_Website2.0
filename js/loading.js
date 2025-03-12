document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.getElementById("loading-screen").classList.add("hidden");
    }, 1000);
});

function navigatePage() {
    document.getElementById("loading-screen").classList.remove("hidden");
    setTimeout(() => {
        window.location.href = "anotherpage.html";
    }, 1000);
}