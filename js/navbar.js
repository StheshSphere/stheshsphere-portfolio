// fetch("components/navbar.html")
//     .then(res => res.text())
//     .then(data => {
//         document.innerHTML("navbar").innerHTML = data;
//     });

// fetch("components/footer.html")
//     .then(res => res.text())
//     .then(data => {
//         document.getElementById("footer").innerHTML = data;
//     });
const navbarContainer = document.querySelector('.navbar');
fetch("components/navbar.html")
    .then(res => res.text())
    .then(data => {
        navbarContainer.innerHTML = data;
    });