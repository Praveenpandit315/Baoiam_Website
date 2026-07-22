/* ===========================
        SCREEN NAVIGATION
=========================== */

const screens = document.querySelectorAll(".screen");
const nextButtons = document.querySelectorAll(".next-btn");

nextButtons.forEach(button => {

    button.addEventListener("click", () => {

        const next = button.dataset.next;

        screens.forEach(screen => {

            screen.classList.remove("active");

        });

        document.getElementById(next).classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});

/* ===========================
        OTP AUTO FOCUS
=========================== */

const otpInputs = document.querySelectorAll(".otp-box input");

otpInputs.forEach((input, index) => {

    input.addEventListener("input", () => {

        input.value = input.value.replace(/[^0-9]/g, "");

        if (input.value.length === 1 && index < otpInputs.length - 1) {

            otpInputs[index + 1].focus();

        }

    });

    input.addEventListener("keydown", (e) => {

        if (e.key === "Backspace" && input.value === "" && index > 0) {

            otpInputs[index - 1].focus();

        }

    });

});

/* ===========================
        OTP TIMER
=========================== */

let time = 28;

const timer = document.getElementById("timer");

function startTimer() {

    const interval = setInterval(() => {

        let minutes = Math.floor(time / 60);

        let seconds = time % 60;

        timer.innerText =
            String(minutes).padStart(2, "0") +
            ":" +
            String(seconds).padStart(2, "0");

        if (time <= 0) {

            clearInterval(interval);

            timer.innerHTML = "00:00";

        }

        time--;

    }, 1000);

}

startTimer();

/* ===========================
      COURSE SELECTION
=========================== */

const cards = document.querySelectorAll(".course-card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("active");

    });

});

/* ===========================
      BASIC VALIDATION
=========================== */

const signupButton = document.querySelector(".email-btn");

if (signupButton) {

    signupButton.addEventListener("click", () => {

        const email = document.querySelector("#signup input");

        if (!email.value.trim()) {

            alert("Please enter your email.");

            return;

        }

        screens.forEach(screen => {

            screen.classList.remove("active");

        });

        document.getElementById("otp").classList.add("active");

    });

}

const verifyButton = document.querySelector("#otp .orange-btn");

if (verifyButton) {

    verifyButton.addEventListener("click", () => {

        let otp = "";

        otpInputs.forEach(input => otp += input.value);

        if (otp.length < 6) {

            alert("Please enter the complete OTP.");

        }

    });

}

/* ===========================
        RESEND OTP
=========================== */

const resend = document.querySelector(".resend span");

if (resend) {

    resend.addEventListener("click", () => {

        time = 28;

        startTimer();

        alert("OTP resent successfully.");

    });

}

/* ===========================
      ENTER KEY SUPPORT
=========================== */

document.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {

        const active = document.querySelector(".screen.active");

        const button = active.querySelector(".next-btn");

        if (button) {

            button.click();

        }

    }

});

const nextArrow = document.getElementById("nextArrow");

nextArrow.addEventListener("click", function () {

    const email = document.getElementById("email").value.trim();

    if (email === "") {
        alert("Please enter your email.");
        return;
    }

    // Display the entered email on the OTP page
    document.getElementById("otpEmail").textContent = email;

    // Show OTP screen
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById("otp").classList.add("active");

});

document.getElementById("email").addEventListener("keypress", function(e){

    if(e.key === "Enter"){
        document.getElementById("nextArrow").click();
    }

});