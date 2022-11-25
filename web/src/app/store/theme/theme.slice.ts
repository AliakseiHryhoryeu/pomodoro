import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IThemeState } from './theme.types'

const LocalStorageFolder = 'Theme'
const LocalStorage_theme = JSON.parse(localStorage.getItem(LocalStorageFolder))

const initialState: IThemeState = {
	theme: LocalStorage_theme || 'dark',
}

export const themeSlice = createSlice({
	name: 'themeSlice',
	initialState,
	reducers: {
		changeTheme: (state, action: PayloadAction<{}>) => {
			if (state.theme == 'dark') {
				state.theme = 'white'
			} else {
				state.theme = 'dark'
			}
			localStorage.setItem(LocalStorageFolder, JSON.stringify(state.theme))
		},
	},
})

export const themeReducer = themeSlice.reducer
export const themeActions = themeSlice.actions
