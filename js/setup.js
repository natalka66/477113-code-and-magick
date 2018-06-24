'use strict';

// все функции для открытия и закрытия окна с моим и подобными волшебниками
(function () {
// функция по клику открывает и закрывает
// окно  с моим и другими волшебниками и возвращает его в исходное положение, если было перетаскивание
  var makeClick = function () {
    var setupOpen = document.querySelector('.setup-open');
    var setup = document.querySelector('.setup');
    setupOpen.addEventListener('click', function () {
      setup.classList.remove('hidden');
    });
    var setupClose = document.querySelector('.setup-close');
    setupClose.addEventListener('click', function () {
      setup.classList.add('hidden');
      var form = document.querySelector('.setup');
      form.style.top = '';
      form.style.left = '';
    });
  };

  // функция по нажатию клавиши enter открывает окно
  var makeKeydown = function () {
    var setup = document.querySelector('.setup');
    var setupClose = document.querySelector('.setup-close');
    var setupOpenIcom = document.querySelector('.setup-open-icon');
    setupOpenIcom.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 13) {
        setup.classList.remove('hidden');
      }
    });
    // функция по нажатию клавиши esc закрывает окно
    document.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 27) {
        setup.classList.add('hidden');
      }
    });
    // если значек крестика активен, при нажатии enter окно закроется
    setupClose.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 13) {
        setup.classList.add('hidden');
      }
    });
  };
  window.initializeOpenAndCloseWizardPopUp = function () {
    makeClick();
    makeKeydown();
  };
})();

// объединила блок настройки моего персонажа
(function () {

  var WIZARD_FIRE_BOLL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  // по клику меняю цвет пальто волшебника
  var addChangingCoatColarOnClick = function () {
    var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
    wizardCoat.addEventListener('click', function () {
      var newWizardCoat = window.getRandomElementFromArray(window.WIZARD_COAT_COLOR);
      wizardCoat.style.fill = newWizardCoat;
      var inputWizardCoat = document.querySelector('.coat-color-input');
      inputWizardCoat.value = newWizardCoat;
    });
  };
  // по клику меняю цвет глаз
  var addChangingEyesColarOnClick = function () {
    var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
    wizardEyes.addEventListener('click', function () {
      var newWizardEyes = window.getRandomElementFromArray(window.WIZARD_EYESCOLOR);
      wizardEyes.style.fill = newWizardEyes;
      var inputWizardEyes = document.querySelector('.eye-color-input');
      inputWizardEyes.value = newWizardEyes;
    });
  };
  // меняю цвет фаер-бола по щелчку
  var addChangingFireBollOnClick = function () {
    var wizardFireBoll = document.querySelector('.setup-fireball-wrap');
    wizardFireBoll.addEventListener('click', function () {
      var newWizardFireBallColor = window.getRandomElementFromArray(WIZARD_FIRE_BOLL);
      wizardFireBoll.style.backgroundColor = newWizardFireBallColor;
      var fireBollColorInput = document.querySelector('.fireball-color-input');
      fireBollColorInput.value = newWizardFireBallColor;
    });
  };
  window.initializeWizardOutfit = function () {
    addChangingCoatColarOnClick();
    addChangingEyesColarOnClick();
    addChangingFireBollOnClick();
  };
})();
