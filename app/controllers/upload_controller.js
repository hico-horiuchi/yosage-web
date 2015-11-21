var anime = anime || {};
var lgtm = lgtm || {};
var upload = upload || {};

(function() {
  'use strict';

  upload.status = m.prop(200);

  upload.controller = function() {};

  upload.clickInputfile = function() {
    document.getElementById('inputfile').click();
  };

  upload.changeInputfile = function(element) {
    upload.submit(new FormData(document.getElementById('upload')));
  };

  upload.submit = function(data) {
    anime.zoomOut(
      document.getElementById('app-content'),
      m.render(document.getElementById('app-body'), upload.loading())
    );

    m.request({
      method: 'post',
      url: '/api/lgtm',
      data: data,
      serialize: function(data) { return data; },
      extract: extractStatus
    }).then(function(value) {
      lgtm.response(value);
      anime.zoomOut(document.getElementById('app-content'), m.route('/lgtm'));
    }, function(error) {
      upload.status(error);
      anime.zoomOut(document.getElementById('app-content'), m.redraw());
    });

    upload.status(200);
  };
})();
