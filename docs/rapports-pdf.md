<!--
Ajout d'un style pour remplacer le lien de titre automatique du thème par « ACCUEIL ».
Ce code CSS rend le texte du lien invisible et ajoute le mot « ACCUEIL » à sa place.
-->
<style>
.markdown-body > h1 > a {
  color: transparent;
  position: relative;
}
.markdown-body > h1 > a::after {
  content: "ACCUEIL";
  color: #0969da;
  position: absolute;
  left: 0;
}
</style>

# Rapports PDF

Le script **rapports-pdf.gs** automatise la génération de rapports PDF à partir d’un onglet précis de votre Google Sheets et les envoie par email chaque mois.

## Paramétrage

1. Renommez ou créez un onglet avec le nom indiqué dans `REPORT_SHEET_NAME` (par défaut : « Rapport »).
2. Modifiez la liste `PDF_RECIPIENTS` pour y placer les destinataires du rapport.
3. Copiez [rapports-pdf.gs](https://github.com/BoostYourLife/google-sheets-automation-scripts/blob/main/scripts/rapports-pdf.gs){:target="_blank"} dans votre projet Apps Script.
4. Exécutez `setupTrigger()` pour générer automatiquement le rapport le premier jour de chaque mois à 9 h.

## Personnalisation

- Pour changer la date ou l’heure d’envoi, modifiez `onMonthDay()` et `atHour()` dans `setupTrigger()`.
- Pour générer plusieurs rapports de différentes feuilles, adaptez la fonction `genererRapportPdf()` pour itérer sur plusieurs onglets.