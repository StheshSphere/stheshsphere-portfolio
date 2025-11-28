const form = document.getElementById("queryForm");
const statusMsg = document.getElementById("statusMsg");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    statusMsg.style.color = "#0a7b2e";
    statusMsg.textContent = "Sending...";

    const formData = new FormData(form);

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const result = await response.json();

        if (result.success) {
            statusMsg.style.color = "#0a7b2e";
            statusMsg.textContent = "Your query has been submitted successfully!";
            form.reset();
        } else {
            statusMsg.style.color = "red";
            statusMsg.textContent = "Failed to send. Please try again.";
        }
    } catch (error) {
        statusMsg.style.color = "red";
        statusMsg.textContent = "Network error. Please try again.";
    }
});
