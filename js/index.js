'use strict';
window.WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
window.WIZARD_EYESCOLOR = ['black', 'red', 'blue', 'yellow', 'green'];

// функция, которая возвращает случайное значение из массива
window.getRandomElementFromArray = function (array) {
  var index = Math.floor(Math.random() * array.length);
  var element = array[index];
  return element;
};
var main = function () {
  window.dragSetupUserPic();
  window.initializeWizardOutfit();
  window.initializeOpenAndCloseWizardPopUp();
  window.getSimilarWizards();
};

main();
