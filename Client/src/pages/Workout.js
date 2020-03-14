import React from 'react';

import Graph from '../components/Graph';
import Stopwatch from '../components/Stopwatch-v2';
import Stats from '../components/Stats';
import Chart from '../components/Chart';

function Workout() {
	return (
		<div className='content'>
			<main>
				<Graph />
				<Stopwatch />
				<Stats />
				<Chart />
			</main>
		</div>
	);
}

export default Workout;
