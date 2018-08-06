import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToDeck } from '../redux'
import '../styles/Deck.css'
import { Link, withRouter } from 'react-router-dom'
import Card from './Card'

const mapStateToProps = state => {
    return { user: state.user, loggedIn: state.loggedIn, deck: state.deck }
}

const landCount = (count, curr) => {
    if (curr.types.includes("Land"))
        count++
    return count
}

class Deck extends Component {

    render() {
        return (
            <div className="deck">
            {this.props.loggedIn ?
                <div><h1>{this.props.deck.name}</h1>
                    <span><h3>Click <Link to='/card'>Here</Link> to add cards!</h3></span>
                    <span>{this.props.deck.length} Cards</span> - <span>{this.props.deck.reduce(landCount, 0)} Lands</span>
                    <br />
                    <div className="viewOfDeck">
                        {this.props.deck.map((card, i) => {
                            return <Card key={card.name + i} card={card} />
                        })}
                    </div>
                </div>
                : <p>Please <Link to='/'>login</Link> to view a deck!</p>
            }
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(Deck))

