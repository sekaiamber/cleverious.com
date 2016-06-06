const React = require('react');
const classnames = require('classnames');
const Images = require('../../../components/Images');
require('./about.scss');

var About = React.createClass({

  getInitialState() {
    return {
    };
  },
  render: function () {
    return (
      <div className="page-about">
      关于我们
      </div>
    )
  }
});

module.exports = About;
