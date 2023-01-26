import React, { FC } from 'react'
import { TimerRunIcon } from './icons/TimerRunIcon'
import { TimerPauseIcon } from './icons/TimerPauseIcon'
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { RootState } from '../../../store'
// import './ChangeTime.scss'
import { StyleSheet, View } from 'react-native'

export const TimerButton: FC = () => {
	const { isActive } = useTypedSelector((state: RootState) => {
		return {
			isActive: state.settings.timer.isActive,
		}
	})
	const allActions = useActions()
	return (
		<View
			style={styles.time}
			onPointerDown={() => {
				allActions.toggleRunTimer({})
			}}
		>
			{isActive && <TimerPauseIcon />}
			{!isActive && <TimerRunIcon />}
		</View>
	)
}

const styles = StyleSheet.create({
	time: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		cursor: 'pointer',
		minHeight: 260,
		maxHeight: 300,
		height: '100%',
		minWidth: 260,
		maxWidth: 300,
		width: '100%',
		marginBottom: 40,
		border: '6 solid #399fff',
		borderRadius: 500,
	},
})
