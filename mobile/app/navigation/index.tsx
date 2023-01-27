import React from 'react'
import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ColorSchemeName, Pressable } from 'react-native'

import { RootStackParamList } from '../../types'
import LinkingConfiguration from './LinkingConfiguration'
import { Main, Settings, NotFoundScreen } from '../components/screens'

export default function Navigation({
	colorScheme,
}: {
	colorScheme: ColorSchemeName
}) {
	return (
		<NavigationContainer
			linking={LinkingConfiguration}
			theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
		>
			<RootNavigator />
		</NavigationContainer>
	)
}

const Stack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Root'
				component={Main}
				options={{ headerShown: false }}
			/>

			<Stack.Group screenOptions={{ presentation: 'modal' }}>
				<Stack.Screen name='Settings' component={Settings} />
			</Stack.Group>
			<Stack.Screen
				name='NotFound'
				component={NotFoundScreen}
				options={{ title: 'Oops!' }}
			/>
		</Stack.Navigator>
	)
}

/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started

 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal

 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 * 
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
