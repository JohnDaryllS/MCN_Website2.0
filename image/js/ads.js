function closeAds() {
    document.getElementById("adsContainer").style.display = "none";
}

const adsContainer = document.getElementById("adsContainer");
let isDragging = false;
let offsetX, offsetY;

adsContainer.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - adsContainer.getBoundingClientRect().left;
    offsetY = e.clientY - adsContainer.getBoundingClientRect().top;
    adsContainer.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        adsContainer.style.left = `${e.clientX - offsetX}px`;
        adsContainer.style.top = `${e.clientY - offsetY}px`;
        adsContainer.style.right = "auto";
        adsContainer.style.bottom = "auto";
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    adsContainer.style.cursor = "grab";
});