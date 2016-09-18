let prefix = 'http://assets.cleverious.com/data/';

module.exports = {
  api: {
    overview: prefix + 'clothes/overview.js',
    clothes: prefix + 'clothes/$series$/$page$.js',
    members: prefix + 'members.js',
    test: prefix + 'test.js'
  }
}