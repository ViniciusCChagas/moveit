import { AppProvider } from '../contexts/AppContext';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
	return (
		<AppProvider>
			<Component {...pageProps} />
		</AppProvider>
	);
}

export default MyApp;
