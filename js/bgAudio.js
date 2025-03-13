window.addEventListener("load", function () {
    setTimeout(() => {
      const audio = document.getElementById("bg-music");
      audio.currentTime = 0;
      audio.play().catch(error => console.log("Autoplay blocked:", error));
    }, 9000);
  });