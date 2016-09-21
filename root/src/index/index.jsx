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
const Clothes = require('./pages/clothes/clothes');
// footer
const Footer = require('./footer/footer');

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
  // handle page change
  offsets: [0],
  offsetsMid: [],
  autoScrolling: false,
  handlePageChange(dom, idx, doms, auto) {
    let $dom = $(dom);
    $('body').removeClass('logo about clothes').addClass($('.page-container', $dom).attr('page'));
    if (auto) {
      let self = this;
      this.autoScrolling = true;
      $('body').addClass('scrolling');
      $(this.mainPage).stop().animate({
        scrollTop: this.offsets[idx],
      }, {
        duration: 700,
        // easing: 'easeInOutQuart',
        complete: () => {
          self.autoScrolling = false;
          $('body').removeClass('scrolling');
        }
      });
    }
  },
  handlePageChangeInit(pages) {
    $('body').addClass('logo');
    this.handleWindowResize(pages);
  },
  handleWindowResize(pages) {
    for (var i = 0; i < pages.length - 1; i++) {
      this.offsets[i + 1] = this.offsets[i] + $(pages[i]).outerHeight();
      this.offsetsMid[i] = this.offsets[i + 1] - $('body').outerHeight() / 2;
    }
  },
  componentDidMount() {
    // handle page scroll
    let self = this;
    $(this.mainPage).scroll((e) => {
      if (!self.autoScrolling) {
        for (var i = 0; i < self.offsetsMid.length; i++) {
          if (self.offsetsMid[i] > self.mainPage.scrollTop) {
            break
          }
        }
        if (i !== self.Changer.state.current) {
          self.Changer.setCurrent(i);
        }
      }
    })
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
        <div className="velocity-span main-page" ref={(c) => this.mainPage = c}>
            {this.state.imgLoading ? null :
              <Changer
                onChange={this.handlePageChange}
                onInit={this.handlePageChangeInit}
                onResize={this.handleWindowResize}
                ref={(c) => this.Changer = c}
                footer={<Footer />}
              >
                <PageContainer name="logo"><Logo delay={1000}/></PageContainer>
                <PageContainer name="clothes"><Clothes /></PageContainer>
                <PageContainer name="about"><About /></PageContainer>
              </Changer>
            }
        </div>
      </div>
    )
  }
});

module.exports = Index;
