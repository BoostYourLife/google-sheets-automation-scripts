/**
 * Alertes seuils – Notifications par email lorsqu’un seuil est dépassé.
 *
 * Ce script parcourt une feuille de calcul et envoie un email lorsque les
 * valeurs d’une colonne dépassent un seuil défini. Personnalisez les variables
 * SHEET_NAME, THRESHOLD et RECIPIENT pour l’adapter à votre cas.
 */

const SHEET_NAME = 'Suivi';
const THRESHOLD = 1000;
const RECIPIENT = 'example@example.com'; // ⚠️ remplacez par votre adresse

/**
 * Vérifie les valeurs et envoie des alertes si nécessaire.
 */
function verifierSeuils() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  const values = sheet.getRange('B2:B' + sheet.getLastRow()).getValues().flat();
  values.forEach((val, index) => {
    if (val > THRESHOLD) {
      const rowNumber = index + 2;
      const message = 'La valeur en ligne ' + rowNumber + ' a dépassé le seuil: ' + val;
      MailApp.sendEmail(RECIPIENT, 'Alerte seuil dépassé', message);
    }
  });
}

/**
 * Déclencheur quotidien pour vérifier les seuils.
 */
function setupTrigger() {
  ScriptApp.newTrigger('verifierSeuils')
    .timeBased()
    .everyDays(1)
    .create();
}