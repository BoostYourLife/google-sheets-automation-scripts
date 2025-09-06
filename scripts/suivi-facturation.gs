/**
 * Suivi facturation – Relances et suivi des paiements clients.
 *
 * Ce script parcourt une feuille de factures et envoie des emails de relance
 * aux clients dont la date d’échéance est dépassée. Ajustez le modèle
 * d’email, la colonne contenant l’adresse client et la logique de relance.
 */

const INVOICE_SHEET_NAME = 'Factures';
const CLIENT_EMAIL_COL = 3; // colonne C
const DUE_DATE_COL = 4; // colonne D
const STATUS_COL = 5; // colonne E (statut payé/impayé)

/**
 * Envoie des relances pour les factures en retard.
 */
function relancerFactures() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(INVOICE_SHEET_NAME);
  const lastRow = sheet.getLastRow();
  const today = new Date();
  const data = sheet.getRange(2, 1, lastRow - 1, 5).getValues();
  data.forEach((row, index) => {
    const clientEmail = row[CLIENT_EMAIL_COL - 1];
    const dueDate = row[DUE_DATE_COL - 1];
    const status = row[STATUS_COL - 1];
    if (status.toString().toLowerCase() !== 'payé' && dueDate && dueDate < today) {
      const message = 'Bonjour,\n\nVotre facture est en retard. Merci de procéder au paiement dès que possible.\n\nCordialement';
      MailApp.sendEmail(clientEmail, 'Relance de facture en retard', message);
    }
  });
}

/**
 * Déclencheur hebdomadaire pour relancer les factures.
 */
function setupTrigger() {
  ScriptApp.newTrigger('relancerFactures')
    .timeBased()
    .everyWeeks(1)
    .create();
}