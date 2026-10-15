import kasaAccueilDesktop from "../assets/images/kasa/kasa-accueil-desktop.webp";
import kasaLogementDesktop from "../assets/images/kasa/kasa-logement-desktop.webp";
import kasaAccueilMobile from "../assets/images/kasa/kasa-accueil-mobile.webp";

import mvgAccueil from "../assets/images/mvg/mvg-accueil.webp";
import mvgPageLivre from "../assets/images/mvg/mvg-page-livre.webp";
import mvgPostmanConnexion from "../assets/images/mvg/mvg-postman-connexion.webp";
import mvgPostmanCreationLivre from "../assets/images/mvg/mvg-postman-creation-livre.webp";

import sophieBluelGalerieFiltree from "../assets/images/sophie-bluel/sophie-bluel-galerie-filtree.webp";
import sophieBluelModaleGalerie from "../assets/images/sophie-bluel/sophie-bluel-modale-galerie.webp";
import sophieBluelModaleAjoutRemplie from "../assets/images/sophie-bluel/sophie-bluel-modale-ajout-remplie.webp";

import ninaCarducciLighthouseApres from "../assets/images/nina-carducci/nina-carducci-lighthouse-apres.webp";
import ninaCarducciLighthouseAvant from "../assets/images/nina-carducci/nina-carducci-lighthouse-avant.webp";
import ninaCarducciCover from "../assets/images/nina-carducci/nina-carducci-cover.webp";

import menuMakerKanban from "../assets/images/menu-maker/menu-maker-kanban.webp";
import menuMakerSpecifications from "../assets/images/menu-maker/menu-maker-specifications.webp";

const projects = [
  {
    id: "kasa",
    title: "Kasa",
    category: "front",
    cover: kasaAccueilDesktop,
    images: [kasaLogementDesktop, kasaAccueilMobile],
    context:
      "Kasa, plateforme de location de logements entre particuliers, voulait refaire son site en React pour le rendre plus moderne et plus facile à faire évoluer.",
    tasks:
      "J'ai développé l'application avec React et React Router : routing des pages, composants réutilisables (Header, Footer, Card, Accordion, page Logement), affichage des logements à partir d'un fichier JSON avec .map(), mise en page en CSS Grid et styles en Sass.",
    technologies: [
      "React",
      "React Router",
      "Vite",
      "Sass",
      "CSS Grid",
      "Git / GitHub",
    ],
    challenge:
      "Sur certains écrans, la grille de logements débordait de la page. J'ai découvert que les éléments d'une grille CSS refusent par défaut de devenir plus petits que leur contenu (min-width: auto). En leur imposant min-width: 0, avec des colonnes en 1fr et un aspect-ratio sur les cartes, la grille s'adapte désormais à toutes les tailles d'écran.",
    learned:
      "Découper une interface en composants React, gérer un état avec useState (Accordion), configurer un routing, et travailler avec des branches Git (master / dev).",
    githubUrl: "https://github.com/Alzorath57/kasa-location-immobiliere",
    demoUrl: null,
  },
  {
    id: "mon-vieux-grimoire",
    title: "Mon Vieux Grimoire",
    category: "back",
    cover: mvgAccueil,
    images: [mvgPageLivre, mvgPostmanConnexion, mvgPostmanCreationLivre],
    context:
      "La chaîne de librairies « Au Vieux Grimoire » voulait un site où les lecteurs ajoutent des livres et les notent. Ma mission : développer toute l'API back-end, le front-end React étant fourni.",
    tasks:
      "J'ai conçu une API REST complète : inscription et connexion, CRUD des livres, notation de 0 à 5 avec recalcul de la note moyenne, top 3 des meilleurs livres, upload et optimisation des images (contrainte Green Code).",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB Atlas",
      "Mongoose",
      "JWT",
      "bcrypt",
      "multer",
      "API REST",
      "Git / GitHub",
    ],
    challenge:
      "Sécuriser les données : mots de passe hachés, routes protégées par JWT, et vérification que seul le créateur d'un livre peut le modifier ou le supprimer (sinon erreur 403). Autre problème résolu : la connexion à MongoDB Atlas bloquée par un souci DNS, réglé avec le format de connexion replica set.",
    learned:
      "Construire une API REST de A à Z, modéliser des données avec Mongoose, sécuriser une application (authentification, autorisations) et gérer l'upload de fichiers.",
    githubUrl: "https://github.com/Alzorath57/mon-vieux-grimoire-back",
    demoUrl: null,
  },
  {
    id: "sophie-bluel",
    title: "Sophie Bluel",
    category: "front",
    cover: sophieBluelGalerieFiltree,
    images: [sophieBluelModaleGalerie, sophieBluelModaleAjoutRemplie],
    context:
      "Sophie Bluel, architecte d'intérieur, avait besoin d'un portfolio dynamique, avec un espace pour gérer elle-même ses projets.",
    tasks:
      "J'ai rendu la page dynamique en JavaScript sans framework : galerie chargée depuis l'API, filtres par catégorie, connexion sécurisée (JWT stocké en localStorage) et modale d'administration pour ajouter et supprimer des photos.",
    technologies: [
      "JavaScript",
      "API REST",
      "fetch",
      "JWT",
      "localStorage",
      "Modules ES6",
    ],
    challenge:
      "Le code devenait long et difficile à maintenir. Je l'ai réorganisé en 9 modules ES6, chacun avec un rôle précis.",
    learned:
      "Manipuler le DOM, communiquer avec une API (fetch, async/await), gérer une authentification côté front et structurer un projet JavaScript en modules.",
    githubUrl:
      "https://github.com/Alzorath57/Portfolio-architecte-sophie-bluel",
    demoUrl: null,
  },
  {
    id: "nina-carducci",
    title: "Nina Carducci",
    category: "front",
    cover: ninaCarducciCover,
    images: [ninaCarducciLighthouseAvant, ninaCarducciLighthouseApres],
    context:
      "La photographe Nina Carducci avait un site lent et mal référencé. Ma mission : l'optimiser (performance, SEO, accessibilité) et livrer un rapport d'intervention.",
    tasks:
      "J'ai converti les images en WebP, corrigé la structure HTML sémantique et la hiérarchie des titres, ajouté les données structurées Schema.org (LocalBusiness) et les balises Open Graph / Twitter Cards, et corrigé 2 bugs JavaScript de la galerie.",
    technologies: [
      "SEO",
      "Accessibilité",
      "Performance",
      "Lighthouse",
      "WAVE",
      "Schema.org",
      "Open Graph",
      "HTML sémantique",
    ],
    challenge:
      "Trouver l'origine de 2 bugs dans un script de galerie que je n'avais pas écrit (couleur du filtre actif et décalage d'index dans la navigation de la modale).",
    learned:
      "Résultats Lighthouse : Performance 74 → 94, Accessibilité 68 → 100, SEO 73 → 100 (Bonnes pratiques déjà à 100, maintenu). Erreurs WAVE ramenées à zéro.",
    githubUrl: "https://github.com/Alzorath57/Nina-Carducci-Dev",
    demoUrl: null,
  },
  {
    id: "menu-maker",
    title: "Menu Maker",
    category: "gestion",
    cover: menuMakerKanban,
    images: [menuMakerSpecifications],
    context:
      "Pour l'agence Webgencia, planifier le développement de « Menu Maker », un site qui permet aux restaurateurs de créer et mettre en page leurs menus facilement (client : Qwenta).",
    tasks:
      "J'ai rédigé les spécifications techniques, découpé les user stories en 29 tâches dans un Kanban Notion, organisé 5 sprints de 2 semaines, mis en place une veille technologique sur Feedly et présenté le tout au Product Owner.",
    technologies: [
      "Méthode agile (Scrum)",
      "Kanban Notion",
      "User stories",
      "Story points",
      "Feedly",
    ],
    challenge:
      "Estimer chaque tâche en story points (suite de Fibonacci) sans avoir encore écrit de code, puis en déduire un planning réaliste. J'ai fixé une vélocité de 20 points par sprint : 93 points ÷ 20 ≈ 5 sprints de 2 semaines.",
    learned:
      "Planifier un projet avant de coder, estimer une charge de travail, choisir une stack technique et la justifier devant un client.",
    githubUrl: "https://github.com/Alzorath57/menu-maker-planification-agile",
    demoUrl: null,
  },
];

export default projects;
