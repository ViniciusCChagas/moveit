import { GetServerSideProps } from 'next';

import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import ChallengeBox from '../components/ChallengeBox';

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import NavBar from '../components/NavBar';
import { useContext, useEffect } from 'react';
import { AppContext } from '../contexts/AppContext';
import axios from 'axios';

interface HomeProps {
	MIUserId: string;
}

export default function Home({ MIUserId }: HomeProps) {
	const { changePage } = useContext(AppContext);
	useEffect(() => {
		changePage('index');
	}, []);

	return (
		<ChallengesProvider MIUserId={MIUserId}>
			<div className={styles.pageContainer}>
				<NavBar />
				<div className={styles.appContainer}>
					<Head>
						<title>Inicio | move.it</title>
					</Head>
					<ExperienceBar />
					<CountdownProvider>
						<section>
							<div>
								<Profile />
								<CompletedChallenges />
								<Countdown />
							</div>
							<div>
								<ChallengeBox />
							</div>
						</section>
					</CountdownProvider>
				</div>
			</div>
		</ChallengesProvider>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const MIUserId = ctx.req.cookies.MIUserId ? ctx.req.cookies.MIUserId : '';

	if (MIUserId === '') {
		ctx.res.writeHead(303, { Location: 'singin' });
		ctx.res.end();
	}

	return {
		props: {
			MIUserId,
		},
	};
};
