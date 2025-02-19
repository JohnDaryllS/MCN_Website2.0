const containers = document.querySelectorAll(".timeline-container");
        let currentPage = 0;
        const itemsPerPage = 5;
        function showPage(page) {
            containers.forEach((container, index) => {
                container.style.display = (index >= page * itemsPerPage && index < (page + 1) * itemsPerPage) ? "block" : "none";
            });
            document.getElementById("page-num").innerText = page + 1;
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
        document.getElementById("next").addEventListener("click", () => {
            if (currentPage < Math.ceil(containers.length / itemsPerPage) - 1) {
                currentPage++;
                showPage(currentPage);
            }
        });
        document.getElementById("prev").addEventListener("click", () => {
            if (currentPage > 0) {
                currentPage--;
                showPage(currentPage);
            }
        });
        showPage(currentPage);
        
        function toggleText(container) {
            container.classList.toggle("active");
        }
        
        document.addEventListener("scroll", () => {
            containers.forEach(container => {
                const rect = container.getBoundingClientRect();
                if (rect.top < window.innerHeight - 50) {
                    container.classList.add("visible");
                }
            });
        });