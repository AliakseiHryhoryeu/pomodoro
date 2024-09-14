import React, { FC, useState } from 'react'
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	Dimensions,
	Switch,
} from 'react-native'
import { useSelector } from 'react-redux'

import { colors } from '@/constants/Colors'
import { useActions } from '@/hooks/useActions'
import { RootState } from '@/store'

export const Themes: FC = (props) => {
	const theme = useSelector((state: RootState) => state.theme.theme)
	const currentStyles = theme === 'dark' ? darkStyles : lightStyles

	const [longBreak, toggleLong] = useState(true)

	const allActions = useActions()

	return (
		<View style={currentStyles.block}>
			<View style={currentStyles.wrapper}>
				<Text style={currentStyles.title}>Themes</Text>
				<TouchableOpacity
					style={currentStyles.inputBlock}
					onPress={() => {
						allActions.changeThemeToLight({})
					}}
				>
					<Text style={currentStyles.inputTitle}>Light</Text>
					<Switch
						trackColor={{ false: '#092c3e', true: '#0083ff' }}
						thumbColor={longBreak ? '#f4f3f4' : '#f4f3f4'}
						ios_backgroundColor='grey'
						style={currentStyles.switch}
						onValueChange={() => {
							allActions.changeThemeToLight({})
						}}
						value={theme === 'light' ? true : false}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={currentStyles.inputBlock}
					onPress={() => allActions.changeThemeToDark({})}
				>
					<Text style={currentStyles.inputTitle}>Dark</Text>
					<Switch
						trackColor={{ false: '#092c3e', true: '#0083ff' }}
						thumbColor={longBreak ? '#f4f3f4' : '#f4f3f4'}
						ios_backgroundColor='grey'
						style={currentStyles.switch}
						onValueChange={() => {
							allActions.changeThemeToDark({})
						}}
						value={theme === 'dark' ? true : false}
					/>
				</TouchableOpacity>
			</View>
		</View>
	)
}

let ScreenWidht = Dimensions.get('window').width

const lightStyles = StyleSheet.create({
	block: {
		paddingTop: 10,
		paddingBottom: 20,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		width: ScreenWidht,
		backgroundColor: colors.light.backgroundWhite,
	},
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center',
		width: ScreenWidht,
	},
	title: {
		alignSelf: 'center',
		fontSize: 22,
		color: colors.light.fontColor,
		fontWeight: '600',
	},

	durationsTitle: {
		fontSize: 16,
		color: colors.light.fontColor,
		fontWeight: '700',
	},
	inputBlock: {
		width: ScreenWidht,
		paddingHorizontal: 20,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	inputTitle: {
		fontSize: 20,
		maxWidth: 200,
		paddingVertical: 6,
		color: colors.light.fontColor,
	},

	switch: {
		transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
	},
})

const darkStyles = StyleSheet.create({
	block: {
		paddingTop: 10,
		paddingBottom: 20,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		width: ScreenWidht,
		backgroundColor: colors.dark.backgroundWhite,
	},
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center',
		width: ScreenWidht,
	},
	title: {
		alignSelf: 'center',
		fontSize: 22,
		color: colors.dark.fontColor,
		fontWeight: '600',
	},

	durationsTitle: {
		fontSize: 16,
		color: colors.dark.fontColor,
		fontWeight: '700',
	},
	inputBlock: {
		width: ScreenWidht,
		paddingHorizontal: 20,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	inputTitle: {
		fontSize: 20,
		maxWidth: 200,
		paddingVertical: 6,
		color: colors.dark.fontColor,
	},

	switch: {
		transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
	},
})
