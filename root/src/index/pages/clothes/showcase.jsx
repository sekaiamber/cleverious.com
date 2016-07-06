import { Spin, Pagination, Card } from 'antd';
const React = require('react');
const classnames = require('classnames');
const jsonp = require('../../../components/jsonp');

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
          {
            this.state.clothes.map((c, i) =>
              <div className="showcase-card-container" key={i}>
                <Card bodyStyle={{ padding: 0 }} className="showcase-card">
                  <div className="custom-image">
                    <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                  </div>
                  <div className="custom-card">
                    <h3>Europe Street beat</h3>
                    <p>www.instagram.com</p>
                  </div>
                </Card>
              </div>
            )
          }
        </div>
        <Pagination className="page-clothes-showcase-pageing" defaultCurrent={1} total={this.props.total} defaultPageSize={this.props.defaultPageSize} />
      </div>
    )
  }
});

module.exports = Showcase;
