document.addEventListener("DOMContentLoaded", function() {
        const members = document.querySelectorAll(".member");
        members.forEach((member, index) => {
            setTimeout(() => {
                member.style.opacity = "1";
                member.style.transform = "translateY(0)";
            }, index * 300);
        });
    });