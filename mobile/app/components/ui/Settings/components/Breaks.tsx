import React, { FC } from 'react'
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	TouchableOpacity,
} from 'react-native'

// import { useActions } from 'app/hooks/useActions'
// import { useTypedSelector } from 'app/hooks/useTypedSelector'
// import { RootState } from 'app/store'
import { CheckIcon } from './img/CheckIcon'

export const Breaks: FC = props => {
	// const { shortBreak, longBreak, pomodoroCounts, autoStart } = useTypedSelector(
	// 	(state: RootState) => {
	// 		return {
	// 			shortBreak: state.settings.breaks.short,
	// 			longBreak: state.settings.breaks.long,
	// 			autoStart: state.settings.breaks.autoStart,
	// 			pomodoroCounts: state.settings.breaks.pomodoroCounts,
	// 		}
	// 	}
	// )
	// const allActions = useActions()

	return (
		<View style={styled.block}>
			<div style='settings__block-wrapper'>
				<Text style='settings__block-title'>Breaks</Text>
				<TouchableOpacity
					style='settings__break'
					id='settingsBreaks-Break'
					// onClick={() => allActions.toggleBreak({})}
				>
					<div style='settings__break-title'>Break</div>
					{/* {shortBreak && <CheckIcon />} */}
				</TouchableOpacity>
				<TouchableOpacity
					style='settings__break'
					// onClick={() => allActions.toggleLongBreak({})}
				>
					<Text style='settings__break-title'>Long break</Text>
					{/* {longBreak && <CheckIcon />} */}
				</TouchableOpacity>
				<View style='settings__break'>
					<Text style='settings__break-title'>Pomodoro counts</Text>
					<TextInput
						style='settings__break-input'
						id='settingsBreaks-PomodoroCounts'
						type='number'
						value={pomodoroCounts}
						onChange={
							e => {}
							// allActions.changePomodoroCount({ newCount: e.target.value })
						}
					/>
				</View>
				<TouchableOpacity
					style='settings__break'
					// onClick={() => allActions.toggleAutoStart({})}
					id='settingsBreaks-AutoStart'
				>
					<Text style='settings__break-title'>
						Auto start next pomodoro session
					</Text>
					{/* {autoStart && <CheckIcon />} */}
				</TouchableOpacity>
			</div>
		</View>
	)
}

const styled = StyleSheet.create({
	settings: {},
})
