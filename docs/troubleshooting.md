<!--
Ajout d'un style pour remplacer le lien de titre automatique du thème par « ACCUEIL ».
Ce code CSS rend le texte du lien invisible et ajoute le mot « ACCUEIL » à sa place.
-->
<style>
.markdown-body > h1 > a {
  color: transparent;
  position: relative;
}
.markdown-body > h1 > a::after {
  content: "ACCUEIL";
  color: #0969da;
  position: absolute;
  left: 0;
}
</style>

# Dépannage et FAQ

Cette page recense les problèmes fréquents rencontrés lors de l’utilisation des scripts et fournit des solutions.

## Les scripts ne s’exécutent pas

1. Assurez‑vous d’avoir correctement configuré les déclencheurs via `setupTrigger()`.
2. Vérifiez dans le tableau de bord des déclencheurs (Éditeur Apps Script → Horloge) que les déclencheurs sont actifs.
3. Ouvrez le journal d’exécution (`Ctrl+Entrée`) pour identifier les erreurs éventuelles.

## Les emails ne sont pas envoyés

1. Vérifiez que l’adresse du destinataire est correcte.
2. Assurez‑vous que Gmail n’a pas bloqué l’envoi ; Google applique des limites journalières selon les comptes.
3. Consultez l’onglet « Quota » de l’éditeur Apps Script pour suivre votre consommation.

## Problèmes d’autorisations

Lors de la première exécution, Google demande des autorisations. Si vous avez refusé ou si vous souhaitez les modifier :

1. Allez dans [moncompte.google.com/permissions](https://myaccount.google.com/permissions){:target="_blank"} et révoquez l’accès de l’application.
2. Exécutez à nouveau le script pour réautoriser.