let React = require('react');
let classnames = require('classnames');
require('./index.scss');

var Index = React.createClass({
    getInitialState() {
        return {
          theme: 'light'
      };
    },
    render: function () {
        let optClasses = classnames('opt-container', {'side-bar-full': this.state.full});
        return (
            <div className="container-1">
               {this.state.theme}
            </div>
          )
      }
});

module.exports = Index;
