import React from 'react'
import ReactDOM from 'react-dom/client'

import { QueryClientProvider } from '@tanstack/react-query'

import { App } from '@components/App'
import ReduxProvider from '@providers/ReduxProvider'
import { ThemeProvider } from '@providers/ThemeProvider'

import './i18n'
import { queryClient } from './query'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ThemeProvider>
				<ReduxProvider>
					<App />
				</ReduxProvider>
			</ThemeProvider>
		</QueryClientProvider>
	</React.StrictMode>
)
