# Calcul ROI

Le script **calcul-roi.gs** automatise le calcul du retour sur investissement (ROI) dans une feuille Google Sheets. Il insère une formule simple dans la colonne C pour chaque ligne afin de calculer `(Revenus – Coûts) / Coûts`.

## Étapes d’utilisation

1. Créez une feuille intitulée « ROI » avec les colonnes suivantes :
   - **A :** Coût
   - **B :** Revenus
   - **C :** ROI (sera rempli automatiquement)
2. Copiez le contenu de [calcul-roi.gs](../scripts/calcul-roi.gs) dans votre projet Apps Script.
3. Exécutez la fonction `setupTrigger()` pour programmer un calcul quotidien.

## Personnalisation

- Modifiez la formule dans `calculRoi()` si vous avez besoin d’un calcul plus complexe (par exemple, intégrant des taxes ou des remises).
- Changez la fréquence du déclencheur dans `setupTrigger()`.

## Conseils

Pour éviter des divisions par zéro, le script ne remplit pas la cellule si le coût est nul. Assurez‑vous que vos données sources sont correctes.