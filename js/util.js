'use strict';
(function () {

  window.util = {
    getRandomNumber: function (min, max) {
      var randomNumber = min + Math.random() * (max + 1 - min);
      return Math.floor(randomNumber);
    },
    getRandomPosition: function (aray) {
      return window.util.getRandomNumber(0, aray.length - 1);
    },
  };
})();
