  document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("HgDUV7XcIRWbkvDpf");

    const form = document.getElementById("contact-form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            // Show loading indicator
            Swal.fire({
                title: "Sending...",
                text: "Please wait while we send your message.",
                icon: "info",
                allowOutsideClick: false,
                showConfirmButton: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            emailjs.sendForm("service_96234c9", "template_s6nyhxj", this)
                .then(() => {
                    Swal.fire({
                        title: "Message Sent! ✅",
                        text: "Your message has been sent successfully.",
                        icon: "success",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "OK",
                    });

                    form.reset();
                })
                .catch(error => {
                    Swal.fire({
                        title: "Error ❌",
                        text: "Failed to send message. Please try again later.",
                        icon: "error",
                        confirmButtonColor: "#d33",
                        confirmButtonText: "Close",
                    });

                    console.error("EmailJS Error:", error);
                });
        });
    } else {
        console.error("Contact form not found. Make sure the form ID is correct.");
    }
});
