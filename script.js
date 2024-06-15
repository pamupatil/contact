document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // You can perform additional validation here

    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);

    // You can send the form data to a server using AJAX

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
});