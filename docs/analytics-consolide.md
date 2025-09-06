# Analytics Consolidé

Ce script agrège des données provenant de plusieurs sources (feuilles ou classeurs) et les compile dans un seul onglet. C’est idéal pour centraliser des indicateurs dispersés et faciliter l’analyse.

## Paramètres

- `SOURCE_SHEET_IDS` : liste des IDs des classeurs à agréger. Par défaut, deux entrées sont définies comme exemples.
- `TARGET_SHEET_NAME` : nom de l’onglet où les données consolidées seront copiées.

## Utilisation

1. Mettez à jour la liste `SOURCE_SHEET_IDS` avec les IDs de vos classeurs sources.
2. Copiez [analytics-consolide.gs](../scripts/analytics-consolide.gs) dans votre projet Apps Script.
3. Exécutez `setupTrigger()` pour automatiser la consolidation quotidienne.
4. Le script efface le contenu de l’onglet cible à chaque exécution et y colle les nouvelles données.

## Conseils

- Utilisez un format de données homogène entre vos sources pour éviter des colonnes vides ou mal alignées.
- Pour consolider des onglets spécifiques, adaptez `getSheets()[0]` en `getSheetByName('NomDeLaFeuille')`.