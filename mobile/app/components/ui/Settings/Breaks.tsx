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

import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { RootState } from '../../../store'

export const Breaks: FC = props => {
	const { shortBreak, longBreak, pomodoroCounts, autoStart } = useTypedSelector(
		(state: RootState) => {
			return {
				shortBreak: state.settings.breaks.short,
				longBreak: state.settings.breaks.long,
				autoStart: state.settings.breaks.autoStart,
				pomodoroCounts: state.settings.breaks.pomodoroCounts,
			}
		}
	)
	const allActions = useActions()

	return (
		<View style={styled.block}>
			<View style={styled.wrapper}>
				<Text style={styled.title}>Breaks</Text>
				<TouchableOpacity
					style={styled.inputBlock}
					onPress={() => {
						allActions.toggleBreak({})
					}}
				>
					<Text style={styled.inputTitle}>Break</Text>
					<Switch
						trackColor={{ false: '#092c3e', true: '#0083ff' }}
						thumbColor={shortBreak ? '#f4f3f4' : '#f4f3f4'}
						ios_backgroundColor='grey'
						style={styled.switch}
						onValueChange={() => {
							allActions.toggleBreak({})
						}}
						value={shortBreak}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={styled.inputBlock}
					onPress={() => {
						allActions.toggleLongBreak({})
					}}
				>
					<Text style={styled.inputTitle}>Long break</Text>
					<Switch
						trackColor={{ false: '#092c3e', true: '#0083ff' }}
						thumbColor={true ? '#f4f3f4' : '#f4f3f4'}
						ios_backgroundColor='grey'
						style={styled.switch}
						onValueChange={() => {
							allActions.toggleLongBreak({})
						}}
						value={longBreak}
					/>
				</TouchableOpacity>
				<View style={styled.inputBlock}>
					<Text style={styled.inputTitle}>Pomodoro counts</Text>
					<TextInput
						keyboardType='numeric'
						style={styled.input}
						value={`${pomodoroCounts}`}
						onChangeText={e => {
							allActions.changePomodoroCount({ newCount: e })
						}}
					/>
				</View>
				<TouchableOpacity
					style={styled.inputBlock}
					onPress={() => {
						allActions.toggleAutoStart({})
					}}
				>
					<Text style={styled.inputTitle}>
						Auto start next pomodoro session
					</Text>
					<Switch
						trackColor={{ false: '#092c3e', true: '#0083ff' }}
						thumbColor={autoStart ? '#f4f3f4' : '#f4f3f4'}
						ios_backgroundColor='grey'
						style={styled.switch}
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
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center',
		width: ScreenWidht,
	},
	title: {
		alignSelf: 'center',
		fontSize: 22,
		fontWeight: '600',
	},
	break: {
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
		color: '#000000',
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
	},

	input: {
		fontSize: 24,
		paddingVertical: 4,
		paddingHorizontal: 10,
	},
	switch: {
		transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
	},
})
