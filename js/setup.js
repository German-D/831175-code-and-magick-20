'use strict';

var setupWindow = document.querySelector('.setup');
setupWindow.classList.remove('hidden');

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var getRandomPosition = function (min, max) {
  var randomNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNumber);
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
  wizards.push({
    name: names[getRandomPosition(0, names.length - 1)] + ' ' + secondNames[getRandomPosition(0, secondNames.length - 1)],
    coatColor: coatColors[getRandomPosition(0, coatColors.length - 1)],
    eyesColor: eyesColors[getRandomPosition(0, eyesColors.length - 1)],
  });
}

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var k = 0; k < wizards.length; k++) {
  fragment.appendChild(renderWizard(wizards[k]));
}

similarListElement.appendChild(fragment);


