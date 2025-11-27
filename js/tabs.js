const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');
const cards = document.querySelectorAll('.tool-card');

// TAB SWITCHING
tabs.forEach(tab => {
    tab.addEventListener('click', () => {

        // deactivate all tabs + content
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        // activate clicked tab
        tab.classList.add('active');

        // show correct panel
        const target = document.getElementById(tab.dataset.tab);
        target.classList.add('active');
    });
});

// CARD ACTIVATION (runs ONCE)
cards.forEach(card => {
    card.addEventListener('click', () => {
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    });
});
