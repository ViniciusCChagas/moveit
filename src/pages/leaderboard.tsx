import styles from '../styles/pages/Leaderboard.module.css';
import NavBar from '../components/NavBar';

import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../contexts/AppContext';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';

export default function Leaderboard() {
	const [leaderboard, setLaderboard] = useState([]);
	const { changePage } = useContext(AppContext);

	useEffect(() => {
		axios.get('/api/leaderboard').then((response) => {
			setLaderboard(response.data);
			console.log(leaderboard);
		});

		changePage('leaderboard');
	}, []);

	return (
		<div className={styles.pageContainer}>
			<Head>
				<title>Leaderboard | move.it</title>
			</Head>
			<NavBar />
			<div className={styles.appContainer}>
				<header>
					<h1>Leaderboard</h1>
				</header>
				<div className={styles.leaderboardTable}>
					<ul className={styles.leaderboardTableBody}>
						<li className={styles.leaderboardTableHeader}>
							<div className={styles.positionContainer} style={{ background: 'transparent' }}>
								<span>POSIÇÃO</span>
							</div>

							<div className={styles.dataContainer} style={{ background: 'transparent' }}>
								<span className={styles.userInfo}>
									<p style={{ paddingLeft: '1rem' }}>USUÁRIO</p>
								</span>
								<span>
									<p>DESAFIOS</p>
								</span>
								<span>
									<p>EXPERIÊNCIA</p>
								</span>
							</div>
						</li>
						{leaderboard.length ? (
							leaderboard.map((user, index) => {
								return (
									<li key={user._id}>
										<div className={styles.positionContainer}>{index + 1}º</div>
										<div className={styles.dataContainer}>
											<div className={styles.userInfo}>
												<img
													src={`https://github.com/${user.login}.png`}
													alt={`${user.login}`}
												/>
												<div>
													<strong>{user.name}</strong>
													<span>
														<img src='/icons/level.svg' alt='' />
														Level {user.level}
													</span>
												</div>
											</div>
											<div className={styles.challengesCompleted}>
												<span>{user.challengesCompleted}</span>
												completados
											</div>
											<div className={styles.currentExperience}>
												<span>{user.experience}</span>
												xp
											</div>
										</div>
									</li>
								);
							})
						) : (
							<li className={styles.loadingIcon}>
								<FontAwesomeIcon icon={faSpinner} spin />
							</li>
						)}
					</ul>
					<div className={styles.leaderboardTableFooter}></div>
				</div>
			</div>
		</div>
	);
}
