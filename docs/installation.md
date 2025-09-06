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

# Guide d'installation complète

Ce guide explique comment mettre en place l’ensemble des scripts présents dans ce dépôt et automatiser vos Google Sheets efficacement.

## Préparer votre environnement

1. **Fork et clonage :** commencez par forker ce dépôt sur votre compte GitHub, puis clonez votre fork en local avec `git clone`.
2. **Google Compte :** assurez‑vous de disposer d’un compte Google Workspace ou Gmail standard.
3. **Accès Apps Script :** connectez‑vous à [Google Apps Script](https://script.google.com/){:target="_blank"} et familiarisez‑vous avec l’interface.

## Importer un script

1. Ouvrez votre Google Sheet cible.
2. Dans le menu « Extensions », sélectionnez « Apps Script ».
3. Collez le contenu du fichier .gs correspondant dans l’éditeur.
4. Cliquez sur la disquette pour enregistrer.

## Autorisations

Lors de la première exécution, Google vous demandera d’autoriser le script à accéder à vos données (Drive, Gmail, etc.). Lisez attentivement les autorisations et acceptez‑les pour permettre au script de fonctionner.