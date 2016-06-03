import { Icon } from 'antd';
const React = require('react');
const classnames = require('classnames');
const Portal = require('../portal');
require('./contentChanger.scss');

var Changer = React.createClass({
  getInitialState() {
    var self = this;
    return {
      current: 0,
    };
  },
  anchorClickHandle(idx, e) {
    if (idx == this.state.current) {
      return
    }
    let self = this;
    this.setState({current: idx}, () => {
      if (self.props.onChange) {
        self.props.onChange(this.refs[`item_${idx}`], idx);
      }
    });
  },
  componentDidUpdate() {
    
  },
  render() {
    return (
      <div className="page-changer">
        <Portal>
          <div className="page-changer-anchors">
          {React.Children.map(this.props.children, (element, idx) => {
            var classNames = classnames('page-changer-anchor', {active: idx == this.state.current})
            return (
              <div className={classNames} ref={`anchor_${idx}`} onClick={e => this.anchorClickHandle(idx, e)}>
                <Icon type="eye-o" />
              </div>
            )
          })}
          </div>
        </Portal>
        {React.Children.map(this.props.children, (element, idx) => {
          var classNames = classnames('page-changer-item', {active: idx == this.state.current})
          return (
            <div className={classNames} ref={`item_${idx}`}>
              {element}
            </div>
          )
        })}
      </div>
    )
  }
});

module.exports = Changer;
