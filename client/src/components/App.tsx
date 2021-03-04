import React from 'react';
import NavBarHeader from './NavBarHeader';
import Home from './Home';
import Posts from './Posts';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

export default function App() {
	return (
		<>
			<NavBarHeader />
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/posts">
						<Posts />
					</Route>
					{/* <Route exact path={`/posts/${id}`}>
						<p/>
					</Route> */}
				</Switch>
			</Router>
		</>
	);
}
