# Rapports PDF

Le script **rapports-pdf.gs** automatise la génération de rapports PDF à partir d’un onglet précis de votre Google Sheets et les envoie par email chaque mois.

## Paramétrage

1. Renommez ou créez un onglet avec le nom indiqué dans `REPORT_SHEET_NAME` (par défaut : « Rapport »).
2. Modifiez la liste `PDF_RECIPIENTS` pour y placer les destinataires du rapport.
3. Copiez [rapports-pdf.gs](../scripts/rapports-pdf.gs){:target="_blank"} dans votre projet Apps Script.
4. Exécutez `setupTrigger()` pour générer automatiquement le rapport le premier jour de chaque mois à 9 h.

## Personnalisation

- Pour changer la date ou l’heure d’envoi, modifiez `onMonthDay()` et `atHour()` dans `setupTrigger()`.
- Pour générer plusieurs rapports de différentes feuilles, adaptez la fonction `genererRapportPdf()` pour itérer sur plusieurs onglets.