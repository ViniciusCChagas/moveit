import styles from '../styles/pages/SingIn.module.css';

import { useContext, useEffect } from 'react';
import { AppContext } from '../contexts/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { GetServerSideProps } from 'next';

import { useRouter } from 'next/router';
import Head from 'next/head';

interface SingInProps {
	MIUserId: string;
}

export default function SingIn(props: SingInProps) {
	return (
		<div className={styles.pageContainer}>
			<Head>
				<title>SingIn | move.it</title>
			</Head>
			<img src='/background.svg' alt='background moveit' />
			<div className={styles.loginContainer}>
				<img src='/logo-full-white.svg' alt='Logo moveit' />
				<h1>Bem-vindo</h1>
				<div>
					<FontAwesomeIcon icon={faGithub} />
					<p>Faça login utilizando a sua conta Github para começar</p>
				</div>

				<a href='https://github.com/login/oauth/authorize?client_id=ed48f11ae6a09671c6ba'>
					<FontAwesomeIcon icon={faGithubAlt} />
					Entrar com o Github
				</a>
			</div>
		</div>
	);
}
