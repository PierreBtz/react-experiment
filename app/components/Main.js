'use strict';

import React from 'react';

const Main = React.createClass({
  propTypes: {
    children: React.PropTypes.object
  },

  render: function() {
    return <div className = 'main-container' > {
      this.props.children
    } < /div>;
  }
});

module.exports = Main;
