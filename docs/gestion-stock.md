# Gestion Stock

Le script **gestion-stock.gs** surveille les niveaux de stock de vos produits et envoie des alertes lorsqu’un réapprovisionnement est nécessaire. Il peut servir de base pour automatiser un système de commande.

## Instructions

1. Créez une feuille nommée « Stock » avec les colonnes :
   - **A :** Nom du produit
   - **B :** Quantité actuelle
   - **C :** Seuil minimal
2. Copiez [gestion-stock.gs](../scripts/gestion-stock.gs){:target="_blank"} dans votre projet Apps Script.
3. Renseignez l’adresse email du responsable dans `STOCK_MANAGER_EMAIL`.
4. Exécutez `setupTrigger()` pour lancer une vérification quotidienne.

## Extensions possibles

- Générer automatiquement une commande auprès de votre fournisseur lorsque le seuil est franchi.
- Ajouter une colonne avec le fournisseur à contacter et personnaliser l’email en conséquence.