import { Spin } from 'antd';
import { VelocityComponent, VelocityTransitionGroup } from 'velocity-react';
const React = require('react');
const classnames = require('classnames');
const Images = require('../components/Images');
const Logo = require('./logo');
require('./index.scss');

var Index = React.createClass({
  getInitialState() {
    var self = this;
    Images.onLoad(() => {
      setTimeout(function () {
        self.setState({imgLoading: false});
      }, 1000);
    });
    return {
      theme: 'light',
      imgLoading: true,
    };
  },
  render: function () {
    return (
      <div className="container">
        <VelocityComponent animation={{opacity: this.state.imgLoading ? 0 : 1 }} duration={2500} delay={1000}>
          <div className="homepage-bg-mask">
            <div className="homepage-bg-mask-img" style={{backgroundImage: `url(${Images['home-page-bg.png'].src})`}}></div>
          </div>
        </VelocityComponent>
        <div className="velocity-span">
          <VelocityTransitionGroup
            enter={{animation: { opacity: [1, 0], translateY: [0, 50] }, duration: 1000 }}
            leave={{animation: { opacity: [0, 1], translateY: [-50, 0] }, duration: 1000 }}>
            {this.state.imgLoading ? <div className="clv-loading"><Spin size="large" /></div> : null}
          </VelocityTransitionGroup>
        </div>
        <div className="velocity-span">
            {this.state.imgLoading ? null : <Logo delay={1000}/>}
        </div>
      </div>
    )
  }
});

module.exports = Index;
