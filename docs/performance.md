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

# Optimisation performance

Les scripts Apps Script ont des quotas et des limites de temps d’exécution. Voici quelques conseils pour les optimiser :

## Limiter les appels réseau

Regroupez les requêtes API et les envois d’email pour réduire le nombre d’appels externes. Par exemple, collectez les données dans une boucle puis envoyez un seul rapport.

## Utiliser les méthodes batch

Lorsque vous lisez ou écrivez des données dans Google Sheets, préférez des plages complètes (`getRange().getValues()`) plutôt que de nombreuses opérations cellule par cellule. Cela diminue fortement le temps d’exécution.

## Tester localement

Avant de planifier un déclencheur, exécutez votre fonction manuellement pour détecter les erreurs et optimiser les performances. Surveillez la durée dans l’éditeur Apps Script.