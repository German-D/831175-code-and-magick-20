'use strict';

var setupWindow = document.querySelector('.setup');
setupWindow.classList.remove('hidden');

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var getRandomNumber = function (min, max) {
  var randomNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNumber);
};

var getRandomPosition = function (aray) {
  return getRandomNumber(0, aray.length - 1);
};

var names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

var secondNames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг',
];

var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)',
];

var eyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green',
];

var wizards = [];

for (var i = 0; i < 4; i++) {
  var nameIndex = getRandomPosition(names);
  var secondNameIndex = getRandomPosition(secondNames);
  var eyesColorsIndex = getRandomPosition(eyesColors);
  var coatColorsIndex = getRandomPosition(coatColors);
  wizards.push({
    name: names[nameIndex] + ' ' + secondNames[secondNameIndex],
    coatColor: coatColors[coatColorsIndex],
    eyesColor: eyesColors[eyesColorsIndex]
  });
}

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var renderWizard = function (wizard, template) {
  var wizardElement = template.cloneNode(true);
  var setupSimilarLabel = wizardElement.querySelector('.setup-similar-label');
  var wizardCoat = wizardElement.querySelector('.wizard-coat');
  var wizardEyes = wizardElement.querySelector('.wizard-eyes');

  setupSimilarLabel.textContent = wizard.name;
  wizardCoat.style.fill = wizard.coatColor;
  wizardEyes.style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var k = 0; k < wizards.length; k++) {
  var newWizard = renderWizard(wizards[k], similarWizardTemplate);
  fragment.appendChild(newWizard);
}

similarListElement.appendChild(fragment);


