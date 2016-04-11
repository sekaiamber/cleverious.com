import { VelocityComponent, VelocityTransitionGroup } from 'velocity-react';
const React = require('react');
const classnames = require('classnames');
const Images = require('../components/Images');
require('./eye.scss');

var Eye = React.createClass({
  anime: [
    [1, 8000],
    [2, 50],
    [3, 50],
    [4, 50],
    [5, 50],
    [4, 50],
    [3, 50],
    [2, 50],
    [1, 50]
  ],
  getInitialState() {
    return {
      currentFrame: 1,
    };
  },
  componentDidMount() {
    var self = this;
    function anime(index, timeout) {
      var frame = self.anime[index];
      timeout = timeout || frame[1];
      self.setState({currentFrame: frame[0]});
      index = (index + 1) % self.anime.length;
      setTimeout(function() {
        anime(index++);
      }, timeout);
    }
    anime(0, 4000);
  },
  render: function () {
    return (
      <div className="eye-container">
        <img className={`eye-frame ${this.state.currentFrame == 1 ? 'show' : ''}`} src={Images['Logo-big-1.png'].src}/>
        <img className={`eye-frame ${this.state.currentFrame == 2 ? 'show' : ''}`} src={Images['Logo-big-2.png'].src}/>
        <img className={`eye-frame ${this.state.currentFrame == 3 ? 'show' : ''}`} src={Images['Logo-big-3.png'].src}/>
        <img className={`eye-frame ${this.state.currentFrame == 4 ? 'show' : ''}`} src={Images['Logo-big-4.png'].src}/>
        <img className={`eye-frame ${this.state.currentFrame == 5 ? 'show' : ''}`} src={Images['Logo-big-5.png'].src}/>
      </div>
    )
  }
});

module.exports = Eye;
