// Simple button interaction
const donateButton = document.querySelector(".donate-btn");

donateButton.addEventListener("click", () => {
    alert("Thank you for choosing to make a difference!");
});

// Overlay menu open/close behavior
const menuButton = document.getElementById('menuButton');
const overlayMenu = document.getElementById('overlayMenu');
const overlayClose = document.getElementById('overlayClose');
const deviceLabel = document.getElementById('deviceLabel');

function openMenu() {
    overlayMenu.classList.add('open');
    overlayMenu.setAttribute('aria-hidden', 'false');
    menuButton.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
    overlayMenu.classList.remove('open');
    overlayMenu.setAttribute('aria-hidden', 'true');
    menuButton.setAttribute('aria-expanded', 'false');
}

menuButton.addEventListener('click', () => {
    const isOpen = overlayMenu.classList.contains('open');
    if (isOpen) closeMenu(); else openMenu();
});

overlayClose.addEventListener('click', closeMenu);

// Close when clicking outside the inner panel
overlayMenu.addEventListener('click', (e) => {
    if (e.target === overlayMenu) closeMenu();
});

// Device indicator: show label based on width
function updateDeviceLabel() {
    const w = window.innerWidth;
    let label = 'Desktop';
    if (w <= 600) label = 'Phone';
    else if (w <= 900) label = 'Laptop/Tablet';
    if (deviceLabel) deviceLabel.textContent = label;
}
window.addEventListener('resize', updateDeviceLabel);
window.addEventListener('load', updateDeviceLabel);
