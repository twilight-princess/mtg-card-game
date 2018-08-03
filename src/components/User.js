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
    console.log(this.state)
  }
  handleLogin(e) {
    const { username } = e.target
    this.setState(prevState => {
      toggleLogin(prevState)
    })
    console.log(username)
  }
  handleCreateUsername(e) {
    const { username } = e.target
    this.setState(createUser(username))
    console.log(username)
  }
  render() {
    return (
      <div className="user">
        {this.props.render({
          inputs: this.state.inputs
        })}
      </div>
    )
  }
}

export default User