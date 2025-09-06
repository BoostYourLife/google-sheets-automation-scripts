# Veille Prix

Le script **veille-prix.gs** interroge une API tierce pour récupérer les prix de vos concurrents et envoie un rapport succinct par email. Il constitue une base pour suivre l’évolution du marché et ajuster vos tarifs.

## Préparation

1. Listez vos produits dans `PRODUCT_LIST`.
2. Indiquez l’URL de l’API fournissant les données concurrentielles dans `API_ENDPOINT`.
3. Définissez les destinataires dans `RECIPIENTS`.
4. Copiez [veille-prix.gs](../scripts/veille-prix.gs){:target="_blank"} dans votre projet Apps Script.
5. Exécutez `setupTrigger()` pour lancer une surveillance quotidienne.

## Points à personnaliser

- La manière dont les données retournées par l’API sont analysées et comparées à vos propres prix.
- La condition de déclenchement d’une alerte (écart en pourcentage, seuil absolu, etc.).