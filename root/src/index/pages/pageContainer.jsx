const React = require('react');
const classnames = require('classnames');

var PageContainer = React.createClass({
  render() {
    return (
      <div className="page-container">
        {this.props.children}
      </div>
    )
  }
});

module.exports = PageContainer;
