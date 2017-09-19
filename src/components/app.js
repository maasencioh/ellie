import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from '../routes/home';
import History from '../routes/history';
// import Home from 'async!./home';
// import History from 'async!./history';

export default class App extends Component {
	handleRoute = (event) => {
		this.currentUrl = event.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<History path="/history/:user" />
				</Router>
			</div>
		);
	}
}
