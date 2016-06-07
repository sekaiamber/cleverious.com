const $ = require('jquery');
const api = require('./const').api;

module.exports = function (url, opt) {
  url = url.toLocaleLowerCase();
  opt = opt || {};
  if (typeof opt == 'function') {
    callback = opt;
    opt = {}
  }
  if (!url.startsWith('http') && api[url]) {
    let _url = api[url];
    for (var prop in opt) {
      if (opt.hasOwnProperty(prop)) {
        _url = _url.replace(`$${prop}$`, opt[prop]);
      }
    }
    url = _url;
  }
  return $.ajax({
    url: url,
    dataType: "jsonp",
    jsonp: "callback",
    jsonpCallback: "callback",
  });
};