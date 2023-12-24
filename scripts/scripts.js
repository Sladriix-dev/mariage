document.addEventListener('DOMContentLoaded', () => {
    // Appliquer l'effet de zoom en entrée lors du chargement de la page
    document.body.classList.add('zoom-effect');
    
    // Écouter les clics sur les liens pour l'effet de zoom en sortie
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Empêcher le lien de charger immédiatement la nouvelle page
            let destination = this.href;

            // Appliquer l'effet de zoom en sortie
            document.body.classList.add('zoom-out');

            // Délai pour laisser l'animation se produire avant de rediriger
            setTimeout(() => {
                window.location.href = destination;
            }, 500); // Ce délai doit correspondre à la durée de l'animation CSS
        });
    });
});
