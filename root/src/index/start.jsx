import { Router, hashHistory } from 'react-router';
import {render} from 'react-dom';
const Index = require('./index');
const React = require('react');

render(<Index />, document.getElementById("container"));
