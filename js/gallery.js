// PROJECT IMAGE COLLECTIONS
const projectImages = {
    project1of1: [
        "../assets/images/portfolio/StheshSphere/Wireframes/1.jpeg",
        "../assets/images/portfolio/StheshSphere/Wireframes/2.jpeg",
        "../assets/images/portfolio/StheshSphere/Wireframes/3.jpeg",
        "../assets/images/portfolio/StheshSphere/Wireframes/4.jpeg",
    ],
    project1of2: [
        "../assets/images/portfolio/StheshSphere/Final Wireframes/1.jpeg",
        "../assets/images/portfolio/StheshSphere/Final Wireframes/2.jpeg",
        "../assets/images/portfolio/StheshSphere/Final Wireframes/3.jpeg",
        "../assets/images/portfolio/StheshSphere/Final Wireframes/4.jpeg",
        "../assets/images/portfolio/StheshSphere/Final Wireframes/5.jpeg",
        "../assets/images/portfolio/StheshSphere/Final Wireframes/6.jpeg",
        "../assets/images/portfolio/StheshSphere/Final Wireframes/7.jpeg",
        "../assets/images/portfolio/StheshSphere/Final Wireframes/8.jpeg",
        "../assets/images/portfolio/StheshSphere/Final Wireframes/9.jpeg",
        "../assets/images/portfolio/StheshSphere/Final Wireframes/10.jpeg",
        "../assets/images/portfolio/StheshSphere/Final Wireframes/11.jpeg",
        "../assets/images/portfolio/StheshSphere/Final Wireframes/12.jpeg",
    ],
    project1of3: [
        "../assets/images/portfolio/WhatsApp Image 2025-04-09 at 19.38.09_2c1d7e32.jpg",
    ],
    project2of1: [
        "../assets/images/portfolio/Lend-a-Hand/Wireframes/1.jpeg",
        "../assets/images/portfolio/Lend-a-Hand/Wireframes/2.jpeg",
        "../assets/images/portfolio/Lend-a-Hand/Wireframes/3.jpeg",
    ],
    project3of1: [
        "../assets/images/portfolio/Promaths/Wireframes/1.jpeg",
        "../assets/images/portfolio/Promaths/Wireframes/2.jpeg",
        "../assets/images/portfolio/Promaths/Wireframes/3.jpeg",
    ],
    project3of2: [
        "../assets/images/portfolio/Promaths/Final Wireframes/1.jpeg",
        "../assets/images/portfolio/Promaths/Final Wireframes/2.jpeg",
        "../assets/images/portfolio/Promaths/Final Wireframes/3.jpeg",
        "../assets/images/portfolio/Promaths/Final Wireframes/4.jpeg",
        "../assets/images/portfolio/Promaths/Final Wireframes/5.jpeg",
        "../assets/images/portfolio/Promaths/Final Wireframes/6.jpeg",
        "../assets/images/portfolio/Promaths/Final Wireframes/7.jpeg",
        "../assets/images/portfolio/Promaths/Final Wireframes/8.jpeg",
        "../assets/images/portfolio/Promaths/Final Wireframes/9.jpeg",
    ],
};

let currentProject = null;
let currentIndex = 0;

const modal = document.getElementById("gallery-modal");
const galleryImg = document.getElementById("gallery-image");

// OPEN GALLERY
document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
        currentProject = card.dataset.project;
        currentIndex = 0;

        galleryImg.src = projectImages[currentProject][0];
        modal.style.display = "flex";
    });
});

// NAVIGATION
document.getElementById("next-img").onclick = () => {
    currentIndex = (currentIndex + 1) % projectImages[currentProject].length;
    galleryImg.src = projectImages[currentProject][currentIndex];
};

document.getElementById("prev-img").onclick = () => {
    currentIndex = (currentIndex - 1 + projectImages[currentProject].length) % projectImages[currentProject].length;
    galleryImg.src = projectImages[currentProject][currentIndex];
};

// CLOSE GALLERY
document.getElementById("close-gallery").onclick = () => {
    modal.style.display = "none";
};
