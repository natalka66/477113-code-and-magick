'use strict';
// функция отображает случайных похожих волшебников

(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_LAST_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  // возвращаю объект, сгенерированный случайным образом (имя, цвет пальто, цвет глаз)
  var createWizardSettings = function () {
    var wizard = {
      name: window.getRandomElementFromArray(WIZARD_NAMES) + ' ' + window.getRandomElementFromArray(WIZARD_LAST_NAME),
      coatColor: window.getRandomElementFromArray(window.WIZARD_COAT_COLOR),
      eyesColor: window.getRandomElementFromArray(window.WIZARD_EYESCOLOR)
    };
    return wizard;
  };

  // функция создает массив и возвращает его. Использую, чтобы получить массив волшебников
  var createWizardArray = function () {
    var array = [];
    for (var i = 0; i < 4; i++) {
      array[i] = createWizardSettings();
    }
    return array;
  };

  // эта функция показывает фрагмент и заполняю ее массивом похожих волшебников
  var renderSimilarWizards = function (wizards) {
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

  // делаю каждого нижнего похожего волшебника
  var renderWizard = function (wizard, similarWizardTemplate) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  // функция  только похожих волшебников внизу
  var showSimilarWizards = function () {
    document.querySelector('.setup-similar').classList.remove('hidden');
  };
  window.getSimilarWizards = function () {
    var wizards = createWizardArray();
    showSimilarWizards();
    renderSimilarWizards(wizards);
  };
})();
