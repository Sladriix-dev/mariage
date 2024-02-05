document
  .getElementById("rsvp-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche l'envoi standard du formulaire

    // Déterminez si l'utilisateur a répondu "Oui" ou "Non"
    var participation = document.querySelector(
      'input[name="participation"]:checked'
    )?.value; // Utilisation de l'opérateur facultatif pour éviter les erreurs si rien n'est sélectionné
    var invites = document.getElementById("invites").value;
    var commentaires = document.getElementById("commentaires").value;

    // Assurez-vous que la participation a été sélectionnée
    if (!participation) {
      alert("Veuillez sélectionner une option de participation.");
      return; // Arrêtez la fonction ici si aucune option de participation n'est sélectionnée
    }

    // Préparez les paramètres en fonction de la réponse
    var emailParams = {
      from_name:
        document.getElementById("nom").value +
        " " +
        document.getElementById("prenom").value,
      reply_to: document.getElementById("email").value,
      message:
        participation === "oui" ? "sera présent." : "ne sera pas présent.",
      nbr_invites:
        invites > 0 ? "Nombre d'invités : " + invites : "Sans invité", // Préfixe ajouté pour clarifier dans l'email
      comments: commentaires
        ? "Il/Elle a laissé un commentaire : " + commentaires
        : "Aucun commentaire.",
    };

    emailjs.send("service_h3haa2r", "template_12bzfm7", emailParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);

        // Afficher le message de confirmation personnalisé
        var confirmationMessage = document.getElementById(
          "confirmation-message"
        );
        confirmationMessage.classList.remove("hidden");
        confirmationMessage.classList.add("show-confirmation");

        // Optionnel : cacher le message après quelques secondes
        setTimeout(function () {
          confirmationMessage.classList.add("hidden");
        }, 5000);
      },
      function (error) {
        console.log("FAILED...", error);
        // Ici, vous pourriez gérer l'erreur et afficher un message approprié
      }
    );
  });
