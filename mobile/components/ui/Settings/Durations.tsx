import React, { FC } from 'react'
import { StyleSheet, View, Text, TextInput, Dimensions } from 'react-native'
import { useSelector } from 'react-redux'

import { useActions } from '@/hooks/useActions'
import { RootState } from '@/store'
import { colors } from '@/constants/Colors.ts'

export const Durations: FC = () => {
	const pomodoroTime = useSelector(
		(state: RootState) => state.settings.durations.pomodoroTime
	)
	const breakTime = useSelector(
		(state: RootState) => state.settings.durations.breakTime
	)
	const longBreak = useSelector(
		(state: RootState) => state.settings.durations.longTime
	)

	const theme = useSelector((state: RootState) => state.theme.theme)
	const currentStyles = theme === 'dark' ? darkStyles : lightStyles

	const allActions = useActions()

	return (
		<View style={currentStyles.block}>
			<Text style={currentStyles.title}>Durations</Text>
			<View style={currentStyles.wrapper}>
				<View style={currentStyles.durationsBlock}>
					<TextInput
						keyboardType='numeric'
						style={currentStyles.input}
						value={`${pomodoroTime}`}
						onChangeText={(value) => {
							allActions.changePomodoroTime({
								newPomodoroTime: Number(value),
							})
						}}
					/>

					<Text style={currentStyles.durationsTitle}>Pomodoro</Text>
				</View>
				<View style={currentStyles.durationsBlock}>
					<TextInput
						style={currentStyles.input}
						keyboardType='numeric'
						// value={breakTime}
						value={`${breakTime}`}
						onChangeText={(value) => {
							allActions.changeBreakTime({
								newShortTime: Number(value),
							})
						}}
					/>
					<Text style={currentStyles.durationsTitle}>Break</Text>
				</View>
				<View style={currentStyles.durationsBlock}>
					<TextInput
						style={currentStyles.input}
						keyboardType='numeric'
						// value={longBreak}
						value={`${longBreak}`}
						onChangeText={(value) => {
							allActions.changeLongTime({
								newLongTime: Number(value),
							})
						}}
					/>
					<Text style={currentStyles.durationsTitle}>Long break</Text>
				</View>
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
		color: colors.light.backgroundWhite,
	},
	wrapper: {
		display: 'flex',
		flexDirection: 'row',
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
	durationsBlock: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.light.buttonDark,
		borderRadius: 6,
		height: 90,
		width: 90,
	},
	durationsTitle: {
		fontSize: 16,
		color: colors.light.buttonWhite,
		fontWeight: '700',
	},
	input: {
		color: '#fff',
		fontSize: 34,
		fontWeight: '600',
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
		flexDirection: 'row',
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
	durationsBlock: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.dark.buttonDark,
		borderRadius: 6,
		height: 90,
		width: 90,
	},
	durationsTitle: {
		fontSize: 16,
		color: colors.dark.buttonWhite,
		fontWeight: '700',
	},
	input: {
		color: '#fff',
		fontSize: 34,
		fontWeight: '600',
	},
})
