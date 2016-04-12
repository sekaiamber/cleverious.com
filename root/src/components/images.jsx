const pic1 = document.createElement('img');
pic1.src = require('./../../assets/images/Logo-big-1.png');
pic1.onload = (v => Images._load('Logo-big-1.png'));
const pic2 = document.createElement('img');
pic2.src = require('./../../assets/images/Logo-big-2.png');
pic2.onload = (v => Images._load('Logo-big-2.png'));
const pic3 = document.createElement('img');
pic3.src = require('./../../assets/images/Logo-big-3.png');
pic3.onload = (v => Images._load('Logo-big-3.png'));
const pic4 = document.createElement('img');
pic4.src = require('./../../assets/images/Logo-big-4.png');
pic4.onload = (v => Images._load('Logo-big-4.png'));
const pic5 = document.createElement('img');
pic5.src = require('./../../assets/images/Logo-big-5.png');
pic5.onload = (v => Images._load('Logo-big-5.png'));
const pictextlog = document.createElement('img');
pictextlog.src = require('./../../assets/images/Cleverious-big.png');
pictextlog.onload = (v => Images._load('Cleverious-big.png'));
const pichomebg = document.createElement('img');
pichomebg.src = require('./../../assets/images/home-page-bg.png');
pichomebg.onload = (v => Images._load('home-page-bg.png'));

const Images = {
  'Logo-big-1.png': { src: pic1.src, loaded: false},
  'Logo-big-2.png': { src: pic2.src, loaded: false},
  'Logo-big-3.png': { src: pic3.src, loaded: false},
  'Logo-big-4.png': { src: pic4.src, loaded: false},
  'Logo-big-5.png': { src: pic5.src, loaded: false},
  'Cleverious-big.png': { src: pictextlog.src, loaded: false},
  'home-page-bg.png': { src: pichomebg.src, loaded: false},

  names: ['Logo-big-1.png', 'Logo-big-2.png', 'Logo-big-3.png', 'Logo-big-4.png', 'Logo-big-5.png', 'Cleverious-big.png', 'home-page-bg.png'],
  _load(name) {
    this[name].loaded = true;
    for (var i = 0; i < this._loadcbs.length; i++) {
      this._loadcbs[i](name);
    }
  },
  _loadcbs: [],
  onLoad(callback, list) {
    list = list || this.names;
    var self = this;
    var cb = ((name) => {
      var fg = true;
      for (var i = 0; i < list.length; i++) {
        if (self.names.indexOf(list[i]) > -1) {
          fg = fg && self[list[i]].loaded;
        };
      }
      if (fg) {
        callback();
      }
    });
    cb();
    this._loadcbs.push(cb);
  }
}

module.exports = Images;