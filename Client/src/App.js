import React from 'react';
import './css/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Inport Components
import Header from './components/Header';
import Nav from './components/Nav';

// Import Pages
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import ChooseWorkout from './pages/ChooseWorkout';
import Workout from './pages/Workout';
import NotFound from './pages/NotFound';

function App() {
	return (
		<div className='content'>
			<Header />
			<main>
				<BrowserRouter>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/signin' component={SignIn} />
						<Route exact path='/chooseworkout' component={ChooseWorkout} />
						<Route exact path='/workout' component={Workout} />
						<Route component={NotFound} />
					</Switch>
					<Nav />
				</BrowserRouter>
			</main>
		</div>
	);
}

export default App;
