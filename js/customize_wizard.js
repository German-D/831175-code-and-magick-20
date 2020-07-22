'use strict';

(function () {
// Меняю цвет и значение мантии
  var setupWizardForm = document.querySelector('.setup-wizard-form');
  var inputCoat = setupWizardForm.querySelector('input[name=coat-color]');
  var setupWizzard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizzard.querySelector('.wizard-coat');

  var wizardCoatClickHandler = function (evt) {
    var newCoatColor = window.renderWizards.
      coatColors[window.util.getRandomNumber(0, window.renderWizards.coatColors.length - 1)];
    evt.currentTarget.style.fill = newCoatColor;
    inputCoat.value = newCoatColor;
  };

  wizardCoat.addEventListener('click', wizardCoatClickHandler);

  // Меняю цвет и значение глаз
  var inputEyes = setupWizardForm.querySelector('input[name=eyes-color]');
  var wizardEyes = setupWizzard.querySelector('.wizard-eyes');

  var wizardEyesClickHandler = function (evt) {
    var newEyesColor = window.renderWizards.
      eyesColors[window.util.getRandomNumber(0, window.renderWizards.eyesColors.length - 1)];
    evt.target.style.fill = newEyesColor;
    inputEyes.value = newEyesColor;
  };

  wizardEyes.addEventListener('click', wizardEyesClickHandler);

  // Меняю цвет и значение файрбола
  var setupFireballWrap = document.querySelector('.setup-fireball-wrap');

  var setupFireballWrapClickHandler = function (evt) {
    var newFireballColor = window.renderWizards.
      fireballColors[window.util.getRandomNumber(0, window.renderWizards.fireballColors.length - 1)];
    evt.currentTarget.style.background = newFireballColor;
    evt.currentTarget.querySelector('input').value = newFireballColor;
  };

  setupFireballWrap.addEventListener('click', setupFireballWrapClickHandler);

  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');

  var popupOpen = function () {
    window.renderWizards.userDialog.classList.remove('hidden');
    setupOpen.removeEventListener('click', setupOpenClickHandler);
    setupClose.addEventListener('click', setupCloseClickHandler);
    document.addEventListener('keydown', documentKeyHandler);
    wizardCoat.addEventListener('click', wizardCoatClickHandler);
    wizardEyes.addEventListener('click', wizardEyesClickHandler);
    setupFireballWrap.addEventListener('click', setupFireballWrapClickHandler);
  };

  var popupClose = function () {
    window.renderWizards.userDialog.style.top = window.renderWizards.userDialogTop;
    window.renderWizards.userDialog.style.left = window.renderWizards.userDialogLeft;

    window.renderWizards.userDialog.classList.add('hidden');
    setupOpen.addEventListener('click', setupOpenClickHandler);
    setupClose.removeEventListener('click', setupCloseClickHandler);
    document.removeEventListener('keydown', documentKeyHandler);
    wizardCoat.removeEventListener('click', wizardCoatClickHandler);
    wizardEyes.removeEventListener('click', wizardEyesClickHandler);
    setupFireballWrap.removeEventListener('click', setupFireballWrapClickHandler);
  };

  // При клике по кнопке открывает окно настроек
  var setupOpenClickHandler = function () {
    popupOpen();
  };
  setupOpen.addEventListener('click', setupOpenClickHandler);

  // Esc в любом месте закрывает окно настроек волшебника
  var documentKeyHandler = function (evt) {
    if (evt.key === 'Escape' && evt.target !== setupUserName) {
      popupClose();
    }
  };
  var setupUserName = document.querySelector('.setup-user-name');

  document.addEventListener('keydown', documentKeyHandler);

  // При клике по крестику закрывает окно настроек
  var setupCloseClickHandler = function () {
    popupClose();
  };
  setupClose.addEventListener('click', setupCloseClickHandler);

  // По Enter на кнопке открываю окно настроек
  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      popupOpen();
    }
  });

  // По Enter закрываю окно волшебника на крестик
  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      popupClose();
    }
  });
})();
