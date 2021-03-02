import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ChallengesContext } from './ChallengesContext';

interface CountdownProviderProps {
	children: ReactNode;
}

interface CountdownContextData {
	time: number;
	maxTime: number;
	minutes: number;
	seconds: number;
	hasFinished: boolean;
	isActive: boolean;
	resetCountdown: () => void;
	startCountdown: () => void;
}

export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeOut: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {
	const { startNewChallenge } = useContext(ChallengesContext);

	const [maxTime, setMaxTime] = useState(1 * 60);
	const [time, setTime] = useState(maxTime);
	const [isActive, setIsActive] = useState(false);
	const [hasFinished, setHasFinished] = useState(false);

	const minutes = Math.floor(time / 60);
	const seconds = time % 60;

	function startCountdown() {
		setIsActive(true);
	}

	function resetCountdown() {
		clearTimeout(countdownTimeOut);
		setIsActive(false);
		setTime(maxTime);
		setHasFinished(false);
	}

	useEffect(() => {
		if (isActive && time > 0) {
			countdownTimeOut = setTimeout(() => {
				setTime(time - 1);
			}, 1000);
		} else if (isActive && time === 0) {
			setHasFinished(true);
			setIsActive(false);
			startNewChallenge();
		}
	}, [isActive, time]);

	return (
		<CountdownContext.Provider
			value={{
				time,
				maxTime,
				minutes,
				seconds,
				hasFinished,
				isActive,
				resetCountdown,
				startCountdown,
			}}
		>
			{children}
		</CountdownContext.Provider>
	);
}
