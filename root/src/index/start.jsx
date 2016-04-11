import {render} from 'react-dom';
const Index = require('./index');
const React = require('react');
require('./ant.scss');

render(<Index />, document.getElementById("main"));
