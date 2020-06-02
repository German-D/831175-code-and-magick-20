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

var renderCloud = function (ctx, x, y, color, width, height) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

var getRandomNumber = function (min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

window.renderStatistics = function (ctx, players, times) {

  var maxTime = times.reduce(function (acc, cur) {
    if (cur > acc) {
      return cur;
    } else {
      return acc;
    }
  });

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)', CLOUD_WIDTH, CLOUD_HEIGHT);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff', CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = '#000';

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, CLOUD_Y + 2 * FONT_GAP);


  for (var i = 0; i < players.length; i++) {

    var barHeight = 150 * times[i] / maxTime;
    var barColor = getRandomNumber(1, 100) + '%';
    var barRemains = MAX_BAR_HEIGHT - barHeight;
    var barX = CLOUD_X + GISTOGRAM_GAP;
    var finalBarGap = GISTOGRAM_GAP + BAR_WEIGHT;
    var finalResultY = RESULT_Y + barRemains;
    var finalBarY = BAR_Y + barRemains;

    ctx.fillStyle = '#000';
    ctx.fillText(players[i], barX + i * finalBarGap, TEXT_Y);
    ctx.fillText(Math.round(times[i]), barX + i * finalBarGap, finalResultY);
    ctx.fillStyle = (players[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'hsl(228,' + barColor + ', 50%)';
    ctx.fillRect(barX + i * finalBarGap, finalBarY, BAR_WEIGHT, barHeight);
  }
};
