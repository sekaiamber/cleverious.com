const React = require('react');
const classnames = require('classnames');
const Images = require('../../../components/Images');
const jsonp = require('../../../components/jsonp');
require('./clothes.scss');

var Clothes = React.createClass({

  getInitialState() {
    return {
      loading: true
    };
  },
  componentDidMount() {
    // get overview
    jsonp('overview').done(function (data) {
      console.log(data);
    });
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
