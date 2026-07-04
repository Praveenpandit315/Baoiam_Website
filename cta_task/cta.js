function validatePhone() {

    const phone = document.getElementById("phone").value.trim();

    // Check if input is empty
    if (phone === "") {
        alert("Please enter your mobile number.");
        return;
    }

    // Allow only 10-digit Indian mobile numbers
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid 10-digit Indian mobile number.");
        return;
    }

    alert("Thank you! We will contact you shortly.");

    // Clear input after successful submission
    document.getElementById("phone").value = "";
}