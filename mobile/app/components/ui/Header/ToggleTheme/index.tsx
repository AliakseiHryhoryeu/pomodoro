import React, { FC, useState } from 'react'
import { StyleSheet, Switch, TouchableOpacity } from 'react-native'

import { SunIcon } from './img/SunIcon'
import { MoonIcon } from './img/MoonIcon'
import { useActions } from '../../../../hooks/useActions'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store'

export const ToggleTheme: FC = (props) => {
	const { toggleTheme } = useActions()

	const [isActive, updateActive] = useState(true)
	const toggleSwitch = () => {
		updateActive(!isActive)
		toggleTheme({})
	}

	const theme = useSelector((state: RootState) => state.theme.theme)

	return (
		<TouchableOpacity onPress={() => toggleSwitch()} style={styled.toggleTheme}>
			<MoonIcon />
			<Switch
				trackColor={{ false: '#092c3e', true: '#0083ff' }}
				thumbColor={isActive ? '#f4f3f4' : '#f4f3f4'}
				ios_backgroundColor='grey'
				style={styled.switch}
				onValueChange={() => toggleSwitch()}
				value={isActive}
			/>
			<SunIcon />
		</TouchableOpacity>
	)
}

const styled = StyleSheet.create({
	toggleTheme: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	switch: {
		transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
	},
})
