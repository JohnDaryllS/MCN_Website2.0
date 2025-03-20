document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".app-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_9s9rj9r", "template_ey3vjjg", this)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Application submitted successfully! ✅",
          confirmButtonColor: "#3085d6",
        });
        form.reset();
      }, (error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to send application. ❌ Please try again.",
          confirmButtonColor: "#d33",
        });
        console.error("EmailJS Error:", error);
      });
  });
});
