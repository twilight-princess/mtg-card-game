import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, createUser } from '../redux';
import { Redirect, withRouter } from 'react-router-dom';
import LoginBox from './LoginBox';

const mapStateToProps = (state) => {
  return { user: state.user, loggedIn: state.loggedIn }
}

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
    e.preventDefault()
    this.setState(login(this.state.username))
  }
  handleCreateUsername(e) {
    e.preventDefault()
    if(this.state.username === /\W?/) {
      return <p>Please only use letters, numbers, and underscores. No spaces or special characters. :)</p>
    } else {
      this.setState(
        createUser(this.state.username)
      )
    }
    console.log(`Created user: ${this.state.username}`)
  }
  render() {
    if (this.props.loggedIn === true) {
      return <Redirect to="/decks" />
    } 
    return (
      <div className="user">
        {!this.props.loggedIn ?
        <form>
          <LoginBox />
        </form> 
        : <button onClick={this.handleLogout}>Logout</button>
        }
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, {createUser: createUser})(User))