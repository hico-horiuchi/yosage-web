var dragdrop = dragdrop || {};
var upload = upload || {};

(function() {
  'use strict';

  dragdrop.events = [
    'dragstart',
    'drag',
    'dragenter',
    'dragleave',
    'dragover',
    'drop',
    'dragend'
  ];

  dragdrop.initialize = function(element, isInitialized) {
    if (!isInitialized) {
      m.startComputation();
      dragdrop.setListeners(element)
      m.endComputation();
    }
  };


  dragdrop.setListeners = function(element) {
    dragdrop.events.map(function(event) {
      element.addEventListener(event, function(e) {
        e.preventDefault();
      });
    });

    element.addEventListener('drop', function(e) {
      if (typeof dragdrop.onChange == 'function') {
        dragdrop.onChange((e.dataTransfer || e.target).files);
      }
    });
  };

  dragdrop.onChange = function(files) {
    var data = new FormData;
    data.append('inputfile', files[0]);
    upload.submit(data);
  };
})();
