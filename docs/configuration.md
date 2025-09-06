# Configuration avancée

Cette section détaille les options de configuration disponibles dans les différents scripts afin de les adapter à votre contexte spécifique.

## Modifier les constantes

Chaque script définit des constantes en haut de fichier pour faciliter la configuration (ex. `API_URL`, `THRESHOLD`, `PDF_RECIPIENTS`).

1. Ouvrez le fichier .gs correspondant.
2. Repérez les constantes indiquées par des commentaires **⚠️**.
3. Remplacez les valeurs par défaut par vos propres paramètres (ID de spreadsheet, clés API, adresses email).

## Changer les déclencheurs

Les fonctions `setupTrigger()` utilisent l’API `ScriptApp` pour planifier les tâches. Vous pouvez choisir :

- `everyHours(n)` : exécution toutes les *n* heures.
- `everyDays(n)` : exécution tous les *n* jours.
- `everyWeeks(n)` : exécution toutes les *n* semaines.
- `onMonthDay(d)` : exécution le jour *d* de chaque mois.

Adaptez ces valeurs pour mieux refléter vos besoins opérationnels.

## Variables sensibles

Évitez de conserver des données sensibles (clés API, mots de passe) directement dans le code. Utilisez plutôt un document séparé, un script de configuration ou les [propriétés de script](https://developers.google.com/apps-script/guides/properties){:target="_blank"}.