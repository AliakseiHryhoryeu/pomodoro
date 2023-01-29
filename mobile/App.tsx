import React, { FC } from 'react'

import { StatusBar } from 'expo-status-bar'
import { Provider } from 'react-redux'

import { SafeAreaProvider } from 'react-native-safe-area-context'

// import useCachedResources from './app/hooks/useCachedResources'
import useColorScheme from './app/hooks/useColorScheme'
import Navigation from './app/navigation'
import { store } from './app/store'

export default function App() {
	const colorScheme = useColorScheme()

	return (
		<SafeAreaProvider>
			<Provider store={store}>
				<Navigation colorScheme={colorScheme} />
				<StatusBar />
			</Provider>
		</SafeAreaProvider>
	)
}
