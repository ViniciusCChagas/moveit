import { createContext, ReactNode, useState } from 'react';
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

	function levelUp() {
		setLevel(level + 1);
	}

	function startNewChallenge() {
		const randoChallengeindex = Math.floor(
			Math.random() * challenges.length
		);

		const challenge = challenges[randoChallengeindex];
		setActiveChallenge(challenge);
	}

	function resetChallenge() {
		setActiveChallenge(null);
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
			}}
		>
			{children}
		</ChallengesContext.Provider>
	);
}
