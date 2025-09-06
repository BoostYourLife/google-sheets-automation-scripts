/**
 * Rapports PDF – Génération mensuelle de rapports au format PDF.
 *
 * Ce script exporte la feuille active en PDF et l’envoie par email. Vous
 * pouvez personnaliser la feuille à exporter, le format et la liste des
 * destinataires.
 */

const REPORT_SHEET_NAME = 'Rapport';
const PDF_RECIPIENTS = ['example@example.com']; // ⚠️ remplacez par vos destinataires

/**
 * Exporte la feuille spécifiée en PDF et envoie le document par email.
 */
function genererRapportPdf() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(REPORT_SHEET_NAME);
  const spreadsheetId = ss.getId();
  const url = 'https://docs.google.com/spreadsheets/d/' + spreadsheetId + '/export?format=pdf&portrait=true&sheetId=' + sheet.getSheetId();
  const token = ScriptApp.getOAuthToken();
  const response = UrlFetchApp.fetch(url, {
    headers: { Authorization: 'Bearer ' + token },
    muteHttpExceptions: true,
  });
  const pdfBlob = response.getBlob().setName('rapport-' + Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd') + '.pdf');
  PDF_RECIPIENTS.forEach(email => {
    MailApp.sendEmail(email, 'Rapport mensuel', 'Veuillez trouver ci-joint le rapport.', { attachments: [pdfBlob] });
  });
}

/**
 * Déclencheur mensuel pour générer le rapport.
 */
function setupTrigger() {
  ScriptApp.newTrigger('genererRapportPdf')
    .timeBased()
    .onMonthDay(1)
    .atHour(9)
    .create();
}