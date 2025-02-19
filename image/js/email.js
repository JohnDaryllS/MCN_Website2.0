(function() {
    emailjs.init("HgDUV7XcIRWbkvDpf");
})();

document.querySelector(".app-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let formData = {
        coop_name: document.getElementById("coop-name").value,
        cda_registration: document.getElementById("cda-registration").value,
        tin: document.getElementById("tin").value,
        coop_type: document.getElementById("coop-type").value,
        coop_anniversary: document.getElementById("coop-anniversary").value,
        office_address: document.getElementById("office-address").value,
        branches: document.getElementById("branches").value,
        office_number: document.getElementById("office-number").value,
        email: document.getElementById("email").value,
        fb_page: document.getElementById("fb-page").value,
        website: document.getElementById("website").value,
        authorized_rep: document.getElementById("authorized-rep").value,
        alternate_rep: document.getElementById("alternate-rep").value,
        total_assets: document.getElementById("total-assets").value,
        members: document.getElementById("members").value,
        bond: document.getElementById("bond").value,
        services: document.getElementById("services").value,
        affiliation: document.getElementById("affiliation").value,
        share_capital: document.getElementById("share-capital").value
    };

    emailjs.send("service_9s9rj9r", "template_ey3vjjg", formData)
        .then(function(response) {
            alert("Application submitted successfully!");
            console.log("SUCCESS!", response.status, response.text);
            document.getElementById(".app-form").reset();
        }, function(error) {
            alert("Failed to send application. Please try again.");
            console.log("FAILED...", error);
        });
});
