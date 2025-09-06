/**
 * Gestion stock – Alertes de rupture et préparation de commandes.
 *
 * Ce script surveille les niveaux de stock et envoie des alertes lorsque le
 * stock est inférieur au seuil minimal. Il peut également générer un bon de
 * commande ou déclencher une autre action lorsqu’un produit doit être
 * réapprovisionné.
 */

const STOCK_SHEET_NAME = 'Stock';
const PRODUCT_NAME_COL = 1; // colonne A
const QUANTITY_COL = 2; // colonne B
const MIN_THRESHOLD_COL = 3; // colonne C
const STOCK_MANAGER_EMAIL = 'example@example.com'; // ⚠️ adresse à personnaliser

/**
 * Vérifie le stock et envoie des alertes ou commandes.
 */
function verifierStock() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(STOCK_SHEET_NAME);
  const data = sheet.getRange(2, 1, sheet.getLastRow() - 1, 3).getValues();
  data.forEach(row => {
    const name = row[PRODUCT_NAME_COL - 1];
    const qty = row[QUANTITY_COL - 1];
    const min = row[MIN_THRESHOLD_COL - 1];
    if (qty < min) {
      const message = 'Le stock de ' + name + ' est bas (' + qty + '). Veuillez réapprovisionner.';
      MailApp.sendEmail(STOCK_MANAGER_EMAIL, 'Alerte stock bas : ' + name, message);
    }
  });
}

/**
 * Déclencheur quotidien pour surveiller le stock.
 */
function setupTrigger() {
  ScriptApp.newTrigger('verifierStock')
    .timeBased()
    .everyDays(1)
    .create();
}