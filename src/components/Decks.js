import React, { Component } from 'react'
import DeckSummary from './DeckSummary.js'
import '../styles/Deck.css'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { createDeck } from '../redux'

const mapStateToProps = (state) => {
    return { currentUser: state.currentUser, loggedIn: state.loggedIn, decks: state.decks }
  }

class Decks extends Component {
    constructor(props) {
    super(props)
    this.state = { loading: true, loggedIn: false, currentUser: {decks: ''}, decks:''}
    this.handleCreateDeck = this.handleCreateDeck.bind(this)
    this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState({
          [name]: value
        })
    }
    handleCreateDeck(e) {
        console.log(`Created user deck: ${this.state.deckName}`)
        e.preventDefault()
        this.setState(createDeck(this.state.deckName, this.state.deckDescription))
    }

    render() {
        if (this.props.loggedIn && !!this.props.currentUser.decks) { 
            return (
                <div className="decks">
                    <h4>Your Saved Decks</h4>
                    {this.props.currentUser.decks.map((deck, i) => {
                        return <DeckSummary key={deck.name + i} deck={deck} />
                    })}
                </div>
            )
        } else if (this.props.loggedIn) {
            return (
                <div className="createDeck">
                    <h3>You don't have any decks yet. Build one here to begin.</h3>
                    <form>
                        Enter a name for your new deck: 
                        <input placeholder="Required" type="text" name="deckName" value={this.deckName} onChange={this.handleChange} />
                        <br />
                        Enter a description:                     
                        <input placeholder="Optional" type="text" name="deckDescription" value={this.deckDescription} onChange={this.handleChange} />
                        <button onClick={this.handleCreateDeck}>Create</button>
                    </form>
                </div>
            )
        } else {
            return <h3><b>Please <Link to='/'>login</Link> to view decks!</b></h3>
        }
    }
}

export default withRouter(connect(mapStateToProps)(Decks))