//this is  for the locomotive smoothscroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
// Select all nav links that point to sections
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            scroll.scrollTo(target); // Locomotive scroll to the section
        }
    });
});


// welcome section
const greetings = ["Namaste", "Hola", "Hello", "Bonjour", "Ciao", "Hallo", "Konnichiwa", "Salaam"];
let index = 0;
const greetingEl = document.getElementById('greeting');

setInterval(() => {
    index = (index + 1) % greetings.length;
    greetingEl.textContent = greetings[index];
}, 1000); // Change greeting every 1 seconds


// handling contact form
(function () {
    emailjs.init("wyXJ5NTryIr5wrTWa"); //  public key
})();

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_uunsmsw", "template_i2nrxq6", this)
        .then(() => {
            alert("✅ Message Sent Successfully!");
            form.reset();
        }, (error) => {
            alert("❌ Failed to send message. Please try again.");
            console.log(error);
        });
});





// skill section card animation
function skillanimation() {
    gsap.from(".skill-card", {
        scrollTrigger: "#skills",
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power2.out",
    });
}
function projectanimation() {
    // project section 
    gsap.from(".project-row", {
        scrollTrigger: {
            trigger: ".project-row",
            scroller: ".main", //  Locomotive scroll container
            start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out"
    });
}

function contactanimation() {
    //contact form  animation
    gsap.from("#contact .contact-form, #contact .contact-socials", {
        scrollTrigger: {
            trigger: "#contact",
            scroller: ".main", //  locomotive container
            start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out"
    });
}

skillanimation();
projectanimation();
contactanimation();