fetch("components/navbar.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;

        // Initialize dropdown AFTER navbar loads
        initDropdown();
    });

fetch("components/footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });

function initDropdown() {
    const dropdownBtn = document.querySelector(".dropdown-btn");
    const mobileNav = document.getElementById("mobile-nav-links");

    // Ensure hidden by default
    mobileNav.style.display = "none";

    // Toggle menu
    dropdownBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        mobileNav.style.display =
            (mobileNav.style.display === "none") ? "flex" : "none";
    });

    // Close on outside click
    document.addEventListener("click", function (e) {
        if (!mobileNav.contains(e.target) && !dropdownBtn.contains(e.target)) {
            mobileNav.style.display = "none";
        }
    });
}
