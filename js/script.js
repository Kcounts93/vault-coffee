document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("myForm"); // Change 'myForm' to your form's ID
  var submitButton = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (form.checkValidity()) {
      // Simulate submission success (Replace with your actual submission logic)
      setTimeout(function () {
        // Display success message
        var successMessage = document.createElement("div");
        successMessage.classList.add("alert", "alert-success", "mt-3");
        successMessage.textContent = "Form submitted successfully!";
        form.appendChild(successMessage);

        // Reset the form after a delay
        setTimeout(function () {
          form.reset();
          successMessage.remove();
        }, 3000);
      }, 1000); // Simulating a delay before showing success
    } else {
      // If form is not valid, show validation messages
      form.classList.add("was-validated");
    }
  });
});
