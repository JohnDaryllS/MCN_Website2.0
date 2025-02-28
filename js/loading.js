 // Show loader before page loads
 document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.getElementById("loading-screen").classList.add("hidden");
    }, 1000); // Simulate loading time
});

// Function to simulate page navigation
function navigatePage() {
    document.getElementById("loading-screen").classList.remove("hidden");
    setTimeout(() => {
        window.location.href = "anotherpage.html"; // Change to your actual page
    }, 1000); // Delay to simulate loading
}