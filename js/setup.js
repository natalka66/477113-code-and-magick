'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LAST_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYESCOLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIRE_BOLL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];


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


var makeClick = function () {
  var setupOpen = document.querySelector('.setup-open');
  var setup = document.querySelector('.setup');
  setupOpen.addEventListener('click', function () {
    setup.classList.remove('hidden');
  });
  var setupClose = document.querySelector('.setup-close');
  setupClose.addEventListener('click', function () {
    setup.classList.add('hidden');
  });
};

var makeKeydown = function () {
  var setup = document.querySelector('.setup');
  var setupClose = document.querySelector('.setup-close');
  var setupOpenIcom = document.querySelector('.setup-open-icon');
  setupOpenIcom.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      setup.classList.remove('hidden');
    }
  });

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      setup.classList.add('hidden');
    }
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      setup.classList.add('hidden');
    }
  });
};

var addChangingCoatColarOnClick = function () {
  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  wizardCoat.addEventListener('click', function () {
    var newWizardCoat = getRandomElementFromArray(WIZARD_COAT_COLOR);
    wizardCoat.style.fill = newWizardCoat;
    var inputWizardCoat = document.querySelector('.coat-color-input');
    inputWizardCoat.value = newWizardCoat;
  });
};

var addChangingEyesColarOnClick = function () {
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  wizardEyes.addEventListener('click', function () {
    var newWizardEyes = getRandomElementFromArray(WIZARD_EYESCOLOR);
    wizardEyes.style.fill = newWizardEyes;
    var inputWizardEyes = document.querySelector('.eye-color-input');
    inputWizardEyes.value = newWizardEyes;
  });
};

var addChangingFireBollOnClick = function () {
  var wizardFireBoll = document.querySelector('.setup-fireball-wrap');
  wizardFireBoll.addEventListener('click', function () {
    var newWizardFireBallColor = getRandomElementFromArray(WIZARD_FIRE_BOLL);
    wizardFireBoll.style.backgroundColor = newWizardFireBallColor;
    var fireBollColorInput = document.querySelector('.fireball-color-input');
    fireBollColorInput.value = newWizardFireBallColor;
  });
};

var start = function () {
  var wizards = createWizardArray();
  showSimilarWizards();
  renderAllWizards(wizards);
  addChangingCoatColarOnClick();
  addChangingEyesColarOnClick();
  addChangingFireBollOnClick();
  makeClick();
  makeKeydown();
};

start();
