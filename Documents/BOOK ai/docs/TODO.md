# Todo - Gestionnaire de Bibliothèque Next.js

## 1. Configuration initiale du projet
- [ ] Créer un nouveau projet Next.js avec TypeScript
- [ ] Installer Tailwind CSS
- [ ] Configurer shadcn/ui
- [ ] Installer Lucide React pour les icônes
- [ ] Configurer Google Fonts (Inter ou Poppins)
- [ ] Installer Radix UI primitives (Dialog, Select, Tabs, Checkbox, etc.)

## 2. Structure du projet
- [ ] Créer la structure de dossiers (components, lib, hooks, types)
- [ ] Configurer les types TypeScript pour les livres, listes, todos
- [ ] Mettre en place un système de gestion d'état (Context API ou Zustand)
- [ ] Configurer localStorage/sessionStorage pour la persistance

## 3. Composants UI de base (shadcn/ui)
- [ ] Button
- [ ] Input
- [ ] Select
- [ ] Tabs
- [ ] Dialog/Modal
- [ ] Card
- [ ] Badge
- [ ] Calendar (pour les deadlines)
- [ ] Checkbox
- [ ] Form

## 4. Pages et routing
- [ ] Page d'accueil avec tabs (Mes Livres, Roulette, Listes, Recommandations, Todo)
- [ ] Système de navigation avec Next.js App Router
- [ ] Layout principal avec header

## 5. Fonctionnalité : Gestion des livres
- [ ] Formulaire d'ajout de livre (Dialog)
- [ ] Affichage en grille des livres (Card components)
- [ ] Système de statut (Je veux lire, En cours, Terminé)
- [ ] Filtres par statut et liste (Select)
- [ ] Modification du statut d'un livre
- [ ] Suppression de livre avec confirmation (AlertDialog)
- [ ] Ajout de deadline avec calendrier (Calendar component)
- [ ] Badge visuel pour les deadlines

## 6. Fonctionnalité : Roulette aléatoire
- [ ] Composant roulette avec animation CSS
- [ ] Logique de sélection aléatoire parmi les livres "à lire"
- [ ] Animation de rotation (Framer Motion ou CSS)
- [ ] Affichage du résultat

## 7. Fonctionnalité : Listes personnalisées
- [ ] Formulaire de création de liste
- [ ] Affichage des listes avec nombre de livres
- [ ] Suppression de liste avec confirmation
- [ ] Association livre-liste dans le formulaire d'ajout

## 8. Fonctionnalité : Recommandations
- [ ] Données de recommandations par genre (fichier JSON ou constantes)
- [ ] Affichage groupé par genre (Grid layout)
- [ ] Option d'ajout rapide d'une recommandation à la bibliothèque

## 9. Fonctionnalité : Todo list
- [ ] Formulaire d'ajout de tâche
- [ ] Liste des tâches avec checkbox
- [ ] Toggle état complété/non complété
- [ ] Suppression de tâche
- [ ] Style différent pour tâches complétées

## 10. Style et animations
- [ ] Design responsive (mobile, tablet, desktop)
- [ ] Thème de couleurs cohérent avec Tailwind
- [ ] Animations de transition (hover, focus)
- [ ] Animation de la roulette
- [ ] States visuels (loading, empty state)

## 11. Optimisations et finitions
- [ ] Gestion des erreurs
- [ ] Loading states
- [ ] Empty states avec illustrations
- [ ] Validation des formulaires (React Hook Form + Zod)
- [ ] Accessibilité (ARIA labels, keyboard navigation)
- [ ] SEO (metadata Next.js)
- [ ] Tests unitaires (optionnel)

## 12. Déploiement
- [ ] Build production
- [ ] Déploiement sur Vercel
- [ ] Tests en production