document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav-list").classList.toggle("active");
});

document.querySelectorAll(".dropdown-btn").forEach(button => {
    button.addEventListener("click", function() {
        let dropdown = this.nextElementSibling;
        let parentList = this.closest(".nav-list");
        
        // Close other open dropdowns
        parentList.querySelectorAll(".dropdown").forEach(menu => {
            if (menu !== dropdown) {
                menu.classList.remove("active");
            }
        });
        
        // Toggle clicked dropdown
        dropdown.classList.toggle("active");
    });
});