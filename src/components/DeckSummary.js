import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/Deck.css'
import { Link, withRouter } from 'react-router-dom'
import Deck from './Deck'

const mapStateToProps = state => {
    return { user: state.user, loggedIn: state.loggedIn }
}

const landCount = (count, curr) => {
    if (curr.types.includes("Land"))
        count++
    return count
}

class DeckSummary extends Component {

    render() {
        return (
            <div className="deckSummary">
            {this.props.loggedIn ?
                <div><h2>{this.props.deck.name}</h2>
                    <span><h3>Click <Link to='/deck' props={this.props.deck}>Here</Link> to add cards!</h3></span>
                    <span>{this.props.deck.cards.length} Cards</span> - <span>{this.props.deck.cards.reduce(landCount, 0)} Lands</span>

                </div>
                : <p>Please <Link to='/'>login</Link> to view a deck!</p>
            }
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(DeckSummary))
