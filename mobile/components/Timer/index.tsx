import { StyleSheet, View } from 'react-native'

import React, { FC, useEffect, useState } from 'react'

import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { RootState } from '../../store'

import './Timer.scss'
import { ChangeTime } from './ChangeTime/intex'
import { TimerButton } from './TimerButton'

export const Timer: FC = props => {
	const { theme } = useTypedSelector((state: RootState) => {
		return {
			theme: state.theme.theme,
		}
	})
	const allActions = useActions()
	useEffect(() => {
		setInterval(() => {
			allActions.updateTime({})
		}, 1000)
	}, [])
	return (
		<View style={styles.timer}>
			<View style={styles.timer}>
				<TimerButton />
				<ChangeTime />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	timer: {
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
		width: '100%',
		overflow: 'hidden',
		flexGrow: 1,
		paddingHorizontal: 20,
		background: '',
	},
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
})
