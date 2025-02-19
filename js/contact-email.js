(function() {
    emailjs.init("HgDUV7XcIRWbkvDpf");
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_71huemi", "template_s6nyhxj", formData)
        .then(function(response) {
            alert("Message sent successfully!");
            console.log("SUCCESS!", response.status, response.text);
            document.getElementById("contact-form").reset();
        }, function(error) {
            alert("Message failed to send.");
            console.log("FAILED...", error);
        });
});
