const React = require('react');
const classnames = require('classnames');
const Images = require('../../../components/Images');

var Member = React.createClass({

  getInitialState() {
    return {
    };
  },
  render: function () {
    return (
      <div className={`page-about-member ${this.props.name}`}>
        <div className="avatar"><img src={Images[this.props.avatar].src} /></div>
        <h2 className="name">{this.props.name}</h2>
        <i></i>
        <p className="description">{this.props.description}</p>
      </div>
    )
  }
});

module.exports = Member;
