# google-sheets-automation-scripts

> 10 scripts Google Apps Script professionnels pour automatiser vos tâches Google Sheets

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Apps Script](https://img.shields.io/badge/Apps%20Script-Ready-blue.svg)
![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)

## 📋 Table des matières

- [Présentation](#présentation)
- [Scripts disponibles](#scripts-disponibles)
- [Installation rapide](#installation-rapide)
- [Documentation détaillée](#documentation-détaillée)
- [Contribution](#contribution)
- [Support](#support)
- [Licence](#licence)

## 🚀 Présentation

Collection de 10 scripts Google Apps Script prêts à l'emploi pour automatiser vos tâches récurrentes dans Google Sheets :

- **Dashboard temps réel** avec imports API
- **Calculs ROI automatiques** avec formules dynamiques
- **Système d'alertes** par email
- **Backups automatisés** vers Google Drive
- **Rapports PDF** générés automatiquement
- **Suivi facturation** avec relances
- **Analytics consolidé** multi‑sources
- **Gestion stock** intelligente
- **Planification équipe** optimisée
- **Veille prix** concurrentielle

## 📊 Scripts disponibles

| Script | Fonctionnalité | Temps gagné | Difficulté |
|-------|---------------|-------------|------------|
| [Dashboard Temps Réel](./scripts/dashboard-temps-reel.gs) | Import API automatique | 2h/semaine | ⭐⭐ |
| [Calcul ROI](./scripts/calcul-roi.gs) | Formules dynamiques | 1h/semaine | ⭐ |
| [Alertes Seuils](./scripts/alertes-seuils.gs) | Notifications email | 30min/semaine | ⭐ |
| [Backup Automatique](./scripts/backup-automatique.gs) | Export programmé | 1h/semaine | ⭐⭐ |
| [Rapports PDF](./scripts/rapports-pdf.gs) | Génération mensuelle | 3h/mois | ⭐⭐⭐ |
| [Suivi Facturation](./scripts/suivi-facturation.gs) | Relances automatiques | 2h/semaine | ⭐⭐ |
| [Analytics Consolidé](./scripts/analytics-consolide.gs) | Multi‑sources | 4h/semaine | ⭐⭐⭐ |
| [Gestion Stock](./scripts/gestion-stock.gs) | Alertes + commandes | 3h/semaine | ⭐⭐ |
| [Planification](./scripts/planification.gs) | Répartition équipe | 2h/semaine | ⭐⭐⭐ |
| [Veille Prix](./scripts/veille-prix.gs) | Monitoring concurrent | 1h/semaine | ⭐⭐ |

## ⚡ Installation rapide

### Prérequis

- Compte Google (Workspace recommandé)
- Accès à Google Apps Script
- Google Sheets avec données à automatiser

### Installation en 5 minutes

1. **Clonez ce repository**

   ```bash
   git clone https://github.com/yourusername/google-sheets-automation-scripts.git
   ```

2. **Choisissez votre script**

   ```bash
   cd google-sheets-automation-scripts/scripts
   ls -la
   ```

3. **Copiez le code**
   
   - Ouvrez [script.google.com](https://script.google.com)
   - Nouveau projet → Collez le code
   - Personnalisez les variables (marquées ⚠️)

4. **Activez les déclencheurs**

   ```javascript
   // Exécutez la fonction setup une fois
   setupTrigger()
   ```

5. **Testez et surveillez**

   - Vérifiez les logs
   - Ajustez selon vos besoins

## 📚 Documentation détaillée

### Par script

- [📊 Dashboard Temps Réel](./docs/dashboard-temps-reel.md) – Import automatique depuis APIs
- [💰 Calcul ROI](./docs/calcul-roi.md) – Formules avec variables dynamiques
- [🚨 Alertes Seuils](./docs/alertes-seuils.md) – Notifications email automatiques
- [💾 Backup Automatique](./docs/backup-automatique.md) – Export données programmé
- [📈 Rapports PDF](./docs/rapports-pdf.md) – Génération PDF mensuelle
- [💳 Suivi Facturation](./docs/suivi-facturation.md) – Relances et encaissements
- [📊 Analytics Consolidé](./docs/analytics-consolide.md) – Multi‑sources en un tableau
- [📦 Gestion Stock](./docs/gestion-stock.md) – Alertes rupture + commandes
- [⏰ Planification](./docs/planification.md) – Répartition charge de travail
- [🔍 Veille Prix](./docs/veille-prix.md) – Monitoring concurrentiel

### Guides généraux

- [🛠️ Guide d'installation complète](./docs/installation.md)
- [🔧 Configuration avancée](./docs/configuration.md)
- [🐛 Dépannage et FAQ](./docs/troubleshooting.md)
- [🔒 Sécurité et bonnes pratiques](./docs/security.md)
- [📈 Optimisation performance](./docs/performance.md)

## 🤝 Contribution

Les contributions sont les bienvenues ! Consultez le [guide de contribution](./CONTRIBUTING.md).

### Comment contribuer

1. Forkez le projet
2. Créez une branche (`git checkout -b feature/amazing-feature`)
3. Commitez vos changements (`git commit -m 'Add amazing feature'`)
4. Pushez vers votre branche (`git push origin feature/amazing-feature`)
5. Ouvrez une Pull Request

### Standards de code

- **Commentaires** en français pour la documentation utilisateur
- **Variables** en anglais pour le code
- **Fonctions** documentées avec JSDoc
- **Tests** inclus pour les nouvelles fonctionnalités

## 📞 Support

- 📖 [Documentation complète](./docs/)
- 🐛 [Signaler un bug](https://github.com/yourusername/google-sheets-automation-scripts/issues)
- 💡 [Demander une fonctionnalité](https://github.com/yourusername/google-sheets-automation-scripts/issues)
- 💬 [Discussions communautaires](https://github.com/yourusername/google-sheets-automation-scripts/discussions)

## 📝 Licence

Ce projet est sous licence MIT – voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🎯 Roadmap

- [ ] Templates Google Sheets pré‑configurés
- [ ] Interface web de configuration
- [ ] Intégration Zapier/Make native
- [ ] Scripts pour Excel/Office 365
- [ ] Version SaaS avec interface graphique

## ⭐ Contributeurs

Merci à tous les contributeurs qui ont rendu ce projet possible !

## 📊 Statistiques

![GitHub stars](https://img.shields.io/github/stars/yourusername/google-sheets-automation-scripts?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/google-sheets-automation-scripts?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/google-sheets-automation-scripts)

---

**Créé par [@_BoostYourLife_](https://instagram.com/_boostyourlife_)**
*Automatisez votre business, libérez votre temps*