import { Spin } from 'antd';

const React = require('react');
const classnames = require('classnames');
const jsonp = require('../../../components/jsonp');
const Showcase = require('./showcase');
require('./clothes.scss');

const database = require('_database');

var Clothes = React.createClass({

  getInitialState() {
    return {
      loading: true,
      totalPage: 1,
    };
  },
  componentDidMount() {
    // get overview
    let self = this;
    let data = database.clothes.overview;
    let series = data.series;
    let cleverious = series.cleverious;
    self.setState({
      total: cleverious.count,
      defaultPageSize: data.countPerPage,
      loading: false,
    }, () => {
      self.showcase.setSeries('cleverious');
    });
    // jsonp('overview').done(function (data) {
    //   let series = data.series;
    //   let cleverious = series.cleverious;
    //   self.setState({
    //     total: cleverious.count,
    //     defaultPageSize: data.countPerPage,
    //     loading: false,
    //   }, () => {
    //     self.showcase.setSeries('cleverious');
    //   });
    // });
  },
  render: function () {
    return (
      <div className="page-clothes">
        <Spin spinning={this.state.loading}>
          <Showcase total={this.state.total} defaultPageSize={this.state.defaultPageSize} ref={(c) => this.showcase = c} onLoading={(c) => this.setState({loading: false})}/>
        </Spin>
      </div>
    )
  }
});

module.exports = Clothes;
