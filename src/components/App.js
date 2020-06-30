import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Pokemon from './pokemon';
import Welcome from './welcome';
import Home from './home';
import GlobalStyle from '../styles/global.js';

function App() {
	const [start, setStart] = useState(false)
	setTimeout(() => {
		setStart(true)
	},1500)
	
	return (
			<Router>
				<Switch>
					<Route exact path="/">
						{start ? <Home /> : <Welcome/>}
					</Route>
					<Route exact path="/pokemon/:id">
						<Pokemon />
					</Route>
				</Switch>
				<GlobalStyle />
			</Router>
	);
}

export default App;
