const React = require('react');
const classnames = require('classnames');
const Images = require('../../components/Images');
const Portal = require('../../components/portal');
require('./footer.scss');

var Footer = React.createClass({

  getInitialState() {
    return {
    };
  },
  render: function () {
    return (
      <div className="footer">
        <Portal>
          <div className="footer-image">
            <img src={Images['Logo-big-1.png'].src}/>
          </div>
        </Portal>
        Copyright © 2016 The Project by CLEVERIOUS. All Rights Reserved
        <br />
        Shanghai, China
      </div>
    )
  }
});

module.exports = Footer;
