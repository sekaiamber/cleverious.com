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
      <div className={`page-about-member m${this.props.index} col-xs-6 col-sm-6 col-md-4`}>
        <div className="avatar"><img src={this.props.avatar} /></div>
        <h3 className="name"><small>{this.props.name}</small></h3>
        <i></i>
        <p className="description">{this.props.description}</p>
      </div>
    )
  }
});

module.exports = Member;
