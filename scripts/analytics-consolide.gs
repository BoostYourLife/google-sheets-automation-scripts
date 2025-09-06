/**
 * Analytics consolidé – Agrégation de données multi‑sources dans un seul tableau.
 *
 * Ce script récupère des données depuis plusieurs feuilles ou plusieurs
 * classeurs et les consolide dans une feuille dédiée. Adaptez les sources
 * (SHEET_IDS) et les plages à importer selon vos besoins.
 */

const SOURCE_SHEET_IDS = [
  'SPREADSHEET_ID_1', // ⚠️ remplacez par les IDs réels
  'SPREADSHEET_ID_2',
];
const TARGET_SHEET_NAME = 'Analytics';

/**
 * Agrège les données de plusieurs feuilles dans une feuille cible.
 */
function consoliderAnalytics() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let target = ss.getSheetByName(TARGET_SHEET_NAME);
  if (!target) target = ss.insertSheet(TARGET_SHEET_NAME);
  target.clearContents();
  let rowIndex = 1;
  SOURCE_SHEET_IDS.forEach(id => {
    const source = SpreadsheetApp.openById(id).getSheets()[0];
    const data = source.getDataRange().getValues();
    target.getRange(rowIndex, 1, data.length, data[0].length).setValues(data);
    rowIndex += data.length;
  });
}

/**
 * Déclencheur quotidien pour mettre à jour l’analytics.
 */
function setupTrigger() {
  ScriptApp.newTrigger('consoliderAnalytics')
    .timeBased()
    .everyDays(1)
    .create();
}