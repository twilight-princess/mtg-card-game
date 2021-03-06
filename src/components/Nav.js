import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { logout } from '../redux'
import '../styles/Nav.css'

class Nav extends Component {
  state = { loading: true, loggedIn: false, currentUser: ''}

  async componentDidMount() {
    this.setState = {loading: false, currentUser: this.props.currentUser, loggedIn: this.props.loggedIn}
  }

  render() {
    // const displayName = this.props.currentUser.username.replace(/\b/).toUpperCase() + this.props.currentUser.username.replace(/\B/).toLowerCase()
    return (
          <ul>
            <li><Link to="/"><b>Home</b></Link></li>
            {/* <li><Link to="/card">Search Cards</Link></li> */}
            <li></li>
            <li><Link to="/decks"><b>{this.props.currentUser.username}</b></Link></li>
            <li>{this.props.loggedIn ? <a onClick={logout()}><b>Logout</b></a> : <Link to="/"><b>Login</b></Link>}</li>
          </ul>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(logout)
    }
  }
}

export default withRouter(connect(prevState => prevState, mapDispatchToProps)(Nav))