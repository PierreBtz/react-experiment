'use strict';

import React from 'react';
import { transparentBg } from '../styles';

const Prompt = React.createClass({
  propTypes: {
    header: React.PropTypes.string,
    onSubmitUser: React.PropTypes.func,
    onUpdateUser: React.PropTypes.func,
    username: React.PropTypes.string
  },

  render: function() {
    return (
    <div className='jumbotron col-sm-6 col-sm-offset-3 text-center' style={transparentBg}>
      <h1>{this.props.header}</h1>
      <div className = 'col-sm-12'>
        <form onSubmit= {this.props.onSubmitUser}>
          <div className='form-group'>
            <input
              className='form-control'
              placeholder='Github Username'
              type='text'
               onChange={this.props.onUpdateUser}
               value={this.props.username}/>
          </div>
          <div className='from-group col-sm-4 col-sm-offset-4'>
            <button
              className='btn btn-block btn-success'
              type='submit'>
                Continue
              </button>
          </div>
        </form>
      </div>
    </div>
   );
  }
});

module.export = Prompt;
