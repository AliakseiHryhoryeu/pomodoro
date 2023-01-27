import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { settingsReducer } from './settings/settings.slice'
import { themeReducer } from './theme/theme.slice'
import { userReducer } from './user/user.slice'

import { userApi } from './user/user.api'

export const store = configureStore({
	reducer: {
		settings: settingsReducer,
		theme: themeReducer,
		user: userReducer,
		[userApi.reducerPath]: userApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(userApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
