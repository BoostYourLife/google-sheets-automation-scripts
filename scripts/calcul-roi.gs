/**
 * Calcul ROI – Formules dynamiques pour estimer votre retour sur investissement.
 *
 * Ce script parcourt une feuille de calcul et calcule le ratio ROI pour chaque
 * ligne en fonction des coûts et des revenus saisis. Ajoutez ou modifiez les
 * formules selon votre modèle financier.
 */

/**
 * Calcule le ROI pour chaque ligne de la feuille 'ROI'. Le ROI est défini
 * comme (Revenus - Coût) / Coût.
 */
function calculRoi() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('ROI');
  const lastRow = sheet.getLastRow();
  const data = sheet.getRange(2, 1, lastRow - 1, 2).getValues(); // colonnes A: coût, B: revenus
  const results = data.map(row => {
    const cost = row[0];
    const revenue = row[1];
    const roi = cost ? (revenue - cost) / cost : '';
    return [roi];
  });
  sheet.getRange(2, 3, results.length, 1).setValues(results); // colonne C pour le ROI
}

/**
 * Crée un déclencheur pour recalculer le ROI quotidiennement.
 */
function setupTrigger() {
  ScriptApp.newTrigger('calculRoi')
    .timeBased()
    .everyDays(1)
    .create();
}