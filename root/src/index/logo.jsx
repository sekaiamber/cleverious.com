import { QueueAnim } from 'antd';
const React = require('react');
const classnames = require('classnames');
const Images = require('../components/Images');
const Eye = require('./eye');
require('./logo.scss');

var Logo = React.createClass({

  getInitialState() {
    return {
    };
  },
  render: function () {
    return (
      <div className="clv-canvas logo">
        <QueueAnim delay={this.props.delay} type="bottom" duration={1000} interval={200}>
          <Eye key="a" />
          <div key="b" className="logo-text">
            <img src={Images['Cleverious-big.png'].src} />
          </div>
          <div key="c" className="logo-coming-soon">Coming Soon</div>
        </QueueAnim>
      </div>
    )
  }
});

module.exports = Logo;
