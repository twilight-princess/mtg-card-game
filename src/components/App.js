import React, { Component } from 'react'
import '../styles/App.css'
import User from './User'

class App extends Component {
  render() {
    return (
      <div className="App">
        <User
          render={props => {
            const{hangleChange, handleClick, inputs} = props
            return (
              <form>
                <input onChange={this.handleChange} value={this.username} name="username" type="text" />
                <input onClick={this.handleLogin} value="Login" name="loginBtn" type="button" />
                <input onClick={this.handleCreateUsername} value="Create Username" name="createUserBtn" type="button" />
              </form>
            )
          }}
        />
      </div>
    )
  }
}

export default App
