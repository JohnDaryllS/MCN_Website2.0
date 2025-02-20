(function() {
    emailjs.init("HgDUV7XcIRWbkvDpf"); // Replace with your EmailJS Public Key
  })();

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_96234c9', 'template_s6nyhxj', this)
      .then(function() {
        alert('Message sent successfully! ✅');
        document.getElementById('contact-form').reset();
      }, function(error) {
        alert('Failed to send message. ❌ Please try again later.');
        console.error('EmailJS Error:', error);
      });
  });