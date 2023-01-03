import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IThemeState } from './theme.types'

const LocalStorageFolder = 'Theme'
const getParsed = () => {
	let Parsed: IThemeState = JSON.parse(localStorage.getItem(LocalStorageFolder))
	if (typeof Parsed == undefined || Parsed == null) {
		Parsed = { theme: 'dark' }
	}
	return Parsed
}
const Parsed: IThemeState = getParsed()

const initialState: IThemeState = {
	theme: Parsed.theme || 'light',
}

export const themeSlice = createSlice({
	name: 'themeSlice',
	initialState,
	reducers: {
		toggleTheme: (state, action: PayloadAction<{}>) => {
			if (state.theme == 'dark') {
				state.theme = 'light'
			} else {
				state.theme = 'dark'
			}
			localStorage.setItem(LocalStorageFolder, JSON.stringify(state.theme))
		},
		changeThemeToLight: (state, action: PayloadAction<{}>) => {
			state.theme = 'light'
			localStorage.setItem(LocalStorageFolder, JSON.stringify(state.theme))
		},
		changeThemeToDark: (state, action: PayloadAction<{}>) => {
			state.theme = 'dark'
			localStorage.setItem(LocalStorageFolder, JSON.stringify(state.theme))
		},
	},
})

export const themeReducer = themeSlice.reducer
export const themeActions = themeSlice.actions
