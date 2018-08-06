import React, { Component } from 'react'
import Deck from './Deck.js'
import DeckSummary from './DeckSummary.js'
import '../styles/Deck.css'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { createDeck } from '../redux'

const mapStateToProps = (state) => {
    return { currentUser: state.currentUser, loggedIn: state.loggedIn }
  }

class Decks extends Component {
    constructor(props) {
    super(props)
    this.state = { loading: true, loggedIn: false, currentUser: ''}
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
        if (this.props.loggedIn && this.props.currentUser.decks.length > 0) { 
            return (
                <div className="decks">
                    <h4>Your Saved Decks</h4>
                    <span>Click on a deck to view or edit it or <Link to="/card">here</Link> to check out cards.</span>
                    {this.props.currentUser.decks.map((deck, i) => {
                        return <DeckSummary key={deck.name + i} deck={deck} />
                    })}
                </div>
            )
        } else if (this.props.loggedIn) {
            return (
                <div>
                    <h3>You don't have any decks yet. Build one here to begin.</h3>
                    <form>
                        Enter a name for your new deck: 
                        <input placeholder="Required" type="text" name="deckName" value={this.deckName} onChange={this.handleChange} />
                        Enter a description:                     
                        <input placeholder="Optional" type="text" name="deckDescription" value={this.deckDescription} onChange={this.handleChange} />
                        <button onClick={this.handleCreateDeck}>Create</button>
                    </form>
                </div>
            )
        } else {
            return <h3>Please <Link to='/'>login</Link> to view or build decks!</h3>
        }
    }
}

export default withRouter(connect(mapStateToProps)(Decks))