'use strict';

var React = require('react'),
    Hello = require('./components/hello');

console.log('wtf', document.getElementById('content'));
React.render(<Hello />, document.getElementById('content'));
