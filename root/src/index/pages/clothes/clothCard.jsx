import { Card } from 'antd';
const React = require('react');
const classnames = require('classnames');
const jsonp = require('../../../components/jsonp');

var ClothCard = React.createClass({
  getDefaultProps() {
    return {
      cloth: null,
      className: ""
    }
  },
  getInitialState() {
    return {
    };
  },
  componentDidMount() {
    // 
  },
  handleClick(e) {
    // let url = this.props.cloth.purchase;
    // if (!url.startsWith('http')) {
    //   url = 'http:\/\/' + url;
    // }
    // window.open(url);
  },
  render: function () {
    if (!this.props.cloth) {
      return (
        <div className="col-sm-6 col-md-4">
          <div className={"showcase-card-container empty " + this.props.className}>
            <div className="showcase-card"></div>
          </div>
        </div>
      )
    }
    return (
      <div className="col-sm-6 col-md-4">
        <div className={"showcase-card-container " + this.props.className} >
          <Card bodyStyle={{ padding: 0 }} className="showcase-card">
            <div className="custom-image">
              <a href={this.props.cloth.purchase}>
                <img width="100%" src={this.props.cloth.images[0]} />
              </a>
            </div>
            <div className="custom-card">
              <a href={this.props.cloth.purchase}>
                <h5>{this.props.cloth.title}</h5>
              </a>
              <p className="cloth-tags">{this.props.cloth.tags.split(',').map((v, i) => <span key={i}>{v}</span>)}</p>
            </div>
          </Card>
        </div>
      </div>
    )
  }
});

module.exports = ClothCard;
