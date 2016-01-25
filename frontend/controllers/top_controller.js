var anime = anime || {};
var top = top || {};

(function() {
  'use strict';

  top.controller = function() {};

  top.zoomOutToUpload = function() {
    anime.zoomOut(document.getElementById('app-content'), m.route('/upload'));
  };
})();
