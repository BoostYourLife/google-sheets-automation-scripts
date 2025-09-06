# Backup Automatique

Le script **backup-automatique.gs** crée régulièrement une copie de votre fichier Google Sheets et la stocke dans Google Drive. C’est un moyen simple d’assurer un historique et une restauration rapide en cas d’erreur.

## Configuration

1. Ouvrez le fichier Apps Script et remplacez `SOURCE_SPREADSHEET_ID` par l’ID du classeur à sauvegarder (extrait de l’URL : `https://docs.google.com/spreadsheets/d/ID/edit`).
2. Créez ou identifiez un dossier dans votre Drive où stocker les copies et renseignez son ID dans `BACKUP_FOLDER_ID`.
3. Lancez `setupTrigger()` pour planifier des sauvegardes hebdomadaires. Vous pouvez modifier la fréquence (voir la [documentation Apps Script](https://developers.google.com/apps-script/reference/script/triggers)).

## Restaurer une sauvegarde

Les fichiers de sauvegarde sont des copies complètes. Ouvrez simplement la copie et utilisez-la comme nouvelle base si nécessaire.