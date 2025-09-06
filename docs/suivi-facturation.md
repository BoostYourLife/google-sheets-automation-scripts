# Suivi Facturation

Le script **suivi-facturation.gs** permet de suivre le règlement des factures et de relancer automatiquement les clients en retard. Il est particulièrement utile pour les petites structures qui gèrent leurs factures dans Google Sheets.

## Mise en œuvre

1. Créez une feuille nommée « Factures » et organisez vos colonnes comme suit :
   - **A :** Numéro de facture
   - **B :** Montant
   - **C :** Email du client
   - **D :** Date d’échéance (format Date)
   - **E :** Statut ("Payé" ou "Impayé")
2. Copiez [suivi-facturation.gs](../scripts/suivi-facturation.gs){:target="_blank"} dans votre projet Apps Script.
3. Modifiez éventuellement les index de colonnes (`CLIENT_EMAIL_COL`, `DUE_DATE_COL`, `STATUS_COL`) si votre structure diffère.
4. Exécutez `setupTrigger()` pour planifier des relances hebdomadaires.

## À savoir

- Le message de relance est basique ; personnalisez-le selon votre ton et vos relances habituelles.
- Pour éviter des relances inutiles, assurez‑vous de mettre le statut à jour en « Payé » dès qu’un client honore sa facture.