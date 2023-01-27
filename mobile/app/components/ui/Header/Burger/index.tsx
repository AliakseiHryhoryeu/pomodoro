import React, { FC } from 'react'
import { StyleSheet, View, Text } from 'react-native'

// import { useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom'
// import classNames from 'classnames'

// import { useTypedSelector } from '../../../../hooks/useTypedSelector'
// import { useActions } from '../../../../hooks/useActions'
// import { RootState } from '../../../../store'

// import './Burger.scss'

export const Burger: FC = props => {
	// const dispatch = useDispatch()
	// const allActions = useActions()

	// const { isAuth, username, theme } = useTypedSelector((state: RootState) => {
	// 	return {
	// 		username: state.user.activeUser.username,
	// 		isAuth: !state.user.trialMode,
	// 		theme: state.theme.theme,
	// 	}
	// })

	return (
		<View style={styled.burger}>
			<View>
				{/* {!isAuth &&<> ( */}
				<View style={styled.button}>Log in</View>
				<View style={styled.button}>Sign up</View>
				{/*</> )}
				{isAuth && <li>Hi, {username}</li>} */}
			</View>
		</View>
	)
}

const styled = StyleSheet.create({
	burger: {},
	button: {},
})
