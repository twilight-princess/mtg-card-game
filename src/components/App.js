import React, { Component } from 'react'
import { Route } from 'react-router'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// import '../styles/App.css'
import User from './User'
import Decks from './Decks'

const mapStateToProps = (state) => {
  return { user: state.user }
}

class App extends Component {
  state = { username: this.props.username, loggedIn: this.props.loggedIn, response: ''}

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err))
  }

  callApi = async () => {
    const response = await fetch('/')
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        {this.props.loggedIn ? 
          <Route path='/decks' render={user => <Decks />} />
          : <User />
        }  
        <p>{this.state.response}</p>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps)(App))