import React, { FC } from 'react'

import { StyleSheet, View, Text } from 'react-native'
import { SettingsUI } from '../../ui/'
export const Settings: FC = () => {
	return <SettingsUI />
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
})
