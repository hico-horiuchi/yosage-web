var anime = anime || {};

(function() {
  'use strict';

  anime.events = [
    'webkitAnimationEnd',
    'mozAnimationEnd',
    'MSAnimationEnd',
    'oanimationend',
    'animationend'
  ];

  anime.classes = [
    'animated',
    'zoomIn',
    'zoomOut'
  ];

  anime.initialize = function(element, isInitialized) {
    if (!isInitialized) {
      m.startComputation();
      anime.reset(element)
      m.endComputation();
    }
  };

  anime.reset = function(element) {
    anime.events.map(function(event) {
      element.addEventListener(event, function() {
        anime.classes.map(function(c) {
          element.classList.remove(c);
        });
      });
    });
  };

  anime.zoomOut = function(element, callback) {
    element.classList.add('animated');
    element.classList.add('zoomOut');
    setTimeout(function() {
      callback;
    }, 200);
  };
})();
