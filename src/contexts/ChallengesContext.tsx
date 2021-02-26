import { createContext, ReactNode, useEffect, useState } from 'react';
import challenges from '../../challenges.json';

export const ChallengesContext = createContext({} as ChallengesContextData);

interface ChallengesProviderProps {
	children: ReactNode;
}

interface ChallengesContextData {
	level: number;
	currrentExperience: number;
	challengesCompleted: number;
	experienceToNextLevel: number;
	activeChallenge: Challenge;
	levelUp: () => void;
	startNewChallenge: () => void;
	resetChallenge: () => void;
	completeChallenge: () => void;
}

interface Challenge {
	type: 'body' | 'eye';
	description: string;
	amount: number;
}

export function ChallengesProvider({ children }: ChallengesProviderProps) {
	const [level, setLevel] = useState(1);
	const [currrentExperience, setCurrrentExperience] = useState(0);
	const [challengesCompleted, setChallengesCompleted] = useState(0);
	const [activeChallenge, setActiveChallenge] = useState(null);

	const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

	useEffect(() => {
		Notification.requestPermission();
	}, []);

	function levelUp() {
		setLevel(level + 1);
	}

	function startNewChallenge() {
		const randoChallengeindex = Math.floor(
			Math.random() * challenges.length
		);

		const challenge = challenges[randoChallengeindex];
		setActiveChallenge(challenge);

		new Audio('/notification.mp3').play();

		if (Notification.permission === 'granted') {
			new Notification('Novo desafio!', {
				body: `Valendo ${challenge.amount}xp!`,
			});
		}
	}

	function resetChallenge() {
		setActiveChallenge(null);
	}

	function completeChallenge() {
		if (!activeChallenge) {
			return;
		}

		const { amount } = activeChallenge;

		let finalExperience = currrentExperience + amount;

		if (finalExperience >= experienceToNextLevel) {
			levelUp();
			finalExperience = finalExperience - experienceToNextLevel;
		}

		setCurrrentExperience(finalExperience);
		setActiveChallenge(null);
		setChallengesCompleted(challengesCompleted + 1);
	}

	return (
		<ChallengesContext.Provider
			value={{
				level,
				levelUp,
				currrentExperience,
				challengesCompleted,
				startNewChallenge,
				activeChallenge,
				resetChallenge,
				experienceToNextLevel,
				completeChallenge,
			}}
		>
			{children}
		</ChallengesContext.Provider>
	);
}
