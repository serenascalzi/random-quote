import React, {Component} from 'react'
import '../styles/App.css'
import {Provider} from 'react-redux'
import store from '../store'
import Quote from './Quote'

class App extends Component {

	render() {
		return (
			<Provider store={store}>
				<div id='container'>
					<Quote />
				</div>
			</Provider>
		)
	}
}

export default App
