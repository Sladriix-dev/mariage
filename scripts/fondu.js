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

document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner les boutons radio
    var ouiRadio = document.getElementById('oui');
    var nonRadio = document.getElementById('non');
    var invitesInput = document.getElementById('invites');
    var invitesLabel = document.querySelector('label[for="invites"]');

    // Fonction pour activer/désactiver le nombre d'invités
    function toggleInvitesInput() {
        if(nonRadio.checked) {
            invitesInput.disabled = true;
            invitesLabel.style.opacity = 0.5;
            invitesInput.style.opacity = 0.5;
        } else {
            invitesInput.disabled = false;
            invitesLabel.style.opacity = 1;
            invitesInput.style.opacity = 1;
        }
    }

    // Ajouter un événement d'écoute pour les changements de boutons radio
    ouiRadio.addEventListener('change', toggleInvitesInput);
    nonRadio.addEventListener('change', toggleInvitesInput);

    // Appeler la fonction au chargement pour définir l'état initial
    toggleInvitesInput();
});

