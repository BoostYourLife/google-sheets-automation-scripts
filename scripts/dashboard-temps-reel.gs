/**
 * Dashboard temps réel – Import automatique depuis une API externe.
 *
 * Ce script illustre comment récupérer des données via API et les injecter
 * automatiquement dans un Google Sheet. Personnalisez les variables API_URL et
 * API_KEY selon vos besoins.
 */

const API_URL = 'https://api.example.com/data'; // ⚠️ remplacez par l’URL de votre API
const API_KEY = 'your_api_key'; // ⚠️ remplacez par votre clé API

/**
 * Fonction principale appelée par le déclencheur.
 */
function dashboardTempsReel() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Dashboard');
  const response = UrlFetchApp.fetch(API_URL, {
    headers: { 'Authorization': 'Bearer ' + API_KEY },
    muteHttpExceptions: true,
  });
  const data = JSON.parse(response.getContentText());
  // TODO : adaptez ce bloc pour formater les données reçues
  const values = data.items.map(item => [item.id, item.value, item.timestamp]);
  sheet.getRange(2, 1, values.length, values[0].length).setValues(values);
}

/**
 * Crée un déclencheur pour mettre à jour le tableau de bord toutes les heures.
 */
function setupTrigger() {
  ScriptApp.newTrigger('dashboardTempsReel')
    .timeBased()
    .everyHours(1)
    .create();
}