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

# Sécurité et bonnes pratiques

En utilisant des scripts automatisés avec Google Sheets, il est important de respecter certaines règles de sécurité.

## Protéger vos données

- Ne partagez jamais vos clés API ou identifiants personnels dans un dépôt public.
- Utilisez les [propriétés de script](https://developers.google.com/apps-script/guides/properties){:target="_blank"} pour stocker les secrets de manière sécurisée.

## Contrôler les autorisations

Lors de l’installation d’un script, Google demande d’accorder des autorisations ; ne validez que celles qui sont nécessaires. Revoyez régulièrement la liste des déclencheurs et supprimez ceux qui ne sont plus utilisés.

## Auditer le code

Avant d’intégrer des contributions externes, lisez attentivement le code afin de détecter d’éventuelles failles (envoi non autorisé d’emails, suppression de données, etc.).