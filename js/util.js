'use strict';
(function () {
  var setupWindow = document.querySelector('.setup');
  var setupWindowTop = setupWindow.style.top;
  var setupWindowLeft = setupWindow.style.left;
  setupWindow.classList.remove('hidden');

  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');
  userDialog.querySelector('.setup-similar').classList.remove('hidden');

  window.util = {
    getRandomNumber: function (min, max) {
      var randomNumber = min + Math.random() * (max + 1 - min);
      return Math.floor(randomNumber);
    },
    getRandomPosition: function (aray) {
      return window.util.getRandomNumber(0, aray.length - 1);
    },
    userDialog: userDialog,
    setupWindow: setupWindow,
    setupWindowTop: setupWindowTop,
    setupWindowLeft: setupWindowLeft,
  };
})();
