# Dashboard Temps Réel

Ce document décrit le fonctionnement du script **dashboard-temps-reel.gs**. Il permet d’importer automatiquement des données depuis une API externe et de les afficher dans un tableau de bord Google Sheets en temps réel.

## Utilisation

1. Ouvrez votre Google Sheet et créez un onglet nommé « Dashboard ».
2. Copiez le contenu du fichier [dashboard-temps-reel.gs](../scripts/dashboard-temps-reel.gs){:target="_blank"} dans un projet Google Apps Script associé à votre feuille.
3. Modifiez les variables `API_URL` et `API_KEY` pour les adapter à votre source de données.
4. Exécutez la fonction `setupTrigger()` pour mettre en place un déclencheur horaire.
5. Les données seront automatiquement actualisées dans votre tableau de bord.

## Personnalisation

- **Mapping des données :** adaptez la ligne qui construit `values` pour correspondre à la structure de l’API.
- **Fréquence :** modifiez `everyHours(1)` dans `setupTrigger()` pour choisir une autre cadence.

## Dépannage

Si aucune donnée n’apparaît :

- Vérifiez l’URL et la clé API.
- Consultez les logs (`Ctrl+Entrée` dans l’éditeur Apps Script) pour voir d’éventuelles erreurs.