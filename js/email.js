const form = document.querySelector(".app-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_9s9rj9r", "template_ey3vjjg", this)
      .then(() => {
        alert("Application submitted successfully!");
        form.reset();
      }, (error) => {
        alert("Failed to send application. Please try again.");
        console.error("EmailJS Error:", error);
      });
  });