const Images = {
  names: [],
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
      console.log(name);
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
  },
  
  pushImage(key, src) {
    var image = new Image();
    image.src = src;
    this[key] = {
      src: image.src,
      loaded: false
    };
    var self = this;
    image.onload = (v => self._load(key));
    this.names.push[key];
  }
}

Images.pushImage('Logo-big-1.png', require('./../../assets/images/Logo-big-1.png'));
Images.pushImage('Logo-big-2.png', require('./../../assets/images/Logo-big-2.png'));
Images.pushImage('Logo-big-3.png', require('./../../assets/images/Logo-big-3.png'));
Images.pushImage('Logo-big-4.png', require('./../../assets/images/Logo-big-4.png'));
Images.pushImage('Logo-big-5.png', require('./../../assets/images/Logo-big-5.png'));
Images.pushImage('Cleverious-big.png', require('./../../assets/images/Cleverious-big.png'));
Images.pushImage('home-page-bg.png', require('./../../assets/images/home-page-bg.png'));

module.exports = Images;