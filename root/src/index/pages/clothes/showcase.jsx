import { Spin, Card } from 'antd';
const React = require('react');
const classnames = require('classnames');
const jsonp = require('../../../components/jsonp');
const Pagination = require('../../../components/pagination/pagination');
const ClothCard = require('./clothCard');

var Showcase = React.createClass({
  getDefaultProps() {
    return {
      total: 0,
      defaultPageSize: 6,
      onLoading: () => { },
    }
  },
  getInitialState() {
    return {
      page: 1,
      series: '',
      clothes: [],
    };
  },
  componentDidMount() {
    // 
  },
  setSeries(name) {
    this.setState({
      series: name,
    }, this.setPage);
  },
  setPage(page) {
    page = page || 1;
    let self = this;
    jsonp('clothes', {
      series: this.state.series,
      page: page
    }).done((data) => {
      self.setState({
        clothes: data
      })
    });
    this.props.onLoading();
  },
  render: function () {
    return (
      <div className="page-clothes-showcase">
        <div className="page-clothes-showcase-cards">
          {(() => {
            let clothes = [];
            for (var i = 0; i < this.props.defaultPageSize; i++) {
              if (i < this.state.clothes.length) {
                clothes.push(<ClothCard key={i} className={"card" + i} cloth={this.state.clothes[i]}/>)
              } else {
                clothes.push(<ClothCard key={i} className={"card" + i} />)
              }
            }
            return clothes;
          })()}
        </div>
        <Pagination className="page-clothes-showcase-pageing" defaultCurrent={1} total={this.props.total} defaultPageSize={this.props.defaultPageSize} onChange={this.setPage}/>
      </div>
    )
  }
});

module.exports = Showcase;