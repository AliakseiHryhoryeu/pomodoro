import { StyleSheet, View, Dimensions } from 'react-native'

import {
	SettingsHeader,
	Durations,
	Breaks,
	Themes,
} from '@/components/ui/Settings'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { colors } from '@/constants/Colors'
import { Stack } from 'expo-router'
const { height: SCREEN_HEIGHT } = Dimensions.get('window')

export default function settings() {
	const theme = useSelector((state: RootState) => state.theme.theme)
	const currentStyles = theme === 'dark' ? darkStyles : lightStyles

	return (
		<>
			<Stack.Screen options={{ title: 'Oops!' }} />
			<View style={currentStyles.settings}>
				<SettingsHeader />
				<Durations />
				<Breaks />
				<Themes />
			</View>
		</>
	)
}

let ScreenHeight = Dimensions.get('window').height

const lightStyles = StyleSheet.create({
	settings: {
		minHeight: ScreenHeight,
		backgroundColor: colors.light.backgroundWhite,
		height: SCREEN_HEIGHT,
	},
})

const darkStyles = StyleSheet.create({
	settings: {
		minHeight: ScreenHeight,
		backgroundColor: colors.dark.backgroundWhite,
		height: SCREEN_HEIGHT,
	},
})
