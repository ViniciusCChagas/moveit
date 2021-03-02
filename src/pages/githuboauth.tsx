import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/pages/GithubOAuth.module.css';

import axios from 'axios';
import { useEffect } from 'react';

import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

export default function GithubOAuth({ oAuthCode }) {
    const router = useRouter();
    
	useEffect(() => {
		handleOAuth();
	}, []);

	async function handleOAuth() {
		try {
			const response = await axios.post('/api/singin', { oAuthCode });
			const userId = response.data.userId;

			Cookies.set('MIUserId', userId);
			router.push('/');
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div className={styles.pageContainer}>
			<img src='/background.svg' alt='background moveit' />
			<div className={styles.leftContainer}>
				<img src='/logo-full-white.svg' alt='Logo moveit' />
				<h1>Quase lá!</h1>
				<p>Estamos nos conectando com o seu Github, por favor aguarde.</p>
				<FontAwesomeIcon icon={faSpinner} spin />
			</div>
		</div>
	);
}

GithubOAuth.getInitialProps = ({ query: { code } }) => {
	return { oAuthCode: code };
};
