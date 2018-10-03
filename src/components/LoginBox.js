import React, { Component } from 'react';

class LoginBox extends Component {
  state = { loggedIN: false };

  render() {
    return (
      <div id="LoginBox">
        <form name="login">
          <input onChange={this.handleChange} value={this.username} name="username" type="text" />
          <button onClick={this.handleLogin}>Login</button>
          <button onClick={this.handleCreateUsername}>Create Username</button>
        </form>
      </div>
    )
  }
}

export default LoginBox;