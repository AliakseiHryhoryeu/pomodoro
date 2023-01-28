import React, { FC, useState } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'

// import { useTypedSelector } from 'app/hooks/useTypedSelector'
// import { RootState } from 'app/store'
// import { useActions } from 'app/hooks/useActions'

export const Durations: FC = () => {
	const [pomodoroTime, setPomodoroTime] = useState('111111111111111')
	// const { pomodoroTime, breakTime, longBreak } = useTypedSelector(
	// 	(state: RootState) => {
	// 		return {
	// 			pomodoroTime: state.settings.durations.pomodoroTime,
	// 			breakTime: state.settings.durations.breakTime,
	// 			longBreak: state.settings.durations.longTime,
	// 		}
	// 	}
	// )

	// const allActions = useActions()
	// const handleInputChange = (text: string) => {
	// 	if (/^\d+$/.test(text)) {
	// 		setPomodoroTime(text)
	// 	}
	// }

	return (
		<View style={styled.block}>
			<Text style={styled.title}>Durations</Text>
			<View style={styled.wrapper}>
				<View style={styled.durations}>
					<View style={styled.durationsBlock}>
						<TextInput
							keyboardType='number-pad'
							style={styled.input}
							// value={pomodoroTime}
							value={'1'}
							placeholder={pomodoroTime}
							onChange={
								e => {}
								// allActions.changeBreakTime({
								// 	newShortTime: Number(e.target.value),
								// })
							}
						/>

						<Text style={styled.durationsTitle}>Pomodoro</Text>
					</View>
					<View style={styled.durationsBlock}>
						<TextInput
							style={styled.input}
							keyboardType='number-pad'
							// value={breakTime}
							value={'111'}
							onChange={
								e => {}
								// allActions.changeBreakTime({
								// 	newShortTime: Number(e.target.value),
								// })
							}
						/>
						<Text style={styled.durationsTitle}>Break</Text>
					</View>
					<View style={styled.durationsBlock}>
						<TextInput
							style={styled.input}
							keyboardType='number-pad'
							// value={longBreak}
							value={'11'}
							onChange={
								e => {}
								// allActions.changeLongTime({
								// 	newLongTime: Number(e.target.value),
								// })
							}
						/>
						<Text style={styled.durationsTitle}>Long break</Text>
					</View>
				</View>
			</View>
		</View>
	)
}

const styled = StyleSheet.create({
	block: {},
	wrapper: {},
	title: {},
	durations: {},
	durationsBlock: {},
	durationsTitle: {},
	input: {},
})
