import React, { FC } from 'react'
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native'

let ScreenHeight = Dimensions.get('window').height
let ScreenWidht = Dimensions.get('window').width

interface ILayout {
	children: React.ReactNode
	isScrollView?: boolean
}

export const Layout: FC<ILayout> = ({ children, isScrollView = true }) => {
	return (
		<View style={styles.layout}>
			{isScrollView ? <ScrollView>{children}</ScrollView> : children}
		</View>
	)
}

const styles = StyleSheet.create({
	layout: {
		height: ScreenHeight,
		width: ScreenWidht,
		paddingTop: 16,
	},
})
