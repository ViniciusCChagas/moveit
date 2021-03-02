import { faCheck, faPlay, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
	const { time, maxTime, minutes, seconds, hasFinished, isActive, resetCountdown, startCountdown } = useContext(
		CountdownContext
	);

	const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
	const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

	const timeLeft = maxTime - time;
	const percentOfMaxTime = (100 / maxTime) * timeLeft;

	return (
		<div>
			<div className={styles.countdownContainer}>
				<div>
					<span>{minuteLeft}</span>
					<span>{minuteRight}</span>
				</div>
				<span>:</span>
				<div>
					<span>{secondsLeft}</span>
					<span>{secondsRight}</span>
				</div>
			</div>

			<div className={styles.countdownButtonContainer}>
				{hasFinished ? (
					<button className={styles.countdownButton} disabled>
						Ciclo encerrado
						<FontAwesomeIcon icon={faCheck} />
					</button>
				) : (
					<>
						{isActive ? (
							<>
								<button
									type='button'
									className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
									onClick={resetCountdown}
								>
									Abandonar ciclo
									<FontAwesomeIcon icon={faTimes} />
								</button>
								<div className={styles.progressButtonContainer}>
									<div style={{ width: `${percentOfMaxTime}%` }}></div>
								</div>
							</>
						) : (
							<button type='button' className={styles.countdownButton} onClick={startCountdown}>
								Iniciar um ciclo
								<FontAwesomeIcon icon={faPlay} />
							</button>
						)}
					</>
				)}
			</div>
		</div>
	);
}
