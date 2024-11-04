// Fonction pour mettre à jour le contenu du logo
function updateLogo() {
  const mainText = document.getElementById('mainText').value;
  const subText = document.getElementById('subText').value;
  const colorType = document.getElementById('colorType').value; // Type de couleur : simple ou dégradé pour le texte principal uniquement
  const simpleTextColor = document.getElementById('textColor').value;
  const subTextColor = document.getElementById('subTextColor').value;
  const boxColor = document.getElementById('boxColor').value;
  const backgroundUrl = document.getElementById('backgroundSelect').value;
  const mainTextSize = document.getElementById('mainTextSize').value;
  const subTextSize = document.getElementById('subTextSize').value;
  const imageUrl = document.getElementById('imageSelect').value;
  const imageSize = document.getElementById('imageSize').value;

  // Options supplémentaires de personnalisation
  const textShadowToggle = document.getElementById('textShadowToggle').checked;
  const textShadowColor = document.getElementById('textShadowColor').value;
  const letterSpacing = document.getElementById('letterSpacing').value + 'px';
  const rotation = document.getElementById('rotation').value;
  const borderStyle = document.getElementById('borderStyle').value;
  const borderColor = document.getElementById('borderColor').value;
  const backgroundFilter = document.getElementById('backgroundFilter').value;
  const imageOpacity = document.getElementById('imageOpacity').value;

  // Récupère les couleurs de dégradé uniquement si "gradient" est sélectionné
  let gradientColor1, gradientColor2;
  if (colorType === 'gradient') {
    gradientColor1 = document.getElementById('gradientColor1').value;
    gradientColor2 = document.getElementById('gradientColor2').value;
  }

  // Mettre à jour le texte principal avec le choix de couleur ou dégradé
  updateTextElement(
    'displayMainText',
    mainText,
    colorType,
    simpleTextColor,
    mainTextSize,
    boxColor,
    textShadowToggle,
    textShadowColor,
    letterSpacing,
    rotation,
    gradientColor1,
    gradientColor2
  );

  // Mettre à jour le sous-texte uniquement avec une couleur simple
  updateTextElement(
    'displaySubText',
    subText,
    'simple', // Toujours couleur simple pour le sous-texte
    subTextColor,
    subTextSize,
    null,
    textShadowToggle,
    textShadowColor,
    letterSpacing,
    rotation,
    null,
    null
  );

  // Mettre à jour l'arrière-plan et appliquer le filtre
  updateLogoBackground(backgroundUrl, backgroundFilter);

  // Mettre à jour l'image ou le GIF du logo avec opacité
  updateLogoImage(imageUrl, imageSize, imageOpacity);

  // Appliquer le style de bordure au logo
  const logoDisplay = document.getElementById('logoDisplay');
  logoDisplay.style.borderStyle = borderStyle;
  logoDisplay.style.borderColor = borderColor;
}

// Fonction pour mettre à jour un élément de texte (mainText ou subText) avec options avancées
function updateTextElement(elementId, text, colorType, color, fontSize, borderColor, shadowToggle, shadowColor, letterSpacing, rotation, gradientColor1, gradientColor2) {
  const element = document.getElementById(elementId);
  element.textContent = text;
  element.style.fontSize = `${fontSize}px`;
  element.style.letterSpacing = letterSpacing;
  element.style.transform = `rotate(${rotation}deg)`;

  // Appliquer la couleur ou le dégradé de couleur uniquement si `colorType` est "gradient" et pour le texte principal
  if (colorType === 'simple' || elementId === 'displaySubText') {
    element.style.color = color;
    element.style.backgroundImage = 'none';
  } else if (colorType === 'gradient' && elementId === 'displayMainText') {
    // Applique le dégradé uniquement au texte principal
    element.style.backgroundImage = `linear-gradient(45deg, ${gradientColor1}, ${gradientColor2})`;
    element.style.color = 'transparent';
    element.style.backgroundClip = 'text';
    element.style.webkitBackgroundClip = 'text';
  }

  // Appliquer l'ombre si activée
  element.style.textShadow = shadowToggle ? `2px 2px 5px ${shadowColor}` : 'none';

  if (borderColor) element.style.borderColor = borderColor;
}

// Fonction pour mettre à jour l'arrière-plan du logo avec un filtre
function updateLogoBackground(backgroundUrl, filter) {
  const logoDisplay = document.getElementById('logoDisplay');
  logoDisplay.style.backgroundImage = backgroundUrl ? `url(${backgroundUrl})` : 'none';
  logoDisplay.style.filter = filter; // Appliquer le filtre sélectionné
}

// Fonction pour mettre à jour le GIF ou l'image du logo avec opacité
function updateLogoImage(imageUrl, imageSize, opacity) {
  const logoImageContainer = document.getElementById('logoImageContainer');
  logoImageContainer.innerHTML = ""; // Efface le contenu précédent
  if (imageUrl) {
    const logoImage = document.createElement('img');
    logoImage.src = imageUrl;
    logoImage.style.width = `${imageSize}px`;
    logoImage.style.height = 'auto';
    logoImage.style.opacity = opacity; // Appliquer l'opacité

    // Gestion des erreurs de chargement
    logoImage.onerror = () => {
      console.error(`Le GIF n'a pas pu être chargé depuis ${imageUrl}.`);
      alert("Le GIF n'a pas pu être chargé. Essayez une autre source.");
    };

    logoImageContainer.appendChild(logoImage);
  }
}

// Fonction pour permettre le déplacement des éléments `draggable`
function enableDragging() {
  document.querySelectorAll('.draggable').forEach(element => {
    element.addEventListener('mousedown', (e) => mouseDownHandler(e, element));
  });
}

function mouseDownHandler(e, element) {
  e.preventDefault();

  // Initialiser les coordonnées de départ
  const startX = e.clientX;
  const startY = e.clientY;
  const offsetX = startX - element.getBoundingClientRect().left;
  const offsetY = startY - element.getBoundingClientRect().top;

  // Fonction de déplacement
  function mouseMoveHandler(e) {
    const logoDisplay = document.getElementById('logoDisplay');
    const displayRect = logoDisplay.getBoundingClientRect();

    // Calculer la nouvelle position en limitant les déplacements à l'intérieur de `logoDisplay`
    let newX = e.clientX - displayRect.left - offsetX;
    let newY = e.clientY - displayRect.top - offsetY;
    newX = Math.max(0, Math.min(newX, displayRect.width - element.offsetWidth));
    newY = Math.max(0, Math.min(newY, displayRect.height - element.offsetHeight));

    element.style.left = `${newX}px`;
    element.style.top = `${newY}px`;
  }

  // Fonction de libération de l'élément
  function mouseUpHandler() {
    // Retirer les événements `mousemove` et `mouseup` lorsque le curseur est relâché
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  }

  // Attacher les écouteurs d'événements pour le déplacement et la libération
  document.addEventListener('mousemove', mouseMoveHandler);
  document.addEventListener('mouseup', mouseUpHandler);
}

// Fonction pour télécharger le logo sous forme d'image
function downloadLogo() {
  const logoDisplay = document.getElementById("logoDisplay");

  // Utiliser html2canvas pour capturer l'élément logoDisplay
  html2canvas(logoDisplay, { useCORS: true }).then((canvas) => {
    // Convertir le canvas en URL de données (image PNG)
    const dataURL = canvas.toDataURL("image/png");

    // Créer un lien de téléchargement et déclencher le téléchargement
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "logo.png";
    link.click();
  });
}

// Initialiser le déplacement des éléments dès le chargement de la page
document.addEventListener("DOMContentLoaded", enableDragging);

// Fonction pour basculer entre les options de couleur simple et de dégradé
function toggleColorOptions() {
  const colorType = document.getElementById('colorType').value;
  const simpleColorContainer = document.getElementById('simpleColorContainer');
  const gradientColorContainer = document.getElementById('gradientColorContainer');

  if (colorType === 'simple') {
      simpleColorContainer.style.display = 'block';
      gradientColorContainer.style.display = 'none';
  } else {
      simpleColorContainer.style.display = 'none';
      gradientColorContainer.style.display = 'block';
  }
}
