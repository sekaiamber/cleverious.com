const React = require('react');
const classnames = require('classnames');
const Member = require('./member');
// const jsonp = require('../../../components/jsonp');
import { Popover } from 'antd';
require('./about.scss');

const database = require('_database');

const joinus = (
  <div>
    请发邮件至<span style={{background: "#eee", display: 'inline-block', margin: 'auto 5px', padding: '0 5px'}}>a3824036@126.com</span>
  </div>
);

var About = React.createClass({
  componentDidMount() {
    // jsonp('members').done((data) => {
    //   this.setState({
    //     members: data
    //   })
    // });
    this.setState({
      members: database.members
    })
  },
  getInitialState() {
    return {
      members: []
    };
  },
  render: function () {
    return (
      <div className="page-about">
        <h2 className="page-about-title">关于我们，关于Cleverious</h2>
        <p className="text1">我们是一群不满足于现状的现役设计师和工程师，我们喜爱设计，拥抱创意。2016年的某一天，在苦于找不到中意的衣服的情况下，我们冒出一个想法：自己设计。我们找了一个自己设计的图案作为LOGO，又花了20秒苦思冥想了一个名字：Cleverious，意为机智的人或者事物。我们希望自己业余时间的努力能给大家带来快乐。</p>
        <p className="text2">Clever People with clever ideas :)<br />-- Cleverious Team, 2016.05.</p>
        <div className="members row">
          {this.state.members.map((m, i) => {
            return <Member {...m} index={i} key={m.name}/>
          })}
          <div className={`page-about-member YOU col-xs-6 col-sm-6 col-md-4`}>
            <div className="avatar"><img src="http://assets.cleverious.com/avatar_placeholder.png" /></div>
            <Popover content={joinus} title="加入我们">
              <h3 className="name"><small><a>YOU</a></small></h3>
            </Popover>
            <i></i>
            <p className="description"></p>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = About;

