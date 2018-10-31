import React, {Component} from 'react'
import {getQuote} from '../actions/actions'

class Quote extends Component {
	
	state = {
		quote:getQuote()
	}

	render() {
		return (
			<div>
				<h2>&ldquo;{this.state.quote}&rdquo;</h2>
				<h3><i className='fa fa-rebel'></i></h3>
			</div>
		)
	}
}

export default Quote
