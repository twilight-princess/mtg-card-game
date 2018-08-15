import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCard, addToDeck } from '../redux'
import User from './User'
import { withRouter } from 'react-router-dom'


class SearchCards extends Component {
    constructor() {
        super()
        this.types = [  
            "Artifact",
            "Conspiracy",
            "Creature",
            "Enchantment",
            "Instant",
            "Land",
            "Phenomenon",
            "Plane",
            "Planeswalker",
            "Scheme",
            "Sorcery",
            "Tribal",
            "Vanguard"
          ]
        this.state = { name: '', colors: '', cardType: '', showLogin: false }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.showLogin = this.showLogin.bind(this)
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit(e) {
        alert('Your favorite flavor is: ' + this.state.colors);
        e.preventDefault();
    }
    showLogin() {
        this.setState({showLogin: true})
    }
    render() {
        return (
            <div id="cardSearch">
                <form>
                <label>Color:</label>
                    <select name="colors" value={this.state.colors} onChange={this.handleChange}>
                        <option value="">Any</option>
                        <option value="White">White</option>
                        <option value="Black">Black</option>
                        <option value="Blue">Blue</option>
                        <option value="Red">Red</option>
                        <option value="Green">Green</option>
                    </select>
                    <label>Type:</label>
                    <select name="cardType" value={this.state.cardType} onChange={this.handleChange}>
                        <option value="">Any</option>
                        {this.types.map((type, i) => <option key={type + i} value={type}>{type}</option>)}
                    </select>
                    <br />
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                </form>
                <button id="find-card-button" onClick={getCard({name: "name", value: this.state.name}, {name:"colors", value:this.state.colors}, {name:"type", value: this.state.cardType})}>Generate Card</button>
                <br />
                {this.props.loggedIn ? <button id="deck-button" onClick={addToDeck(this.props.foundCard, this.props.deckId)}>I want it!</button> : (this.state.showLogin) ? <User /> : <h4>Please <a onClick={this.showLogin}>login</a> to create decks and play!</h4>}
            </div>
        )
    }
}



const mapDispatchToProps = dispatch => {
    return {
        getCard: search => {
            dispatch(getCard(search))
        },
        addToDeck: () => {
            dispatch(addToDeck)
        } 
    }
}

export default withRouter(connect(prevState => prevState, mapDispatchToProps)(SearchCards))