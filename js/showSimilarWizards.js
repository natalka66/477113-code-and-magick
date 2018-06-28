'use strict';
// функция отображает случайных похожих волшебников

(function () {
  // эта функция показывает фрагмент и заполняю ее массивом похожих волшебников
  // мы берем случайным образом, удаляя из массива элемент
  var renderSimilarWizards = function (wizards) {
    var similarListElement = document.querySelector('.setup-similar-list');
    var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < 4; i++) {
      var indexRandom = getRandomNumber(wizards.length);
      fragment.appendChild(renderWizard(wizards[indexRandom], similarWizardTemplate));
      wizards.splice(indexRandom, 1); // удаляем из массива элемент, начиная с позиции и количество 1
    }
    similarListElement.appendChild(fragment);
  };

  // делаю функцию, чтобы из 14 волшебников случайно получить 4
  var getRandomNumber = function (number) {
    var index = Math.floor(Math.random() * number);
    return index;
  };

  // делаю каждого нижнего похожего волшебника
  var renderWizard = function (wizard, similarWizardTemplate) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  // функция  только похожих волшебников внизу
  var showSimilarWizards = function () {
    document.querySelector('.setup-similar').classList.remove('hidden');
  };
  window.getSimilarWizards = function () {
    window.backend.load(function (wizards) {
      showSimilarWizards();
      renderSimilarWizards(wizards);
    }, function (error) {
      var div = document.createElement('div');
      div.textContent = error;
      var wizardForm = document.querySelector('.setup-wizard-form');
      wizardForm.appendChild(div);

    });

  };
})();
