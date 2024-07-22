document.addEventListener("DOMContentLoaded", function() {
    // GSAP animations
    gsap.registerPlugin(ScrollTrigger);

    // Fade-in animation for sections
    gsap.utils.toArray('.gsap-fade-in').forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Music control
    let playCounter = 0;
    const musicControlBtn = document.getElementById("music-control-btn");
    const backgroundMusic = document.getElementById("background-music");

    musicControlBtn.addEventListener("click", () => {
        playCounter++;
        if (playCounter % 2 !== 0) {
            backgroundMusic.play();
            musicControlBtn.textContent = "Pause Music";
        } else {
            backgroundMusic.pause();
            musicControlBtn.textContent = "Play Music";
        }
    });

    // Form submission
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        // Example of handling form data
        console.log("Form submitted:", { name, email, message });

        // Clear form fields after submission
        form.reset();

        // You can add code here to actually send the form data to a server
    });

    // Add WeatherAware project link
    const weatherAwareLink = document.querySelector('#portfolio .grid-item:first-child a');
    if (weatherAwareLink) {
        weatherAwareLink.href = "https://weatheraware.netlify.app/";
    }

    // Background animation
    function animateBackground() {
        const colors = [
            'rgb(147, 69, 69)',
            'rgb(77, 77, 197)',
            'rgb(137, 111, 111)'
        ];
        let currentIndex = 0;

        setInterval(() => {
            currentIndex = (currentIndex + 1) % colors.length;
            document.body.style.background = `linear-gradient(45deg, ${colors[currentIndex]}, ${colors[(currentIndex + 1) % colors.length]})`;
        }, 3000);
    }
    
    animateBackground();
});
