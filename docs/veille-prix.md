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

# Veille Prix

Le script **veille-prix.gs** interroge une API tierce pour récupérer les prix de vos concurrents et envoie un rapport succinct par email. Il constitue une base pour suivre l’évolution du marché et ajuster vos tarifs.

## Préparation

1. Listez vos produits dans `PRODUCT_LIST`.
2. Indiquez l’URL de l’API fournissant les données concurrentielles dans `API_ENDPOINT`.
3. Définissez les destinataires dans `RECIPIENTS`.
4. Copiez [veille-prix.gs](https://github.com/BoostYourLife/google-sheets-automation-scripts/blob/main/scripts/veille-prix.gs){:target="_blank"} dans votre projet Apps Script.
5. Exécutez `setupTrigger()` pour lancer une surveillance quotidienne.

## Points à personnaliser

- La manière dont les données retournées par l’API sont analysées et comparées à vos propres prix.
- La condition de déclenchement d’une alerte (écart en pourcentage, seuil absolu, etc.).