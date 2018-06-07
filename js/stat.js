'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var NAMES_Y = 240;
var NAMES_X = 150;
var TIMES_X = 150;
var TIMES_Y = 260;
var COLUMN_WIDTH = 40;
var COLUMN_GAP = 50;
var COLUMN_Y = 70;
var COLOR_TEXT = '#1f2c4b';
var MAX_COLOMN_HEIGHT = 150;
var TEXT_WIN_X = 160;
var TEXT_WIN_Y = 30;
var TEXT_LIST_Y = 50;
var TEXT_LIST_X = 160;


window.renderStatistics = function (ctx, names, times) {
  drawCloud(ctx);
  writeTitle(ctx);
  drawStatistics(ctx, times, names);
};

var drawRectangle = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
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

var drawCloud = function (ctx) {
  drawRectangle(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0, 0, 0, 0.7)');
  drawRectangle(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, '#ffffff');
};

var writeTitle = function (ctx) {
  ctx.fillStyle = COLOR_TEXT;
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', TEXT_WIN_X, TEXT_WIN_Y);
  ctx.fillText('Список результатов:', TEXT_LIST_X, TEXT_LIST_Y);
};

var drawStatistics = function (ctx, times, names) {
  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = COLOR_TEXT;
    ctx.fillText(names[i], NAMES_X + (COLUMN_GAP + COLUMN_WIDTH) * i, NAMES_Y);
    ctx.fillText(Math.round(times[i]), TIMES_X + (COLUMN_GAP + COLUMN_WIDTH) * i, TIMES_Y);
    var color = getColorColumns(names[i]);
    var columnHeight = times[i] * MAX_COLOMN_HEIGHT / maxTime;
    drawRectangle(ctx, NAMES_X + (COLUMN_GAP + COLUMN_WIDTH) * i, COLUMN_Y + MAX_COLOMN_HEIGHT - columnHeight, COLUMN_WIDTH, columnHeight, color);
  }
};

var getColorColumns = function (name) {
  var color;
  if (name === 'Вы') {
    color = 'rgba(255, 0, 0, 1)';
  } else {
    color = 'rgba(0, 0, ' + Math.random() * 255 + ', 0.7)';
  }
  return color;
};

