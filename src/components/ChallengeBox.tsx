import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css';

export default function ChallengeBox() {
	const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

	return (
		<div className={styles.challengeBoxContainer}>
			{activeChallenge ? (
				<div className={styles.challengeActive}>
					<header>Ganhe {activeChallenge.amount}xp</header>
					<main>
						<img
							src={`icons/${activeChallenge.type}.svg`}
							alt='Desafio'
						/>
						<strong>Novo desafio</strong>
						<p>{activeChallenge.description}</p>
					</main>
					<footer>
						<button
							type='button'
							className={styles.challengeFaildButton}
							onClick={resetChallenge}
						>
							Falhei
						</button>
						<button
							className={styles.challengeSucceededButton}
							type='button'
						>
							Completei
						</button>
					</footer>
				</div>
			) : (
				<div className={styles.challengeNotActive}>
					<strong>Finaliza um ciclo para receber um desafio</strong>
					<p>
						<img src='icons/level-up.svg' alt='Level Up' />
						Avance de level completando desafios
					</p>
				</div>
			)}
		</div>
	);
}
