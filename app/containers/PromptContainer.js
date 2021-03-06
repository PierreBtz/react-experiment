import React from 'react';
import Prompt from '../components/Prompt';

const PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  propTypes: {
    route: {
      header: React.PropTypes.string
    },
    routeParams: {
      playerOne: React.PropTypes.string
    }
  },

  getInitialState: function() {
    return {
      username: ''
    };
  },

  handleUpdateUser: function(event) {
    this.setState({
      username: event.target.value
    });
  },

  handleSubmitUser: function(event) {
    event.preventDefault();
    const username = this.state.username;
    this.setState({
      username: ''
    });
    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      });
    } else {
      this.context.router.push('/playerTwo/' + username);
    }
  },

  render: function() {
    return (
      <Prompt
              onSubmitUser = {this.handleSubmitUser}
              onUpdateUser = {this.handleUpdateUser}
              header = {this.props.route.header}
              username = {this.state.username}/>
            );
  }
});

module.exports = PromptContainer;
