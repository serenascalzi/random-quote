import React, {Component} from 'react'
import {getQuote} from '../actions/actions'

class Quote extends Component {
	
	state = {
		quote:getQuote()
	}

	render() {
		return (
			<div>
				<p>&ldquo;{this.state.quote}&rdquo; <i className='fa fa-rebel'></i></p>
			</div>
		)
	}
}

export default Quote
