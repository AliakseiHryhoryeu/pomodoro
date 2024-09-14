import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import 'react-native-reanimated'
import { Provider } from 'react-redux'

import { useColorScheme } from '@/components/useColorScheme'
import { store } from '@/store'

// Catch any errors thrown by the Layout component.
export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: '/index',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
	const [loaded, error] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
		...FontAwesome.font,
	})

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error
	}, [error])

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync()
		}
	}, [loaded])

	if (!loaded) {
		return null
	}

	return <RootLayoutNav />
}

function RootLayoutNav() {
	const colorScheme = useColorScheme()

	return (
		<Provider store={store}>
			<Stack
				initialRouteName='@/app/index.tsx'
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name='index' options={{ headerShown: false }} />
				<Stack.Screen name='settings' options={{ headerShown: false }} />
			</Stack>
		</Provider>
	)
}
