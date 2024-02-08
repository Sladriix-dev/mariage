document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("rsvp-form");
  const confirmationMessage = document.getElementById("confirmation-message");

  // Restaurer les données du formulaire si elles existent dans localStorage
  form.nom.value = localStorage.getItem("nom") || "";
  form.prenom.value = localStorage.getItem("prenom") || "";
  form.email.value = localStorage.getItem("email") || "";
  form.invites.value = localStorage.getItem("invites") ?? "";
  form.commentaires.value = localStorage.getItem("commentaires") || "";

  // Fonction pour vérifier si les champs requis sont remplis et si 'invites' est un nombre entier
  function validateForm() {
    if (
      !form.nom.value ||
      !form.prenom.value ||
      !form.email.value ||
      !form.querySelector('input[name="participation"]:checked')
    ) {
      alert("Veuillez remplir tous les champs requis.");
      return false;
    }

    // Vérifie si 'invites' est un nombre entier
    if (form.invites.value && !Number.isInteger(Number(form.invites.value))) {
      alert("Veuillez entrer un nombre entier pour le nombre d'invités.");
      return false;
    }

    return true;
  }

  // Fonction pour sauvegarder les données du formulaire
  function saveFormData() {
    localStorage.setItem("nom", form.nom.value);
    localStorage.setItem("prenom", form.prenom.value);
    localStorage.setItem("email", form.email.value);
    localStorage.setItem("invites", form.invites.value);
    localStorage.setItem("commentaires", form.commentaires.value);
  }

  // Écouteur d'événements sur les champs du formulaire pour sauvegarder les données
  form.addEventListener("input", saveFormData);

  // Écouteur d'événements sur le formulaire pour la soumission
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Vérifier la validation du formulaire
    if (!validateForm()) {
      return;
    }

    // Préparez les paramètres en fonction de la réponse
    var emailParams = {
      from_name: form.nom.value + " " + form.prenom.value,
      reply_to: form.email.value,
      message:
        form.querySelector('input[name="participation"]:checked').value ===
        "oui"
          ? "sera présent."
          : "ne sera pas présent.",
      nbr_invites: form.invites.value
        ? "Nombre d'invités : " + form.invites.value
        : "Sans invité",
      comments: form.commentaires.value
        ? "Commentaire : " + form.commentaires.value
        : "Aucun commentaire.",
    };

    // Envoyez l'email avec EmailJS
    emailjs.send("service_h3haa2r", "template_12bzfm7", emailParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        showConfirmationPopup();
        form.reset();
        localStorage.clear();
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  });

  function showConfirmationPopup() {
    const confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.classList.add('show'); 

    // Pour cacher à nouveau l'élément après l'affichage
    setTimeout(() => {
      confirmationMessage.classList.remove("show");
    }, 2500); // L'élément sera caché après 2.5 secondes
  }
});
