const React = require('react');
const classnames = require('classnames');
const Member = require('./member');
require('./about.scss');

var About = React.createClass({
  getDefaultProps() {
    return {
      members: [{
        avatar: 'sekai.jpg',
        name: 'SEKAI',
        description: ''
      }, {
        avatar: 'sekai.jpg',
        name: 'FATE',
        description: ''
      }, {
        avatar: 'sekai.jpg',
        name: 'YOU',
        description: ''
      }]
    }
  },
  getInitialState() {
    return {
    };
  },
  render: function () {
    return (
      <div className="page-about">
        <h1>关于我们，关于Cleverious</h1>
        <p className="text1">我们是一群不满足于现状的现役设计师和工程师，我们喜爱设计，拥抱创意。2016年的某一天，在苦于找不到中意的衣服的情况下，我们冒出一个想法：自己设计。我们找了一个自己设计的图案作为LOGO，又花了20秒苦思冥想了一个名字：Cleverious，意为机智的人或者事物。我们希望自己业余时间的努力能给大家带来快乐。</p>
        <p className="text2">Clever People with clever ideas :)<br />-- Cleverious Team, 2016.05.</p>
        <div className="members">
          {this.props.members.map(m => {
            return <Member {...m} key={m.name}/>
          })}
        </div>
      </div>
    )
  }
});

module.exports = About;
