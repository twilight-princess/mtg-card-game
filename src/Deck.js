import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToDeck } from './redux'
import './Deck.css'
import { withRouter } from 'react-router-dom'
import Card from './Card'

const mapStateToProps = state => {
    return { deck: state.deck }
}

const landCount = (count, curr) => {
    if (curr.types.includes("Land"))
        count++
    return count
}

class Deck extends Component {

    render() {
        // const {card} = this.props.deck
        return (
            <div id="deck">
                <h1>Deck</h1>
                <span>{this.props.deck.length} Cards</span> - <span>{this.props.deck.reduce(landCount, 0)} Lands</span>
                <br />
                <div className="viewOfDeck">
                    {this.props.deck.map((card, i) => {
                        return <Card key={card.name + i} card={card} />
                    })}
                </div>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(Deck))

