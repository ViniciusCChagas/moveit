import { useState } from 'react';
import { ExperienceBar } from './components/ExperienceBar';
import './styles/global.css';

function App() {
	const [currentLevel, setCurrentLevel] = useState(1);
	const [currentExperience, setCurrentExperience] = useState(0);
	const [maxExperience, setMaxExperience] = useState(600);

	function addExperience() {
		let maxExperiencePercent = 100 / maxExperience;
		let randoExp = Math.floor(
			Math.random() * (50 * maxExperiencePercent - 100) + 100
		);

		let experienceAux = currentExperience + randoExp;

		console.log(`Added ${randoExp}xp`);

		if (experienceAux > maxExperience) {
			setCurrentExperience(maxExperience - currentExperience);
			setMaxExperience(maxExperience * 1.5);
			setCurrentLevel(currentLevel + 1);
		} else {
			setCurrentExperience(experienceAux);
		}
	}

	return (
		<div className='container'>
			<ExperienceBar
				currentLevel={currentLevel}
				currentExperience={currentExperience}
				maxExperience={maxExperience}
			/>

			<button
				type='button'
				style={{ marginTop: '50%' }}
				onClick={addExperience}
			>
				Add XP
			</button>
		</div>
	);
}

export default App;
