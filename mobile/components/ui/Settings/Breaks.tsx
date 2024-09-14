import React, { FC } from 'react'
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Dimensions,
	Switch,
} from 'react-native'
import { useSelector } from 'react-redux'

import { useActions } from '@/hooks/useActions'
import { RootState } from '@/store'
import { colors } from '@/constants/Colors.ts'

export const Breaks: FC = (props) => {
	const allActions = useActions()

	const shortBreak = useSelector(
		(state: RootState) => state.settings.breaks.short
	)
	const longBreak = useSelector(
		(state: RootState) => state.settings.breaks.long
	)
	const autoStart = useSelector(
		(state: RootState) => state.settings.breaks.autoStart
	)
	const pomodoroCounts = useSelector(
		(state: RootState) => state.settings.breaks.pomodoroCounts
	)

	const theme = useSelector((state: RootState) => state.theme.theme)
	const currentStyles = theme === 'dark' ? darkStyles : lightStyles

	// const currentStyles = theme === 'dark' ? darkStyles : lightStyles

	return (
		<View style={currentStyles.block}>
			<View style={currentStyles.wrapper}>
				<Text style={currentStyles.title}>Breaks</Text>
				<TouchableOpacity
					style={currentStyles.inputBlock}
					onPress={() => {
						allActions.toggleBreak({})
					}}
				>
					<Text style={currentStyles.inputTitle}>Break</Text>
					<Switch
						trackColor={{ false: '#092c3e', true: '#0083ff' }}
						thumbColor={shortBreak ? '#f4f3f4' : '#f4f3f4'}
						ios_backgroundColor='grey'
						style={currentStyles.switch}
						onValueChange={() => {
							allActions.toggleBreak({})
						}}
						value={shortBreak}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={currentStyles.inputBlock}
					onPress={() => {
						allActions.toggleLongBreak({})
					}}
				>
					<Text style={currentStyles.inputTitle}>Long break</Text>
					<Switch
						trackColor={{ false: '#092c3e', true: '#0083ff' }}
						thumbColor={true ? '#f4f3f4' : '#f4f3f4'}
						ios_backgroundColor='grey'
						style={currentStyles.switch}
						onValueChange={() => {
							allActions.toggleLongBreak({})
						}}
						value={longBreak}
					/>
				</TouchableOpacity>
				<View style={currentStyles.inputBlock}>
					<Text style={currentStyles.inputTitle}>Pomodoro counts</Text>
					<TextInput
						keyboardType='numeric'
						style={currentStyles.input}
						value={`${pomodoroCounts}`}
						onChangeText={(e) => {
							allActions.changePomodoroCount({ newCount: e })
						}}
					/>
				</View>
				<TouchableOpacity
					style={currentStyles.inputBlock}
					onPress={() => {
						allActions.toggleAutoStart({})
					}}
				>
					<Text style={currentStyles.inputTitle}>
						Auto start next pomodoro session
					</Text>
					<Switch
						trackColor={{ false: '#092c3e', true: '#0083ff' }}
						thumbColor={autoStart ? '#f4f3f4' : '#f4f3f4'}
						ios_backgroundColor='grey'
						style={currentStyles.switch}
						onValueChange={() => {
							allActions.toggleAutoStart({})
						}}
						value={autoStart}
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
		fontWeight: '600',
		color: colors.light.fontColor,
	},
	break: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.light.backgroundDark,
		borderRadius: 6,
		height: 90,
		width: 90,
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

	input: {
		fontSize: 24,
		paddingVertical: 4,
		paddingHorizontal: 10,
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
		fontWeight: '600',
		color: colors.dark.fontColor,
	},
	break: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.dark.backgroundDark,
		borderRadius: 6,
		height: 90,
		width: 90,
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

	input: {
		fontSize: 24,
		paddingVertical: 4,
		paddingHorizontal: 10,
		color: colors.dark.fontColor,
	},
	switch: {
		transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
	},
})
