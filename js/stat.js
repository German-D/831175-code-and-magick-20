'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 20;
var GISTOGRAM_GAP = 50;
var BAR_WEIGHT = 40;
var MAX_BAR_HEIGHT = 150;
var RESULT_Y = 80;
var TEXT_Y = 255;
var BAR_Y = 100;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getRandomNumber = function (min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, CLOUD_Y + 2 * FONT_GAP);


  for (var i = 0; i < players.length; i++) {
    var maxTime = getMaxElement(times);
    var barHeight = 150 * times[i] / maxTime;
    var barColor = getRandomNumber(1, 100) + '%';
    var barRemains = MAX_BAR_HEIGHT - barHeight;

    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GISTOGRAM_GAP + i * GISTOGRAM_GAP + i * BAR_WEIGHT, TEXT_Y);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GISTOGRAM_GAP + i * GISTOGRAM_GAP + i * BAR_WEIGHT, RESULT_Y + barRemains);
    ctx.fillStyle = (players[i] === 'Вы') ? '#F03' : 'hsl(228,' + barColor + ', 50%)';
    ctx.fillRect(CLOUD_X + GISTOGRAM_GAP + i * GISTOGRAM_GAP + i * BAR_WEIGHT, BAR_Y + barRemains, BAR_WEIGHT, barHeight);
  }
};
