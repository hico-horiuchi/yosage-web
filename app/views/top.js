var top = top || {};

(function() {
  'use strict';

  top.view = function(ctrl) {
    document.title = 'yosage';

    return [
      m('#app-content.container.animated.zoomIn.m-b-lg', {
        config: anime.initialize
      }, [
        m('.row.m-a-0.m-b-lg', [
          m('.col.s12.center', [
            m('h4.grey-text.text-darken-2.medium.m-a-0.m-b-sm', 'LGTM gif generator'),
            m('p.grey-text.m-a-0.m-b-md', [
              'This is a Web application of',
              m('a.yosage-text.m-x-sm[href=https://github.com/hico-horiuchi/yosage][target=_blank]', 'hico-horiuchi/yosage'),
              '.'
            ]),
            m('a.btn.yosage', {
              onclick: top.zoomOutToUpload
            }, [
              m('i.fa.fa-arrow-right.m-r-sm'),
              'Get started'
            ])
          ])
        ]),
        m('.row.m-a-0', [
          m('.col.s8.offset-s2.m6.center', [
            m('i.fa.fa-3x.fa-thumbs-up.yosage-text.m-b-sm'),
            m('h5.grey-text.text-darken-2.medium.m-a-0.m-b-sm', 'LGTM Culture'),
            m('p.grey-text.m-a-0', 'Looks good to me (LGTM) is the most popular comment on Github, perhaps.'),
            m('.m-b-md.hide-on-med-and-up'),
          ]),
          m('.col.s8.offset-s2.m6.center', [
            m('i.fa.fa-3x.fa-motorcycle.yosage-text.m-b-sm'),
            m('h5.grey-text.text-darken-2.medium.m-a-0.m-b-sm', 'High Speed'),
            m('p.grey-text.m-a-0', [
              'The back-end is implemented in',
              m('a.yosage-text.m-x-sm[href=http://golang.org/][target=_blank]', 'Golang'),
              ', and front-end is implemented in',
              m('a.yosage-text.m-x-sm[href=https://lhorie.github.io/mithril/][target=_blank]', 'Mithril.js'),
              '.'
            ])
          ])
        ])
      ])
    ];
  };
})();
