import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from 'app/store'

import { ISettingsState } from './settings.types'

const LocalStorageFolder = 'Settings'
const LocalStorage_settings = JSON.parse(
	localStorage.getItem(LocalStorageFolder)
)

const initialState: ISettingsState = {
	durations: {
		pomodoroTime: 25,
		breakTime: 5,
		longTime: 15,
	},
	breaks: {
		short: true,
		long: true,
		pomodoroCounts: 4,
		autoStart: true,
	},
	timer: {
		isActive: false,
		currentTime: 2500,
		currentTimer: 'pomodoro',
	},
	showAlert: true,
}

export const settingsSlice = createSlice({
	name: 'settingsSlice',
	initialState,
	reducers: {
		// ============= //
		// === Timer === //
		// ============= //
		updateCurrentTime: (
			state,
			action: PayloadAction<{ updatedTime: number }>
		) => {
			if (action.payload.updatedTime > 0) {
				state.timer.currentTime = action.payload.updatedTime
			}
			localStorage.setItem(LocalStorageFolder, JSON.stringify(state))
		},
		PauseTimer: (state, action: PayloadAction<{ updatedTime: number }>) => {
			if (action.payload.updatedTime > 0) {
				state.timer.currentTime = action.payload.updatedTime
			}
			localStorage.setItem(LocalStorageFolder, JSON.stringify(state))
		},
		StopTimer: (state, action: PayloadAction<{ updatedTime: number }>) => {
			if (action.payload.updatedTime > 0) {
				state.timer.currentTime = action.payload.updatedTime
			}
			localStorage.setItem(LocalStorageFolder, JSON.stringify(state))
		},
		NextTimer: (state, action: PayloadAction<{ updatedTime: number }>) => {
			if (action.payload.updatedTime > 0) {
				state.timer.currentTime = action.payload.updatedTime
			}
			localStorage.setItem(LocalStorageFolder, JSON.stringify(state))
		},
		BackTimer: (state, action: PayloadAction<{ updatedTime: number }>) => {
			if (action.payload.updatedTime > 0) {
				state.timer.currentTime = action.payload.updatedTime
			}
			localStorage.setItem(LocalStorageFolder, JSON.stringify(state))
		},
		// ================= //
		// === Durations === //
		// ================= //

		changePomodoroTime: (
			state,
			action: PayloadAction<{ newPomodoroTime: number }>
		) => {
			if (action.payload.newPomodoroTime > 0) {
				state.durations.pomodoroTime = action.payload.newPomodoroTime
			}
			localStorage.setItem(LocalStorageFolder, JSON.stringify(state))
		},
		changeBreakTime: (
			state,
			action: PayloadAction<{ newShortTime: number }>
		) => {
			if (action.payload.newShortTime > 0) {
				state.durations.breakTime = action.payload.newShortTime
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
		toggleBreak: (state, action: PayloadAction<{}>) => {
			state.breaks.short = !state.breaks.short
			localStorage.setItem(LocalStorageFolder, JSON.stringify(state))
		},
		toggleLongBreak: (state, action: PayloadAction<{}>) => {
			state.breaks.long = !state.breaks.long
			localStorage.setItem(LocalStorageFolder, JSON.stringify(state))
		},
		toggleAutoStart: (state, action: PayloadAction<{}>) => {
			state.breaks.autoStart = !state.breaks.autoStart
			localStorage.setItem(LocalStorageFolder, JSON.stringify(state))
		},
		changePomodoroCount: (
			state,
			action: PayloadAction<{ newCount: string }>
		) => {
			if (Number(action.payload.newCount) > 0) {
				state.breaks.pomodoroCounts = Number(action.payload.newCount)
			} else {
				state.breaks.pomodoroCounts = 1
			}
			localStorage.setItem(LocalStorageFolder, JSON.stringify(state))
		},
		// ============= //
		// === Alert === //
		// ============= //
		hideAlert: (state, action: PayloadAction<{}>) => {
			state.showAlert = false
		},
	},
})

export default settingsSlice.reducer

export const settingsReducer = settingsSlice.reducer
export const settingsActions = settingsSlice.actions

export const selectCurrentList = (state: RootState) => state.user.activeUser
