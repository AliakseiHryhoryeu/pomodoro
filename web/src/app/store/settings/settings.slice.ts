import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ISettingsState, emptySettingsState } from './settings.types'
import btnSound from 'assets/audio/btnSound.mp3'
import btnSound2 from 'assets/audio/btnSound-2.mp3'
import endPomodoroSound from 'assets/audio/endPomodoro.mp3'

import type { RootState } from 'app/store'

// Get last settings from Local Storage
const LocalStorageFolder = 'Settings'
const getParsed = () => {
	let Parsed: ISettingsState = JSON.parse(
		localStorage.getItem(LocalStorageFolder)
	)
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
		currentPomodoroCount: 1,
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
			const audio = new Audio(btnSound)
			audio.play()

			if (state.timer.currentTimer === 'Pomodoro') {
				if (state.breaks.short) {
					state.timer.currentTimer = 'Short break'
					state.timer.currentTime = state.durations.breakTime * 60
				} else if (state.breaks.long) {
					state.timer.currentTimer = 'Long break'
					state.timer.currentTime = state.durations.longTime * 60
				} else {
					state.timer.currentTimer = 'Pomodoro'
					state.timer.currentTime = state.durations.pomodoroTime * 60
				}
			} else if (state.timer.currentTimer === 'Short break') {
				if (state.breaks.long) {
					state.timer.currentTimer = 'Long break'
					state.timer.currentTime = state.durations.longTime * 60
				} else {
					state.timer.currentTimer = 'Pomodoro'
					state.timer.currentTime = state.durations.pomodoroTime * 60
				}
			} else {
				state.timer.currentTimer = 'Pomodoro'
				state.timer.currentTime = state.durations.pomodoroTime * 60
			}
			state.timer.isActive = false
			localStorage.setItem(LocalStorageFolder, JSON.stringify(state))
		},
		updateTime: (state, action: PayloadAction<{}>) => {
			if (state.timer.isActive) {
				state.timer.currentTime -= 1
			}
			if (state.timer.currentTime <= 0) {
				const endBreakAudio = new Audio(btnSound2)
				const endPomodoroAudio = new Audio(endPomodoroSound)

				switch (state.timer.currentTimer) {
					case 'Pomodoro':
						state.timer.currentPomodoroCount++
						endPomodoroAudio.play()

						if (state.breaks.short) {
							state.timer.currentTimer = 'Short break'
							state.timer.currentTime = state.durations.breakTime * 60
						} else if (state.breaks.long) {
							state.timer.currentTimer = 'Long break'
							state.timer.currentTime = state.durations.longTime * 60
						} else {
							state.timer.currentTimer = 'Pomodoro'
							state.timer.currentTime = state.durations.pomodoroTime * 60
						}
						break
					case 'Short break':
						endBreakAudio.play()

						if (
							state.timer.currentPomodoroCount >= state.breaks.pomodoroCounts
						) {
							if (state.breaks.long) {
								state.timer.currentTimer = 'Long break'
								state.timer.currentTime = state.durations.longTime * 60
							} else {
								state.timer.currentTimer = 'Pomodoro'
								state.timer.currentTime = state.durations.pomodoroTime * 60
							}
						} else {
							state.timer.currentTimer = 'Pomodoro'
							state.timer.currentTime = state.durations.pomodoroTime * 60
						}
						break
					case 'Long break':
						endBreakAudio.play()
						state.timer.currentTimer = 'Pomodoro'
						state.timer.currentTime = state.durations.pomodoroTime * 60
						state.timer.currentPomodoroCount = 1
						if (state.breaks.autoStart === false) {
							state.timer.isActive = false
						}
						break
					default:
						break
				}
			}

			localStorage.setItem(LocalStorageFolder, JSON.stringify(state))
		},

		toggleRunTimer: (state, action: PayloadAction<{}>) => {
			const audio = new Audio(btnSound2)
			audio.play()

			state.timer.isActive = !state.timer.isActive
			localStorage.setItem(LocalStorageFolder, JSON.stringify(state))
		},

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
