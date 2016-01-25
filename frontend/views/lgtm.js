var lgtm = lgtm || {};

(function() {
  'use strict';

  lgtm.view = function(ctrl) {
    document.title = 'lgtm | yosage';

    return [
      m('#app-content.container.animated.zoomIn.m-b-lg', {
        config: anime.initialize
      }, [
        m('.row.m-a-0', [
          m('.col.s10.offset-s1', [
            m('.card.hoverable.m-a-0', [
              m('.card-image', [
                m('img', {
                  src: 'data:image/gif;base64,' + lgtm.response().data
                })
              ]),
              m('.card-action.center', [
                m('a.yosage-text', {
                  href: 'data:image/gif;base64,' + lgtm.response().data,
                  download: lgtm.response().filename
                }, [
                  m('i.fa.fa-download.m-r-sm'),
                  m('span.medium', 'Download LGTM')
                ])
              ])
            ])
          ])
        ])
      ])
    ];
  };
})();
