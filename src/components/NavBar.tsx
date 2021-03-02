import Link from 'next/link';
import { faCog, faHome, faMedal, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

import Cookies from 'js-cookie';

import styles from '../styles/components/NavBar.module.css';
import { useRouter } from 'next/router';

const NavBar: React.FunctionComponent = () => {
	const { activePage } = useContext(AppContext);
	const router = useRouter();
	function handleSingOut() {
		Cookies.remove('MIUserId');
		router.push('singin');
	}

	return (
		<nav className={styles.navBarContainer}>
			<header>
				<img src='/logo-flat.svg' alt='Logo Move.it' />
			</header>
			<ul>
				<Link href='/'>
					<li {...(activePage === 'index' ? { className: styles.active } : {})}>
						{activePage === 'index' ? <span></span> : null}
						<FontAwesomeIcon icon={faHome} />
					</li>
				</Link>
				<Link href='/leaderboard'>
					<li {...(activePage === 'leaderboard' ? { className: styles.active } : {})}>
						{activePage === 'leaderboard' ? <span></span> : null}
						<FontAwesomeIcon icon={faMedal} />
					</li>
				</Link>
			</ul>
			<footer>
				<ul>
					<li onClick={handleSingOut}>
						<FontAwesomeIcon icon={faSignOutAlt} />
					</li>
				</ul>
			</footer>
		</nav>
	);
};

export default NavBar;
