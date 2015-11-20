var anime = anime || {};
var dragdrop = dragdrop || {};
var upload = upload || {};

(function() {
  'use strict';

  upload.view = function(ctrl) {
    document.title = 'upload | yosage';

    if (upload.status() !== 200) {
      return upload.error(upload.status());
    } else {
      return upload.form();
    }
  };

  upload.error = function(status) {
    var statusIcons = {
      400: 'exclamation-triangle',
      500: 'bug'
    };

    return [
      m('#app-content.container.center.animated.zoomIn.m-b-lg', {
        config: anime.initialize
      }, [
        m('i.fa.fa-5x.yosage-text.m-b-md', {
          class: 'fa-' + statusIcons[status]
        }),
        m('h5.grey-text.text-darken-2.medium.m-a-0', status),
      ])
    ];
  };

  upload.form = function() {
    return [
      m('#app-content.container.animated.zoomIn.m-b-lg', {
        config: anime.initialize
      }, [
        m('.row.m-a-0', [
          m('.col.s10.offset-s1', [
            m('.card.hoverable.center.m-a-0', [
              m('.card-content.grey.grey-text.text-lighten-2.p-a-md', {
                config: dragdrop.initialize
              }, [
                m('i.fa.fa-3x.fa-mouse-pointer.m-b-sm'),
                m('p.medium.m-a-0', 'Drag & drop gif here.')
              ]),
              m('.card-action.grey-text.text-darken-2.p-a-md', [
                m('p.m-a-0', [
                  'Or',
                  m('a.yosage-text.medium.m-x-sm[href=#]', {
                    onclick: upload.clickInputfile
                  }, 'select gif'),
                  'from your computer.'
                ])
              ])
            ])
          ])
        ])
      ]),
      m('form#upload.hide[method=post][enctype=multipart/form-data]', [
        m('input#inputfile[type=file][name=inputfile][accept=image/gif]', {
          onchange: upload.changeInputfile
        })
      ])
    ];
  };
})();
