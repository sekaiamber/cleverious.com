import { Icon } from 'antd';
const React = require('react');
const classnames = require('classnames');
const Portal = require('../portal');
require('./contentChanger.scss');

var Changer = React.createClass({
  items: [],
  getInitialState() {
    var self = this;
    return {
      current: 0,
    };
  },
  componentDidMount() {
    if (this.props.onInit) {
      this.props.onInit(this.items);
    }
    let self = this;
    window.addEventListener('resize', () => {
      if (self.props.onResize) self.props.onResize(self.items);
    }, false);
  },
  handleAnchorClick(idx, e) {
    if (idx == this.state.current) {
      return
    }
    let self = this;
    this.setState({current: idx}, () => {
      if (self.props.onChange) {
        self.props.onChange(this.items[idx], idx, this.items, true);
      }
    });
  },
  setCurrent(idx) {
    if (idx == this.state.current) {
      return
    }
    let self = this;
    this.setState({current: idx}, () => {
      if (self.props.onChange) {
        self.props.onChange(this.items[idx], idx, this.items, false);
      }
    });
  },
  render() {
    return (
      <div className="page-changer">
        <Portal>
          <div className="page-changer-anchors">
          {React.Children.map(this.props.children, (element, idx) => {
            var classNames = classnames('page-changer-anchor', {active: idx == this.state.current})
            return (
              <div className={classNames} ref={`anchor_${idx}`} onClick={e => this.handleAnchorClick(idx, e)}>
                <Icon type="eye-o" />
              </div>
            )
          })}
          </div>
        </Portal>
        {React.Children.map(this.props.children, (element, idx) => {
          var classNames = classnames('page-changer-item', element.props.name, {active: idx == this.state.current});
          return (
            <div className={classNames} ref={(c) => {
              if (!this.items[`item_${idx}`]) {
                this.items.push(c);
                this.items[`item_${idx}`] = c;
              }
            }}>
              {element}
            </div>
          )
        })}
        {this.props.footer}
      </div>
    )
  }
});

module.exports = Changer;
