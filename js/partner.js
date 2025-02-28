const partners = [
    { title: "Uneco", logo: "image/uneco.png", website: "#", facebook: "#" },
    { title: "GIZ SPADe", logo: "image/giz.jpg", website: "#", facebook: "#" },
    { title: "PCU Norte", logo: "image/569105_docs_google_image_file_grid_icon.png", website: "#", facebook: "#" },
    { title: "CUDC", logo: "image/cudc.jpg", website: "#", facebook: "#" },
    { title: "DCCDC", logo: "image/dccdc.jpeg", website: "#", facebook: "#" }
];

const container = document.getElementById("partners-container");

function createPartnerElement(partner) {
    const div = document.createElement("div");
    div.classList.add("container");
    div.innerHTML = `
        <img class="logo" src="${partner.logo}" alt="${partner.title}">
        <h3>${partner.title}</h3>
    `;
    return div;
}

function setupSlider() {
    for (let i = 0; i < partners.length; i++) {
        container.appendChild(createPartnerElement(partners[i]));
    }
    for (let i = 0; i < 3; i++) { 
        container.appendChild(createPartnerElement(partners[i])); 
    }
}

function slide() {
    container.style.transition = "transform 1s linear";
    container.style.transform = `translateX(-320px)`;
    setTimeout(() => {
        container.appendChild(container.firstElementChild);
        container.style.transition = "none";
        container.style.transform = "translateX(0)";
    }, 1000);
}

setupSlider();
setInterval(slide, 3000);