function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let subject = document.getElementById("subject").value.trim();
  let message = document.getElementById("message").value.trim();
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !subject || !message) {
    alert("All fields are required!");
    return false;
  }

  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}
