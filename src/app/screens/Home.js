'use strict';


var m = require('mithril');


// var domain = require('./../../domain');
// var utils = require('./../utils');
// var Banner = require('./../components/Banner');
// var ArticleList = require('./../components/ArticleList');
// var FeedToggle = require('./../components/FeedToggle');
// var PopularTagList = require('./../components/PopularTagList');


// function onTagItemClick(tag) {
//   domain.actions.getArticlesByTag(tag);
// }


function oninit() {
  // utils.updateDocumentTitle('Home');
  // domain.actions.getTags();
}


function view() {
  // var banner = m(Banner);

  // if (domain.store.user) {
  //   banner = null;
  // }

  return m('.screen',
    [
      m('h1', 'Hello World!'),
    ]
  );
};


module.exports = {
  oninit: oninit,
  view: view
};
