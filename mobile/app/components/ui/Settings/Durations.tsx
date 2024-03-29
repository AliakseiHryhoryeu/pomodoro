import React, { FC, useState } from 'react'
import { StyleSheet, View, Text, TextInput, Dimensions } from 'react-native'

import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { RootState } from '../../../store'
import { useActions } from '../../../hooks/useActions'

export const Durations: FC = () => {
	const { pomodoroTime, breakTime, longBreak } = useTypedSelector(
		(state: RootState) => {
			return {
				pomodoroTime: state.settings.durations.pomodoroTime,
				breakTime: state.settings.durations.breakTime,
				longBreak: state.settings.durations.longTime,
			}
		}
	)
	const allActions = useActions()

	return (
		<View style={styled.block}>
			<Text style={styled.title}>Durations</Text>
			<View style={styled.wrapper}>
				<View style={styled.durationsBlock}>
					<TextInput
						keyboardType='numeric'
						style={styled.input}
						value={`${pomodoroTime}`}
						onChangeText={value => {
							allActions.changePomodoroTime({
								newPomodoroTime: Number(value),
							})
						}}
					/>

					<Text style={styled.durationsTitle}>Pomodoro</Text>
				</View>
				<View style={styled.durationsBlock}>
					<TextInput
						style={styled.input}
						keyboardType='numeric'
						// value={breakTime}
						value={`${breakTime}`}
						onChangeText={value => {
							allActions.changeBreakTime({
								newShortTime: Number(value),
							})
						}}
					/>
					<Text style={styled.durationsTitle}>Break</Text>
				</View>
				<View style={styled.durationsBlock}>
					<TextInput
						style={styled.input}
						keyboardType='numeric'
						// value={longBreak}
						value={`${longBreak}`}
						onChangeText={value => {
							allActions.changeLongTime({
								newLongTime: Number(value),
							})
						}}
					/>
					<Text style={styled.durationsTitle}>Long break</Text>
				</View>
			</View>
		</View>
	)
}

let ScreenWidht = Dimensions.get('window').width

const styled = StyleSheet.create({
	block: {
		paddingTop: 10,
		paddingBottom: 20,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		width: ScreenWidht,
		backgroundColor: '#e6faff',
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
	},
	durationsBlock: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#0083ff',
		borderRadius: 6,
		height: 90,
		width: 90,
	},
	durationsTitle: {
		fontSize: 16,
		color: '#ffffff',
		fontWeight: '700',
	},
	input: {
		color: '#ffffff',
		fontSize: 34,
		fontWeight: '600',
	},
})
