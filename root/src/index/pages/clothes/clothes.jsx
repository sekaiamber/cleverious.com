const React = require('react');
const classnames = require('classnames');
const Images = require('../../../components/Images');
require('./clothes.scss');

var Clothes = React.createClass({

  getInitialState() {
    return {
    };
  },
  render: function () {
    return (
      <div className="page-clothes">
      展示页面
      </div>
    )
  }
});

module.exports = Clothes;
