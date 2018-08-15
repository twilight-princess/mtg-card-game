import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveDeckToDB } from '../redux'
import '../styles/Deck.css'
import { Link, withRouter } from 'react-router-dom'
import Card from './Card'
import SearchCards from './SearchCards'

const mapStateToProps = state => {
    return { currentUser: state.currentUser, loggedIn: state.loggedIn, foundCard: state.foundCard }
}

const landCount = (count, curr) => {
    if (curr.types.includes("Land"))
        count++
    return count
}
const creatureCount = (count, curr) => {
    if (curr.types.includes("Creature"))
        count++
    return count
}

class Deck extends Component {

    render() {
        console.log("Props: ", this.props)
        console.log("State: ", this.props.location.state)
        let deck = {}
        if (this.props.loggedIn === true) {
            const deckId = this.props.location.state.deck._id
            deck = this.props.currentUser.decks.filter(deck => deck._id === deckId)[0]
        }
        return (
            <div className="deck">
            {this.props.loggedIn ?
                <div className="searchWithDeck">
                    <div className="searchDetails">
                        <SearchCards deckId={deck._id} />
                    </div>
                    <div className="cardDetails">
                        <div className="cardGrid">
                            <div id="leftInfo">
                            {console.log('finded cards: ', this.props.foundCard)}
                                
                            </div>
                            <Card card={this.props.foundCard} />
                            <div id="rightInfo">{this.props.foundCard.text}</div>
                        </div>
                    </div>
                    <div className="deckDetails">
                        <h1>{deck.name}</h1>
                        <span>{deck.cards.length} Cards</span> -
                        <span>{deck.cards.reduce(landCount, 0)} Lands</span> -
                        <span>{deck.cards.reduce(creatureCount, 0)} Creatures</span>
                        <br />
                        <br />
                        <span><button onClick={saveDeckToDB()}>Save</button></span>

                        <div className="viewOfDeck">
                            {deck.cards.map((card, i) => {
                                return <Card key={card.name + i} card={card} />
                            })}
                        </div>
                    </div>
                </div>
                : <p className="loginNote">Please <Link to='/'>login</Link> to view a deck!</p>
            }
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(Deck))

