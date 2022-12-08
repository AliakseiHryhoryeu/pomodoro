import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { emptySettingsState } from './settings.types'

import type { RootState } from 'app/store'

import { ISettingsState } from './settings.types'

// Get last settings from Local Storage
const LocalStorageFolder = 'Settings'
const getParsed = () => {
	let Parsed = JSON.parse(localStorage.getItem(LocalStorageFolder))
	if (typeof Parsed == undefined || Parsed == null) {
		Parsed = emptySettingsState
	}
	return Parsed
}
const Parsed: ISettingsState = getParsed()

const initialState: ISettingsState = {
	durations: {
		pomodoroTime: Parsed.durations.pomodoroTime || 25,
		breakTime: Parsed.durations.breakTime || 5,
		longTime: Parsed.durations.longTime || 15,
	},
	breaks: {
		short: Parsed.breaks.short && true,
		long: Parsed.breaks.long && true,
		pomodoroCounts: Parsed.breaks.pomodoroCounts || 4,
		autoStart: Parsed.breaks.autoStart && true,
	},
	timer: {
		isActive: false,
		currentTime: Parsed.durations.pomodoroTime * 60 || 25 * 60,
		currentTimer: 'Pomodoro',
	},
	showAlert: Parsed.showAlert && true,
}

export const settingsSlice = createSlice({
	name: 'settingsSlice',
	initialState,
	reducers: {
		// ============= //
		// === Timer === //
		// ============= //
		changeTimer: (state, action: PayloadAction<{}>) => {
			const currentTimer = state.timer.currentTimer
			if (currentTimer === 'Pomodoro') {
				state.timer.currentTimer = 'Short break'
				state.timer.currentTime = state.durations.breakTime * 60
			} else if (currentTimer === 'Short break') {
				state.timer.currentTimer = 'Long break'
				state.timer.currentTime = state.durations.longTime * 60
			} else {
				state.timer.currentTimer = 'Pomodoro'
				state.timer.currentTime = state.durations.pomodoroTime * 60
			}
			state.timer.isActive = false
			localStorage.setItem(LocalStorageFolder, JSON.stringify(state))
		},

		// updateCurrentTime: (
		// 	state,
		// 	action: PayloadAction<{ updatedTime: number }>
		// ) => {
		// 	if (action.payload.updatedTime > 0) {
		// 		state.timer.currentTime = action.payload.updatedTime
		// 	}
		// 	localStorage.setItem(LocalStorageFolder, JSON.stringify(state))
		// },
		// PauseTimer: (state, action: PayloadAction<{ updatedTime: number }>) => {
		// 	if (action.payload.updatedTime > 0) {
		// 		state.timer.currentTime = action.payload.updatedTime
		// 	}
		// 	localStorage.setItem(LocalStorageFolder, JSON.stringify(state))
		// },
		// StopTimer: (state, action: PayloadAction<{ updatedTime: number }>) => {
		// 	if (action.payload.updatedTime > 0) {
		// 		state.timer.currentTime = action.payload.updatedTime
		// 	}
		// 	localStorage.setItem(LocalStorageFolder, JSON.stringify(state))
		// },
		// NextTimer: (state, action: PayloadAction<{ updatedTime: number }>) => {
		// 	if (action.payload.updatedTime > 0) {
		// 		state.timer.currentTime = action.payload.updatedTime
		// 	}
		// 	localStorage.setItem(LocalStorageFolder, JSON.stringify(state))
		// },
		// BackTimer: (state, action: PayloadAction<{ updatedTime: number }>) => {
		// 	if (action.payload.updatedTime > 0) {
		// 		state.timer.currentTime = action.payload.updatedTime
		// 	}
		// 	localStorage.setItem(LocalStorageFolder, JSON.stringify(state))
		// },
		// ================= //
		// === Durations === //
		// ================= //

		changePomodoroTime: (
			state,
			action: PayloadAction<{ newPomodoroTime: number }>
		) => {
			const currentTimer = state.timer.currentTimer
			if (action.payload.newPomodoroTime > 0) {
				state.durations.pomodoroTime = action.payload.newPomodoroTime
				if (currentTimer === 'Pomodoro') {
					state.timer.currentTime = action.payload.newPomodoroTime * 60
				}
			}
			localStorage.setItem(LocalStorageFolder, JSON.stringify(state))
		},
		changeBreakTime: (
			state,
			action: PayloadAction<{ newShortTime: number }>
		) => {
			const currentTimer = state.timer.currentTimer
			if (action.payload.newShortTime > 0) {
				state.durations.breakTime = action.payload.newShortTime
				if (currentTimer === 'Short break') {
					state.timer.currentTime = action.payload.newShortTime * 60
				}
			}
			localStorage.setItem(LocalStorageFolder, JSON.stringify(state))
		},
		changeLongTime: (state, action: PayloadAction<{ newLongTime: number }>) => {
			const currentTimer = state.timer.currentTimer
			if (action.payload.newLongTime > 0) {
				state.durations.longTime = action.payload.newLongTime
				if (currentTimer === 'Long break') {
					state.timer.currentTime = action.payload.newLongTime * 60
				}
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
			localStorage.setItem(LocalStorageFolder, JSON.stringify(state))
		},
	},
})

export default settingsSlice.reducer

export const settingsReducer = settingsSlice.reducer
export const settingsActions = settingsSlice.actions

export const selectCurrentList = (state: RootState) => state.user.activeUser
