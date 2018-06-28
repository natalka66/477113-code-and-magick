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
      window.closeForm();
    });
  };

  // функция закрытия окна
  window.closeForm = function () {
    var setup = document.querySelector('.setup');
    setup.classList.add('hidden');
    var form = document.querySelector('.setup');
    form.style.top = '';
    form.style.left = '';
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
