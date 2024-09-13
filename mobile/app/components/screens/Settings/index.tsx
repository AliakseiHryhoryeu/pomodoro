import React, { FC } from 'react'

import { StyleSheet, View, Dimensions } from 'react-native'

import { SettingsHeader, Durations, Breaks, Themes } from '../../ui/Settings/'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { colors } from '../../../constants/Colors'
const { height: SCREEN_HEIGHT } = Dimensions.get('window')

export const Settings: FC = () => {
	const theme = useSelector((state: RootState) => state.theme.theme)
	const currentStyles = theme === 'dark' ? darkStyles : lightStyles

	return (
		<View style={currentStyles.settings}>
			<SettingsHeader />
			<Durations />
			<Breaks />
			<Themes />
		</View>
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
