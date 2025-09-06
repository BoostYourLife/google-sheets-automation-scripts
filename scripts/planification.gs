/**
 * Planification – Répartition de la charge de travail au sein de l’équipe.
 *
 * Ce script propose une planification simple en répartissant des tâches
 * listées dans une feuille sur les membres de l’équipe. Vous pouvez
 * personnaliser la logique de répartition (round‑robin, charge restante, etc.).
 */

const TASKS_SHEET_NAME = 'Tâches';
const MEMBERS = ['Alice', 'Bob', 'Charlie']; // ⚠️ listez vos collaborateurs

/**
 * Répartit les tâches équitablement entre les membres.
 */
function repartirTaches() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(TASKS_SHEET_NAME);
  const lastRow = sheet.getLastRow();
  const tasks = sheet.getRange(2, 1, lastRow - 1, 1).getValues().flat();
  const assignments = tasks.map((task, index) => [MEMBERS[index % MEMBERS.length]]);
  sheet.getRange(2, 2, assignments.length, 1).setValues(assignments); // colonne B pour l’assignation
}

/**
 * Déclencheur hebdomadaire pour repartir les tâches.
 */
function setupTrigger() {
  ScriptApp.newTrigger('repartirTaches')
    .timeBased()
    .everyWeeks(1)
    .create();
}