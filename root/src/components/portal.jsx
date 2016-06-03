const React = require('react');
import {render} from 'react-dom';

var Portal = React.createClass({
  render: () => null,
  portalElement: null,
  componentDidMount() {
    var p = document.createElement('div');
    p.className = 'portal';
    document.body.appendChild(p);
    this.portalElement = p;
    this.componentDidUpdate();
  },
  componentWillUnmount() {
    document.body.removeChild(this.portalElement);
  },
  componentDidUpdate() {
    render(this.props.children, this.portalElement);
  }
});

module.exports = Portal;