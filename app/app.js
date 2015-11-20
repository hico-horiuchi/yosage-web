var anime = anime || {};
var lgtm = lgtm || {};
var top = top || {};
var upload = upload || {};

var extractStatus = function(xhr, xhrOptions) {
  return xhr.status !== 200 ? xhr.status : xhr.responseText;
};

(function(window) {
  'use strict';

  m.route(document.getElementById('app-body'), '/', {
    '/upload': upload,
    '/lgtm': lgtm,
    '/': top
  });

  document.getElementById('app-title').onclick = function(e) {
    e.preventDefault();
    anime.zoomOut(document.getElementById('app-content'), m.route('/'));
  };
})(window);
