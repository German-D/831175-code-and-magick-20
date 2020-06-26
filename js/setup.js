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

var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848',
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

var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupWizzard = document.querySelector('.setup-wizard');

var popupOpen = function () {
  setupOpen.removeEventListener('click', setupOpenClickHandler);
  setupClose.addEventListener('click', setupCloseClickHandler);
  document.addEventListener('keydown', documentKeyHandler);
  wizardCoat.addEventListener('click', wizardCoatClickHandler);
  wizardEyes.addEventListener('click', wizardEyesClickHandler);
  setupFireballWrap.addEventListener('click', setupFireballWrapClickHandler);
};

var popupClose = function () {
  setupOpen.addEventListener('click', setupOpenClickHandler);
  setupClose.removeEventListener('click', setupCloseClickHandler);
  document.removeEventListener('keydown', documentKeyHandler);
  wizardCoat.removeEventListener('click', wizardCoatClickHandler);
  wizardEyes.removeEventListener('click', wizardEyesClickHandler);
  setupFireballWrap.removeEventListener('click', setupFireballWrapClickHandler);
};


var setupWizardForm = document.querySelector('.setup-wizard-form');

// При клике по кнопке открывает окно настроек
var setupOpenClickHandler = function () {
  setupWindow.classList.remove('hidden');
  popupOpen();
};
setupOpen.addEventListener('click', setupOpenClickHandler);

// Esc в любом месте закрывает окно настроек волшебника
var documentKeyHandler = function (evt) {
  if (evt.key === 'Escape' && evt.target !== setupUserName) {
    setupWindow.classList.add('hidden');
    popupClose();
  }
};
var setupUserName = document.querySelector('.setup-user-name');

document.addEventListener('keydown', documentKeyHandler);

// При клике по крестику закрывает окно настроек
var setupCloseClickHandler = function () {
  setupWindow.classList.add('hidden');
  popupClose();
};
setupClose.addEventListener('click', setupCloseClickHandler);

// По Enter на кнопке открываю окно настроек
setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    setupWindow.classList.remove('hidden');
  }
});

// По Enter закрываю окно волшебника на крестик
setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    setupWindow.classList.add('hidden');
  }
  popupClose();
});

// Меняю цвет и значение мантии
var inputCoat = setupWizardForm.querySelector('input[name=coat-color]');
var wizardCoat = setupWizzard.querySelector('.wizard-coat');

var wizardCoatClickHandler = function (evt) {
  var newCoatColor = coatColors[getRandomNumber(0, coatColors.length - 1)];
  evt.currentTarget.style.fill = newCoatColor;
  inputCoat.value = newCoatColor;
};

wizardCoat.addEventListener('click', wizardCoatClickHandler);

// Меняю цвет и значение глаз
var inputEyes = setupWizardForm.querySelector('input[name=eyes-color]');
var wizardEyes = setupWizzard.querySelector('.wizard-eyes');

var wizardEyesClickHandler = function (evt) {
  var newEyesColor = eyesColors[getRandomNumber(0, eyesColors.length - 1)];
  evt.target.style.fill = newEyesColor;
  inputEyes.value = newEyesColor;
};

wizardEyes.addEventListener('click', wizardEyesClickHandler);

// Меняю цвет и значение файрбола
var setupFireballWrap = document.querySelector('.setup-fireball-wrap');

var setupFireballWrapClickHandler = function (evt) {
  var newFireballColor = fireballColors[getRandomNumber(0, fireballColors.length - 1)];
  evt.currentTarget.style.background = newFireballColor;
  evt.currentTarget.querySelector('input').value = newFireballColor;
};

setupFireballWrap.addEventListener('click', setupFireballWrapClickHandler);
