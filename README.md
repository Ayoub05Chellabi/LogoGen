# Générateur de Logo Personnalisable par CHELLABI AYOUB

Un projet de générateur de logo interactif permettant aux utilisateurs de concevoir et de personnaliser leurs propres logos directement dans le navigateur. Ce générateur offre une grande variété d’options de personnalisation pour le texte, les couleurs, les effets et les images, incluant la possibilité d'ajouter des GIFs et d'exporter le logo final en image.

## Description d'Utilisation

Ce générateur de logo est idéal pour les utilisateurs souhaitant créer un logo personnalisé sans avoir besoin de logiciels spécialisés. L'interface simple et intuitive permet de créer des logos pour des projets, des réseaux sociaux ou des présentations, avec un niveau de contrôle avancé sur les styles et les effets visuels appliqués.

1. **Texte Principal et Sous-texte** : Entrez votre texte principal (le titre de votre logo) et un sous-texte optionnel pour compléter l’information du logo.
2. **Options de Style** : Modifiez les couleurs, la taille, l'espacement et ajoutez des ombres ou des dégradés pour donner un look unique à chaque texte.
3. **Arrière-plan et GIFs** : Personnalisez l'arrière-plan avec des couleurs ou des images prédéfinies et insérez des GIFs ou des images en tant qu'élément visuel central du logo.
4. **Effets de Bordure et Filtre** : Ajoutez des bordures autour du logo, ajustez l'opacité de l’image centrale, et appliquez des filtres visuels (sépia, noir et blanc, etc.) pour des effets stylisés.
5. **Téléchargement en PNG** : Une fois satisfait du logo, téléchargez-le en un clic au format PNG, prêt à être utilisé sur tous types de supports.

## Fonctionnalités

- **Personnalisation du Texte** :
  - Texte principal et sous-texte
  - Taille du texte, couleur, espacement des lettres
  - Rotation et inclinaison
  - Ombre et dégradé de couleur

- **Effets Visuels** :
  - Ombres portées ajustables
  - Dégradé de couleur pour le texte
  - Filtre de couleur pour l'arrière-plan (sépia, noir et blanc, flou, etc.)
  - Opacité de l'image ou du GIF

- **Personnalisation de la Bordure** :
  - Choix de style de bordure : pleine, pointillée, double, etc.
  - Couleur de la bordure du logo

- **GIFs et Images** :
  - Ajout d'une image ou d'un GIF dans le logo avec options de redimensionnement et d'opacité

- **Téléchargement du Logo** :
  - Exportation du logo final en format PNG à l'aide de `html2canvas`

## Technologies Utilisées

- **HTML5** : Structure de base de l’application et interface utilisateur.
- **CSS3** : Styles personnalisés pour l'apparence et la mise en page, avec des effets de transition pour une interface fluide.
- **JavaScript (Vanilla JS)** : Logique pour la personnalisation en temps réel, gestion des événements et interactions.
- **[html2canvas](https://html2canvas.hertzen.com/)** : Bibliothèque permettant de capturer la zone de logo en image et de la télécharger en PNG.
  
## Installation

1. **Clonez le projet** :
   ```bash
   git clone https://github.com/votre-utilisateur/generateur-de-logo.git
   cd generateur-de-logo
