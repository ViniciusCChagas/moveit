import { createContext, ReactNode, useEffect, useState } from 'react';
import challenges from '../../challenges.json';

import { LevelUpModal } from '../components/LevelUpModal';
import axios from 'axios';

export interface UserProps {
	_id: string;
	githubId: number;
	login: string;
	name: string;
	email: string;
	level: number;
	currentExperience: number;
	challengesCompleted: number;
	createdAt: Date;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

interface ChallengesProviderProps {
	children: ReactNode;
	MIUserId: string;
}

interface ChallengesContextData {
	level: number;
	currentExperience: number;
	challengesCompleted: number;
	experienceToNextLevel: number;
	activeChallenge: Challenge;
	levelUp: () => void;
	startNewChallenge: () => void;
	resetChallenge: () => void;
	completeChallenge: () => void;
	closeLevelUpModal: () => void;
}

interface Challenge {
	type: 'body' | 'eye';
	description: string;
	amount: number;
}

export function ChallengesProvider({ children, MIUserId }: ChallengesProviderProps) {
	const [level, setLevel] = useState(-1);
	const [experience, setExperience] = useState(0);
	const [currentExperience, setCurrentExperience] = useState(-1);
	const [challengesCompleted, setChallengesCompleted] = useState(-1);
	const [activeChallenge, setActiveChallenge] = useState(null);
	const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

	const [serverUser, setServerUser] = useState(null);

	const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

	useEffect(() => {
		axios.get('http://localhost:3000/api/user', { params: { userId: MIUserId } }).then(({ data }) => {
			setLevel(data.level);
			setExperience(data.experience ?? 0);
			setCurrentExperience(data.currentExperience);
			setChallengesCompleted(data.challengesCompleted);
			setServerUser(data);
		});

		Notification.requestPermission();
	}, []);

	useEffect(() => {
		updateUser();
	}, [level, experience, currentExperience, challengesCompleted]);

	function updateUser() {
		if (
			level > -1 &&
			serverUser &&
			(level != serverUser.level ||
				currentExperience != serverUser.currentExperience ||
				challengesCompleted != serverUser.challengesCompleted ||
				experience != serverUser.experience)
		) {
			axios.put('/api/user', {
				id: MIUserId,
				level: level,
				experience: experience,
				currentExperience: currentExperience,
				challengesCompleted: challengesCompleted,
			});
		}
	}

	function levelUp() {
		setLevel(level + 1);
		setIsLevelUpModalOpen(true);
	}

	function startNewChallenge() {
		const randoChallengeindex = Math.floor(Math.random() * challenges.length);

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

		let finalExperience = currentExperience + amount;

		if (finalExperience >= experienceToNextLevel) {
			levelUp();
			finalExperience = finalExperience - experienceToNextLevel;
		}

		setExperience(experience + amount);
		setCurrentExperience(finalExperience);
		setActiveChallenge(null);
		setChallengesCompleted(challengesCompleted + 1);
	}

	function closeLevelUpModal() {
		setIsLevelUpModalOpen(false);
	}

	return (
		<ChallengesContext.Provider
			value={{
				level,
				levelUp,
				currentExperience,
				challengesCompleted,
				startNewChallenge,
				activeChallenge,
				resetChallenge,
				experienceToNextLevel,
				completeChallenge,
				closeLevelUpModal,
			}}
		>
			{children}
			{isLevelUpModalOpen && <LevelUpModal />}
		</ChallengesContext.Provider>
	);
}
