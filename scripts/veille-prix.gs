/**
 * Veille prix – Monitoring des prix concurrents.
 *
 * Ce script interroge régulièrement un site ou une API pour obtenir les prix
 * de produits concurrents et les compare aux vôtres. En cas d’écart
 * significatif, vous pouvez recevoir une notification ou mettre à jour une
 * feuille Google Sheets avec les nouvelles données.
 */

const PRODUCT_LIST = ['ProductA', 'ProductB'];
const API_ENDPOINT = 'https://api.example.com/prices'; // ⚠️ définissez votre API
const RECIPIENTS = ['example@example.com'];

/**
 * Récupère les prix concurrents et envoie un rapport si nécessaire.
 */
function surveillerPrix() {
  const response = UrlFetchApp.fetch(API_ENDPOINT);
  const data = JSON.parse(response.getContentText());
  let alertLines = [];
  PRODUCT_LIST.forEach(product => {
    const competitorPrice = data[product];
    // TODO : définir votre propre logique de comparaison avec vos prix
    if (competitorPrice) {
      alertLines.push(product + ': ' + competitorPrice + '€');
    }
  });
  if (alertLines.length > 0) {
    const message = 'Veille prix concurrentielle :\n' + alertLines.join('\n');
    RECIPIENTS.forEach(email => {
      MailApp.sendEmail(email, 'Rapport de veille prix', message);
    });
  }
}

/**
 * Déclencheur quotidien pour surveiller les prix.
 */
function setupTrigger() {
  ScriptApp.newTrigger('surveillerPrix')
    .timeBased()
    .everyDays(1)
    .create();
}