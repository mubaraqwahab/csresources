document.addEventListener("DOMContentLoaded", function() {
  var contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the form data
    var data = {
      name: event.target.elements.nameInput.value,
      email: event.target.elements.emailInput.value,
      message: event.target.elements.messageInput.value
    };

    console.log(data);

    // Send the message to some backend service.
    // fetch("url/of/backend/service", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data)
    // })
    //   .then(function(response) {
    //     // Message sent!
    //     contactForm.reset();
    //   })
    //   .catch(function(error) {
    //     // Error sending message!
    //     console.log(error);
    //   });
  });
});
