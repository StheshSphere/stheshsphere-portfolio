fetch("components/navbar.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    });
fetch("components/footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });
// DROPDOWN TOGGLE
document.addEventListener("click", () => {
    const dropdownBtn = document.querySelector(".dropdown-btn");
    const mobileNav = document.getElementById("mobile-nav-links");

    dropdownBtn.addEventListener("click", function (e) {
        e.stopPropagation();    // prevents closing instantly
        mobileNav.style.display =
            mobileNav.style.display === "flex" ? "none" : "flex";
    });

    // Clicking outside closes menu
    document.addEventListener("click", function () {
        mobileNav.style.display = "none";
    });
});
