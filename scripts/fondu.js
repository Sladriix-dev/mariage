document.addEventListener('DOMContentLoaded', (event) => {
    // Fondu en entrée lors du chargement initial
    document.body.style.opacity = 0;
    document.body.style.transition = 'opacity 1s';
    document.body.style.opacity = 1;

    // Fondu en sortie lors du clic sur un lien
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let target = this.href;

            document.body.style.opacity = 0;

            setTimeout(() => {
                window.location.href = target;
            }, 500);
        });
    });
});

