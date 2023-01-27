import React, { FC } from 'react'

import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

// import useCachedResources from './app/hooks/useCachedResources'
import useColorScheme from './app/hooks/useColorScheme'
import Navigation from './app/navigation'

export default function App() {
	const colorScheme = useColorScheme()

	return (
		<SafeAreaProvider>
			<Navigation colorScheme={colorScheme} />

			<StatusBar />
		</SafeAreaProvider>
	)
}
