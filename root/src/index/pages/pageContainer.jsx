const React = require('react');
const classnames = require('classnames');

var PageContainer = React.createClass({
  componentDidMount: function() {
    this.container.setAttribute('page', this.props.name);
  },
  render() {
    return (
      <div className={`page-container ${this.props.name}`} ref={(c) => this.container = c}>
        {this.props.children}
      </div>
    )
  }
});

module.exports = PageContainer;
