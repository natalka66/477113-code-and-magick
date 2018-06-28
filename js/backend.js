'use strict';
window.backend = {};
window.backend.load = function (onLoad, onError) { // передаю undefined, потому что data не нужна. Это прием данных.
  window.load('https://js.dump.academy/code-and-magick/data', undefined, 'GET', function (text) {
    onLoad(text);
  }, function (error) {
    onError(error);
  });

};
window.backend.save = function (data, onLoad, onError) { // это отравка данных
  window.load('https://js.dump.academy/code-and-magick', data, 'POST', function (text) {
    onLoad(text);
  }, function (error) {
    onError(error);
  });
};
