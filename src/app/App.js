'use strict';

var m = require('mithril');
// var j2c = require('j2c');

var LayoutDefault = require('./layouts/Default');
var ScreenHome = require('./screens/Home');


function init() {
  m.route(document.getElementById('WeatherApp'), '/', {
    '/': buildRouteWithLayout(ScreenHome),
    '/location/:id': buildRouteWithLayout(ScreenHome),
  });
}


function buildRouteWithLayout(screen, layout) {
  return {
    render: function () {
      return m(layout || LayoutDefault, m(screen));
    }
  };
}


module.exports = {
  init: init,
};
