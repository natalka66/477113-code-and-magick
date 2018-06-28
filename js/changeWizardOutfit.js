'use strict';

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
  // функция отправки данных на сервер, когда я изменила своего волшебника
  var sendMyWizard = function () {
    var wizardForm = document.querySelector('.setup-wizard-form');
    wizardForm.addEventListener('submit', function (evt) {
      evt.preventDefault();
      var formData = new FormData();
      var inputUserName = document.querySelector('.setup-user-name');
      var userName = inputUserName.value;
      var inputWizardCoat = document.querySelector('.coat-color-input');
      var coatColor = inputWizardCoat.value;
      var inputWizardEyes = document.querySelector('.eye-color-input');
      var eyesColor = inputWizardEyes.value;
      var fireBollColorInput = document.querySelector('.fireball-color-input');
      var fireballColor = fireBollColorInput.value;
      formData.append('username', userName);
      formData.append('coat-color', coatColor);
      formData.append('eyes-color', eyesColor);
      formData.append('fireball-color', fireballColor);
      window.backend.save(formData, function () {
        window.closeForm();
      }, function (error) {
        var div = document.createElement('div');
        div.textContent = error;
        wizardForm.appendChild(div);
      });
    });
  };

  window.initializeWizardOutfit = function () {
    addChangingCoatColarOnClick();
    addChangingEyesColarOnClick();
    addChangingFireBollOnClick();
    sendMyWizard();
  };
})();
