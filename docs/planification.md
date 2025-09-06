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

# Planification

Le script **planification.gs** assigne équitablement les tâches de votre feuille à des membres d’équipe. C’est une solution simple pour organiser le travail sans recourir à un outil externe.

## Mise en route

1. Créez une feuille intitulée « Tâches » avec :
   - **Colonne A** : la description de chaque tâche
   - **Colonne B** : sera remplie par le script avec le nom du membre assigné
2. Dans `planification.gs`, définissez la constante `MEMBERS` avec la liste de vos collaborateurs.
3. Copiez le script dans Apps Script et exécutez `repartirTaches()` pour répartir les tâches.
4. Lancez `setupTrigger()` pour programmer une répartition hebdomadaire automatique.

## Ajustements

- Changez la logique d’assignation en modifiant l’utilisation de `index % MEMBERS.length` si vous souhaitez privilégier certaines personnes ou équilibrer les charges différemment.