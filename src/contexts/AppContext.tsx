import { createContext, ReactNode, useState } from 'react';

interface AppProviderProps {
	children: ReactNode;
}

interface AppContextData {
	activePage: string;
	changePage: (page: AppPages) => void;
}

type AppPages = 'index' | 'leaderboard' | 'config';

export const AppContext = createContext({} as AppContextData);

export function AppProvider({ children }: AppProviderProps) {
	const [activePage, setActivePage] = useState('index');

	function changePage(page: AppPages) {
		setActivePage(page);
	}

	return (
		<AppContext.Provider
			value={{
				activePage,
				changePage,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}
