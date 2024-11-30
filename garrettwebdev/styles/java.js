const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active'); // Toggles the "X" icon
    offScreenMenu.classList.toggle('active'); // Toggles the menu visibility
});