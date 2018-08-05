import React, { Component } from 'react';
import { toggleLogin, createUser } from '../redux'

class User extends Component {
  constructor(props) {
    super(props)
    this.state = { username: '', loggedIn: false}
    this.handleChange = this.handleChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleCreateUsername = this.handleCreateUsername.bind(this)
  }
  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  handleLogin(e) {
    const { username } = e.target
    this.setState(prevState => {
      toggleLogin(prevState)
    })
    console.log(this.state)
  }
  handleCreateUsername(e) {
    this.setState(createUser(this.state.username))
  }
  render() {
    return (
      <div className="user">
        <form>
          <input onChange={this.handleChange} value={this.username} name="username" type="text" />
          <button onClick={this.handleLogin} value={this.username}>Login</button>
          <button onClick={this.handleCreateUsername}>Create Username</button>
        </form>
      </div>
    )
  }
}

export default User