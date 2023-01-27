import React, { FC } from 'react'
import { TimerRunIcon } from './icons/TimerRunIcon'
import { TimerPauseIcon } from './icons/TimerPauseIcon'
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	Dimensions,
} from 'react-native'

// import { useActions } from 'app/hooks/useActions'
// import { useTypedSelector } from 'app/hooks/useTypedSelector'
// import { RootState } from 'app/store'
// import './ChangeTime.scss'

export const TimerButton: FC = () => {
	// const { isActive } = useTypedSelector((state: RootState) => {
	// 	return {
	// 		isActive: state.settings.timer.isActive,
	// 	}
	// })
	// const allActions = useActions()
	return (
		<TouchableOpacity style={styled.timer}>
			<TimerRunIcon />
			{/* {isActive && <TimerPauseIcon />}
			{!isActive && <TimerRunIcon />} */}
		</TouchableOpacity>
	)
}

const styled = StyleSheet.create({
	timer: {},
})
