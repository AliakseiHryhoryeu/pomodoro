import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from 'app/store'

import { ISettingsState } from './settings.types'

const LocalStorageFolder = 'Settings'
const LocalStorage_settings = JSON.parse(
	localStorage.getItem(LocalStorageFolder)
)

const initialState: ISettingsState = {
	durations: {
		pomodoroCount: 4,
		pomodoroTime: 2500,
		shortTime: 500,
		longTime: 2000,
	},
	breaks: {
		short: true,
		long: true,
		autoStart: true,
	},
	timerTime: 2500,
}

export const settingsSlice = createSlice({
	name: 'settingsSlice',
	initialState,
	reducers: {
		// ================= //
		// === Durations === //
		// ================= //
		changePomodoroCount: (
			state,
			action: PayloadAction<{ newCount: number }>
		) => {
			if (action.payload.newCount > 0) {
				state.durations.pomodoroCount = action.payload.newCount
			}
			localStorage.setItem(LocalStorageFolder, JSON.stringify(state))
		},
		changePomodoroTime: (
			state,
			action: PayloadAction<{ newPomodoroTime: number }>
		) => {
			if (action.payload.newPomodoroTime > 0) {
				state.durations.pomodoroTime = action.payload.newPomodoroTime
			}
			localStorage.setItem(LocalStorageFolder, JSON.stringify(state))
		},
		changeShortTime: (
			state,
			action: PayloadAction<{ newShortTime: number }>
		) => {
			if (action.payload.newShortTime > 0) {
				state.durations.pomodoroTime = action.payload.newShortTime
			}
			localStorage.setItem(LocalStorageFolder, JSON.stringify(state))
		},
		changeLongTime: (state, action: PayloadAction<{ newLongTime: number }>) => {
			if (action.payload.newLongTime > 0) {
				state.durations.longTime = action.payload.newLongTime
			}
			localStorage.setItem(LocalStorageFolder, JSON.stringify(state))
		},

		// ============== //
		// === Breaks === //
		// ============== //
		changeShortBreak: (state, action: PayloadAction<{}>) => {
			state.breaks.short = !state.breaks.short
			localStorage.setItem(LocalStorageFolder, JSON.stringify(state))
		},
		changeLongBreak: (state, action: PayloadAction<{}>) => {
			state.breaks.long = !state.breaks.long
			localStorage.setItem(LocalStorageFolder, JSON.stringify(state))
		},
		changeAutoStart: (state, action: PayloadAction<{}>) => {
			state.breaks.autoStart = !state.breaks.autoStart
			localStorage.setItem(LocalStorageFolder, JSON.stringify(state))
		},
	},
})

export default settingsSlice.reducer

export const settingsReducer = settingsSlice.reducer
export const settingsActions = settingsSlice.actions

export const selectCurrentList = (state: RootState) => state.user.activeUser
