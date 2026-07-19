/*======================================================
                BAOIAM - OUR INSIGHTS
======================================================*/

document.addEventListener("DOMContentLoaded", () => {

    console.log("Our Insights Page Loaded Successfully");

    /*=========================================
            SCROLL REVEAL ANIMATION
    =========================================*/

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show-section");

            }

        });

    }, {
        threshold: 0.2
    });

    sections.forEach(section => {
        observer.observe(section);
    });


    /*=========================================
            GALLERY IMAGE HOVER
    =========================================*/

    const gallery = document.querySelector(".gallery-card");

    if (gallery) {

        gallery.addEventListener("mouseenter", () => {

            gallery.style.transform = "translateY(-10px)";

        });

        gallery.addEventListener("mouseleave", () => {

            gallery.style.transform = "translateY(0px)";

        });

    }


    /*=========================================
            LOGO HOVER EFFECT
    =========================================*/

    const logos = document.querySelectorAll(".logo-item");

    logos.forEach((logo) => {

        logo.addEventListener("mouseenter", () => {

            logo.style.transition = ".3s";
            logo.style.transform = "translateY(-10px)";

        });

        logo.addEventListener("mouseleave", () => {

            logo.style.transform = "translateY(0px)";

        });

    });


    /*=========================================
            COMPANY LOGO EFFECT
    =========================================*/

    const companyLogos = document.querySelectorAll(".company-logo");

    companyLogos.forEach((logo) => {

        logo.addEventListener("mouseenter", () => {

            logo.style.transition = ".3s";
            logo.style.transform = "scale(1.05)";

        });

        logo.addEventListener("mouseleave", () => {

            logo.style.transform = "scale(1)";

        });

    });


    /*=========================================
            SMOOTH SCROLL
    =========================================*/

    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });


    /*=========================================
            IMAGE LOADING EFFECT
    =========================================*/

    const images = document.querySelectorAll("img");

    images.forEach(img => {

        img.addEventListener("load", () => {

            img.style.opacity = "1";

        });

    });


    /*=========================================
            SCROLL TO TOP BUTTON
            (Optional)
    =========================================*/

    const topButton = document.createElement("button");

    topButton.innerHTML = "↑";

    topButton.id = "topBtn";

    document.body.appendChild(topButton);

    topButton.style.cssText = `
        position:fixed;
        right:25px;
        bottom:25px;
        width:50px;
        height:50px;
        border:none;
        border-radius:50%;
        background:#ff6b00;
        color:#fff;
        font-size:22px;
        cursor:pointer;
        display:none;
        z-index:1000;
        box-shadow:0 10px 25px rgba(0,0,0,.2);
        transition:.3s;
    `;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            topButton.style.display = "block";

        } else {

            topButton.style.display = "none";

        }

    });

    topButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

});