'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
});

ReactDOM.render(
  <HelloWorld name='Pierre'/>, document.getElementById('app'));
