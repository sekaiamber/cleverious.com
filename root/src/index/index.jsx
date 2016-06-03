import { Spin } from 'antd';
import { VelocityComponent, VelocityTransitionGroup } from 'velocity-react';
const React = require('react');
const classnames = require('classnames');
const Images = require('../components/Images');
const Changer = require('../components/contentChanger/contentChanger');
const $ = require('jquery');
require('./index.scss');
// pages
const PageContainer = require('./pages/pageContainer');
const Logo = require('./pages/logo/logo');
const About = require('./pages/about/about');

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
  handlePageChange(dom, idx) {
    let $dom = $(dom);
    $(this.refs.mainPage).animate({
      scrollTop: $dom.position().top,
    }, {
      duration: 700,
      // easing: 'easeInOutQuart'
    });
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
        <div className="velocity-span main-page" ref="mainPage">
            {this.state.imgLoading ? null :
              <Changer onChange={this.handlePageChange}>
                <PageContainer><Logo delay={1000}/></PageContainer>
                <PageContainer><About /></PageContainer>
              </Changer>
            }
        </div>
      </div>
    )
  }
});

module.exports = Index;
