/**
 * Backup automatique – Exportation programmée de vos données vers Google Drive.
 *
 * Ce script crée une copie de votre fichier Google Sheets et la stocke dans
 * un dossier spécifique de votre Drive. Ajustez les identifiants et la
 * fréquence selon vos besoins.
 */

const SOURCE_SPREADSHEET_ID = 'PASTE_SOURCE_ID_HERE'; // ⚠️ remplacez par l’ID de votre spreadsheet
const BACKUP_FOLDER_ID = 'PASTE_FOLDER_ID_HERE'; // ⚠️ remplacez par l’ID du dossier de destination

/**
 * Crée une copie du fichier Google Sheets avec un horodatage dans le nom.
 */
function backupAutomatique() {
  const sourceFile = DriveApp.getFileById(SOURCE_SPREADSHEET_ID);
  const backupFolder = DriveApp.getFolderById(BACKUP_FOLDER_ID);
  const timestamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyyMMdd-HHmmss');
  const newName = sourceFile.getName() + ' - Backup ' + timestamp;
  sourceFile.makeCopy(newName, backupFolder);
}

/**
 * Planifie un backup hebdomadaire.
 */
function setupTrigger() {
  ScriptApp.newTrigger('backupAutomatique')
    .timeBased()
    .everyWeeks(1)
    .create();
}