import React, { FC } from 'react'
import { TimerRunIcon } from './img/TimerRunIcon'
import { TimerPauseIcon } from './img/TimerPauseIcon'
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
	timer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: 300,
		width: 300,
		marginBottom: 20,
		borderWidth: 6,
		borderRadius: 500,
		borderStyle: 'solid',
		borderColor: '#399fff',
	},
})
