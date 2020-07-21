'use strict';

(function () {

  var similarListElement = window.util.userDialog.querySelector('.setup-similar-list');

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

  var fireballColors = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848',
  ];

  var wizards = [];

  for (var i = 0; i < 4; i++) {
    var nameIndex = window.util.getRandomPosition(names);
    var secondNameIndex = window.util.getRandomPosition(secondNames);
    var eyesColorsIndex = window.util.getRandomPosition(eyesColors);
    var coatColorsIndex = window.util.getRandomPosition(coatColors);
    wizards.push({
      name: names[nameIndex] + ' ' + secondNames[secondNameIndex],
      coatColor: coatColors[coatColorsIndex],
      eyesColor: eyesColors[eyesColorsIndex],
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

  window.renderWizards = {
    coatColors: coatColors,
    eyesColors: eyesColors,
    fireballColors: fireballColors,
  };

})();
