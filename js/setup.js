'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LAST_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYESCOLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var showUserDialog = function () {
  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');
};

var createWizardSettings = function () {
  var wizard = {
    name: getRandomElementFromArray(WIZARD_NAMES) + ' ' + getRandomElementFromArray(WIZARD_LAST_NAME),
    coatColor: getRandomElementFromArray(WIZARD_COAT_COLOR),
    eyesColor: getRandomElementFromArray(WIZARD_EYESCOLOR)
  };
  return wizard;
};

var getRandomElementFromArray = function (array) {
  var index = Math.floor(Math.random() * array.length);
  var element = array[index];
  return element;
};

var createWizardArray = function () {
  var array = [];
  for (var i = 0; i < 4; i++) {
    array[i] = createWizardSettings();
  }
  return array;
};

var renderAllWizards = function (wizards) {
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < 4; i++) {
    fragment.appendChild(renderWizard(wizards[i], similarWizardTemplate));
  }
  similarListElement.appendChild(fragment);
};

var renderWizard = function (wizard, similarWizardTemplate) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var showSimilarWizards = function () {
  document.querySelector('.setup-similar').classList.remove('hidden');
};

var setup = function () {
  var wizards = createWizardArray();
  showSimilarWizards();
  showUserDialog();
  renderAllWizards(wizards);
};

setup();
