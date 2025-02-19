document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav-list").classList.toggle("active");
});

document.querySelectorAll(".dropdown-btn").forEach(button => {
    button.addEventListener("click", function() {
        let dropdown = this.nextElementSibling;
        let parentList = this.closest(".nav-list");
        parentList.querySelectorAll(".dropdown").forEach(menu => {
            if (menu !== dropdown) {
                menu.classList.remove("active");
            }
        });
        dropdown.classList.toggle("active");
    });
});

window.addEventListener("scroll", function() {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("fixed-navbar");
    } else {
        navbar.classList.remove("fixed-navbar");
    }
});