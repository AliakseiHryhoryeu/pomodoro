import React, { FC, useState } from 'react'
import { StyleSheet, View, Text, Switch, TouchableOpacity } from 'react-native'

// import { useTypedSelector } from 'app/hooks/useTypedSelector'
// import { useActions } from 'app/hooks/useActions'
// import { RootState } from 'app/store'

import { SunIcon } from './img/SunIcon'
import { MoonIcon } from './img/MoonIcon'

export const ToggleTheme: FC = props => {
	const [isActive, updateActive] = useState(true)
	const toggleSwitch = () => {
		updateActive(!isActive)
	}
	// const allActions = useActions()
	// const { theme } = useTypedSelector((state: RootState) => {
	// 	return {
	// 		theme: state.theme.theme,
	// 	}
	// })

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
