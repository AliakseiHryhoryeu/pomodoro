import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { SettingsIcon } from './img/SettionsIcon'
import { Tomato } from './img/Tomato'

import { ToggleTheme } from './ToggleTheme'
import { RootState } from '../../../store'

import { colors } from '../../../constants/Colors.ts'

export const Header: FC = () => {
	const { navigate } = useNavigation()
	const theme = useSelector((state: RootState) => state.theme.theme)

	const currentStyles = theme === 'dark' ? darkStyles : lightStyles

	return (
		<View style={currentStyles.header}>
			<TouchableOpacity style={currentStyles.logo}>
				<Tomato />
				<Text style={currentStyles.title}>Pomodoro</Text>
			</TouchableOpacity>

			<View style={currentStyles.nav}>
				<View style={currentStyles.theme}>
					<ToggleTheme />
				</View>

				<TouchableOpacity
					onPress={() => {
						navigate('Settings')
					}}
				>
					<SettingsIcon />
				</TouchableOpacity>
			</View>
		</View>
	)
}

const lightStyles = StyleSheet.create({
	header: {
		paddingTop: 34,
		paddingBottom: 12,
		paddingHorizontal: 4,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: colors.light.backgroundWhite,
	},
	logo: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: '600',
		color: colors.light.fontColor, // Light text color
	},
	nav: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	theme: {
		paddingRight: 8,
	},
})

const darkStyles = StyleSheet.create({
	header: {
		paddingTop: 34,
		paddingBottom: 12,
		paddingHorizontal: 4,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: colors.dark.backgroundWhite,
	},
	logo: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: '600',
		color: colors.dark.fontColor,
	},
	nav: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	theme: {
		paddingRight: 8,
	},
})
