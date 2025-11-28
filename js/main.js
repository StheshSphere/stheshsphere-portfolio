// Fade-in on page load
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// Smooth page transition function
function smoothNavigate(url) {
    document.body.classList.add("fade-out");
    setTimeout(() => {
        window.location.href = url;
    }, 500); // Must match CSS transition duration
}

// Scroll to "My Work" section
const seeWorkBtn = document.getElementById("seeWorkBtn");
if (seeWorkBtn) {
    seeWorkBtn.addEventListener("click", () => {
        const target = document.getElementById("my-work");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
}

// Navigate to Contact page with fade-out animation
const contactBtn = document.getElementById("contactBtn");
if (contactBtn) {
    contactBtn.addEventListener("click", () => {
        smoothNavigate("contact.html");
    });
}

// Section reveal on scroll using IntersectionObserver
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    { threshold: 0.2 }
);

document.querySelectorAll(".section").forEach(section => {
    observer.observe(section);
});
