const React = require('react');
require('./pagination.scss');

var Pagination = React.createClass({
  getDefaultProps() {
    return {
      defaultCurrent: 1,
      defaultPageSize: 6,
      total: 1,
      onChange: () => {}
    }
  },
  getInitialState() {
    let ret = {
      current: this.props.defaultCurrent,
      pageSize: this.props.defaultPageSize,
    };
    return ret;
  },
  componentDidMount() {
    // 
  },
  handleClick(page) {
    if (page == this.state.current) {
      return;
    }
    this.setState({
      current: page
    }, () => {
      this.props.onChange(this.state.current);
    });
  },
  render: function () {
    return (
      <div className="pagination">
        {(() => {
          let nodes = [];
          for(var i = 0; i < Math.ceil(this.props.total / this.state.pageSize); i++) {
            ((idx) => nodes.push(<div className={"pagination-node" + (idx + 1 == this.state.current ? " active" : "")} key={idx} onClick={() => this.handleClick(idx + 1)}></div>))(i);
          }
          return nodes;
        })()}
      </div>
    )
  }
});

module.exports = Pagination;