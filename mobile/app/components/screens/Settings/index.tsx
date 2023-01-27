import React, { FC } from 'react'

import { StyleSheet, View, Text } from 'react-native'

export const Settings: FC = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Main Screen</Text>
		</View>
	)
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
