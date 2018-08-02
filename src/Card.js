import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCard, addToDeck } from './redux'
import './Card.css'
import { withRouter } from 'react-router-dom'


class Card extends Component {
	render() {
		//const {name, colors, image, description} = this.props.card
		return (
			<div >
			{(this.props.card) &&
				<div id="card" className="wrapper">
					<h1>{this.props.card.name}</h1>
					<h2>{this.props.card.colors.join(", ")}</h2>
					<img src={this.props.card.image} alt={this.props.card.name} />
					<p>{this.props.card.description}</p>
				</div>
			}
			</div>
		)
	}
}

export default withRouter(connect(prevState => prevState, { getCard, addToDeck })(Card))