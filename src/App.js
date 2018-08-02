import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Card from './Card'
import Deck from './Deck'

class App extends Component {
  render() {
    return (
      <div className="App">
        <form>
          <h2> Please enter your username if you have one. </h2>
          <input name="username" type="text" value={this.username} placeholder="Lord of the Cards" />
          <br/>
          <button onClick={this.props.toggleLogin(this.username)}>Login</button>
          <button onClick={this.props.createNewUser(this.username)}>Create</button>
        </form>
      </div>
    );
  }
}

export default App;
