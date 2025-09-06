# Alertes Seuils

Le script **alertes-seuils.gs** envoie des notifications par email lorsque des valeurs dépassent un seuil défini dans votre feuille Google Sheets. Il est utile pour suivre des indicateurs clés (KPI) et réagir rapidement aux anomalies.

## Mise en place

1. Créez ou ouvrez la feuille que vous souhaitez surveiller et nommez‑la selon la valeur de `SHEET_NAME` dans le script (par défaut : « Suivi »).
2. Placez les valeurs à surveiller dans la colonne B, à partir de la ligne 2.
3. Dans l’éditeur Apps Script, copiez [alertes-seuils.gs](../scripts/alertes-seuils.gs).
4. Personnalisez les constantes :`SHEET_NAME`, `THRESHOLD` et `RECIPIENT`.
5. Exécutez `setupTrigger()` pour lancer une vérification quotidienne.

## Personnalisation

- Ajustez le seuil (`THRESHOLD`) selon vos besoins.
- Envoyez plusieurs emails en transformant `RECIPIENT` en tableau et en bouclant dessus.
- Modifiez le texte de l’alerte dans `verifierSeuils()` pour fournir plus de contexte.
