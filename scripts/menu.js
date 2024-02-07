document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        const menuIsActive = menu.classList.contains('active');

        this.classList.toggle('active');
        menu.classList.toggle('active');

        if (menuIsActive) {
            body.style.overflow = ''; // Réactive le défilement
        } else {
            body.style.overflow = 'hidden'; // Désactive le défilement
        }
    });
});
