import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { settingsReducer } from './settings/settings.slice'
import { themeReducer } from './theme/theme.slice'

export const store = configureStore({
	reducer: {
		settings: settingsReducer,
		theme: themeReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
