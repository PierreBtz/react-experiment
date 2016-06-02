'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var USER = {
  name: 'Pierre Btz',
  username: 'PierreBtz',
  image: 'https://avatars.githubusercontent.com/PierreBtz'
}

var ProfilePic = React.createClass({
  propTypes: {
    imageUrl: React.PropTypes.string.isRequired
  },

  render: function() {
    return <img src={this.props.imageUrl} style={{
      height: 100,
      width: 100
    }}/>
  }
})

var ProfileLink = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired
  },

  render: function() {
    return <div>
      <a href={`https://www.github.com/${this.props.username}`}>
        {this.props.username}
      </a>
    </div>
  }
})

var ProfileName = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired
  },

  render: function() {
    return <div>
      {this.props.name}
    </div>
  }
})

var Avatar = React.createClass({
  propTypes: {
    user: React.PropTypes.object.isRequired
  },

  render: function() {
    return <div>
      <ProfilePic imageUrl={this.props.user.image}/>
      <ProfileName name={this.props.user.name}/>
      <ProfileLink username={this.props.user.username}/>
    </div>
  }
})

ReactDOM.render(
  <Avatar user={USER}/>, document.getElementById('app'));
