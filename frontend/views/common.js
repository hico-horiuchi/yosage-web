var common = common || {};

(function() {
  'use strict';

  common.loading = function() {
    return [
      m('#app-content.container.center.animated.zoomIn.m-b-lg.p-y-lg', {
        config: anime.initialize
      }, [
        m('i.fa.fa-5x.fa-refresh.fa-spin.yosage-text')
      ])
    ];
  };

  common.error = function(status) {
    var statusIcons = {
      400: 'exclamation-triangle',
      413: 'file-image-o',
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
})();
