import { ISettingsState, emptySettingsState } from './settings.types'
import btnSound from '../../audio/btnSound.mp3'
import btnSound2 from '../../audio/btnSound-2.mp3'
import endPomodoroSound from '../../audio/endPomodoro.mp3'
import { getStorageData } from './settings.storage'
import { updateStorageData } from './settings.storage'
import { getThemeState } from '../theme/theme.state'

let state: ISettingsState = {
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
		currentPomodoroCount: 1,
		currentTime: 25 * 60,
		currentTimer: 'Pomodoro',
	},
	showAlert: false,
}

async function updateState() {
	await getStorageData().then(data => {
		if (data.Settings !== undefined && data.Settings !== null) {
			const newState: ISettingsState = {
				durations: {
					pomodoroTime: data.Settings.durations.pomodoroTime || 25,
					breakTime: data.Settings.durations.breakTime || 5,
					longTime: data.Settings.durations.longTime || 15,
				},
				breaks: {
					short: data.Settings.breaks.short && true,
					long: data.Settings.breaks.long && true,
					pomodoroCounts: data.Settings.breaks.pomodoroCounts || 4,
					autoStart: data.Settings.breaks.autoStart && true,
				},
				timer: {
					isActive: false,
					currentPomodoroCount: 1,
					currentTime: data.Settings.durations.pomodoroTime * 60 || 25 * 60,
					currentTimer: 'Pomodoro',
				},
				showAlert: data.Settings.showAlert && false,
			}
			state = newState
		}
		updateTimerChangeBtn()
		updateSettingsPopup()
	})
}
updateState()

// // ============= //
// // === Timer === //
// // ============= //
export const changeTimer = () => {
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
	updateStorageData()
	updateTimerChangeBtn()
}

export const updateTime = () => {
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

				if (state.timer.currentPomodoroCount >= state.breaks.pomodoroCounts) {
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
	updateStorageData()
	updateTimerChangeBtn()
	updateTimerButton()
}

export const toggleRunTimer = () => {
	const audio = new Audio(btnSound2)
	audio.play()

	state.timer.isActive = !state.timer.isActive
	updateStorageData()
	updateTimerButton()
}

// // ================= //
// // === Durations === //
// // ================= //
export const changePomodoroTime = (newPomodoroTime: number) => {
	const currentTimer = state.timer.currentTimer
	if (newPomodoroTime > 0) {
		state.durations.pomodoroTime = newPomodoroTime
		if (currentTimer === 'Pomodoro') {
			state.timer.currentTime = newPomodoroTime * 60
		}
	}
	updateStorageData()
	updateTimerChangeBtn()
}
export const changeBreakTime = (newShortTime: number) => {
	const currentTimer = state.timer.currentTimer
	if (newShortTime > 0) {
		state.durations.breakTime = newShortTime
		if (currentTimer === 'Short break') {
			state.timer.currentTime = newShortTime * 60
		}
	}
	updateStorageData()
	updateTimerChangeBtn()
}
export const changeLongTime = (newLongTime: number) => {
	const currentTimer = state.timer.currentTimer
	if (newLongTime > 0) {
		state.durations.longTime = newLongTime
		if (currentTimer === 'Long break') {
			state.timer.currentTime = newLongTime * 60
		}
	}
	updateStorageData()
	updateTimerChangeBtn()
}

// // ============== //
// // === Breaks === //
// // ============== //
export const toggleBreak = () => {
	state.breaks.short = !state.breaks.short
	updateStorageData()
}
export const toggleLongBreak = () => {
	state.breaks.long = !state.breaks.long
	updateStorageData()
}
export const toggleAutoStart = () => {
	state.breaks.autoStart = !state.breaks.autoStart
	updateStorageData()
}
export const changePomodoroCount = (newCount: string) => {
	if (Number(newCount) > 0) {
		state.breaks.pomodoroCounts = Number(newCount)
	} else {
		state.breaks.pomodoroCounts = 1
	}
	updateStorageData()
}

// // =================== //
// // === GET'S STATE === //
// // =================== //
export const getSettingsState = () => {
	return state
}
// Durations
export const getDurationsPomodoroTime = () => {
	return state.durations.pomodoroTime
}
export const getDurationsBreakTime = () => {
	return state.durations.breakTime
}
export const getDurationsLongTime = () => {
	return state.durations.longTime
}

// Breaks
export const getBreaksShort = () => {
	return state.breaks.short
}
export const getBreaksLong = () => {
	return state.breaks.long
}
export const getBreaksPomodoroCounts = () => {
	return state.breaks.pomodoroCounts
}
export const getBreaksAutoStart = () => {
	return state.breaks.autoStart
}

// Timer
export const getTimerIsActive = () => {
	return state.timer.isActive
}
export const getTimerCurrentPomodoroCount = () => {
	return state.timer.currentPomodoroCount
}
export const getTimerCurrentTime = () => {
	const currentTime = state.timer.currentTime
	const minutes = Math.floor(currentTime / 60)
	const seconds = currentTime - Math.floor(currentTime / 60) * 60

	const formatedTime = (time: number) => {
		if (time < 10) {
			return `0${time}`
		}
		return `${time}`
	}
	return `${formatedTime(minutes)}:${formatedTime(seconds)}`
}
export const getTimerCurrentTimer = () => {
	return state.timer.currentTimer
}

// Timer HTML update

const timerChangeTimeTime = document.getElementById('timer__button-time')
const timerChangeTimeTitle = document.getElementById('timer__button-title')

const updateTimerChangeBtn = () => {
	timerChangeTimeTime.textContent = getTimerCurrentTime()
	timerChangeTimeTitle.textContent = getTimerCurrentTimer()
}

const timerTimePause = document.getElementById('timer__time-pause')
const timerTimeRun = document.getElementById('timer__time-run')

const updateTimerButton = () => {
	const timerButtonInitisActive = getTimerIsActive()
	timerTimePause.style.display = timerButtonInitisActive ? 'block' : 'none'
	timerTimeRun.style.display = timerButtonInitisActive ? 'none' : 'block'
}

// Settings POPUP HTML update

//** Durations
const durationPomodoro = document.getElementById(
	'settingsDurations-Pomodoro'
)! as HTMLInputElement
const durationBreak = document.getElementById(
	'settingsDurations-Break'
)! as HTMLInputElement
const durationLong = document.getElementById(
	'settingsDurations-LongBreak'
)! as HTMLInputElement

//** Breaks
// Break
const breakShortBreak = document.getElementById('settingsBreaks-Break')
const breakShortBreakIcon = document.getElementById('settingsBreaks-BreakIcon')
// Long break
const breakLongBreak = document.getElementById('settingsBreaks-LongBreak')
const breakLongBreakIcon = document.getElementById(
	'settingsBreaks-LongBreakIcon'
)
// Pomodoro counts
const breakPomodoroCounts = document.getElementById(
	'settingsBreaks-PomodoroCounts'
)! as HTMLInputElement
// Auto start next pomodoro
const breakAutoStart = document.getElementById('settingsBreaks-AutoStart')
const breakAutoStartIcon = document.getElementById(
	'settingsBreaks-AutoStartIcon'
)
//** Themes
const themesLight = document.getElementById('settingsThemes-Light')
const themesLightIcon = document.getElementById('settingsThemes-LightIcon')
const themesDark = document.getElementById('settingsThemes-Dark')
const themesDarkIcon = document.getElementById('settingsThemes-DarkIcon')

const updateSettingsPopup = () => {
	// Durations
	durationPomodoro.value = String(getDurationsPomodoroTime())
	durationBreak.value = String(getDurationsBreakTime())
	durationLong.value = String(getDurationsLongTime())
	// Breaks
	breakShortBreakIcon.style.visibility = getBreaksShort() ? 'visible' : 'hidden'
	// Long Break
	breakLongBreakIcon.style.visibility = getBreaksLong() ? 'visible' : 'hidden'
	// Pomodoro counts
	breakPomodoroCounts.value = String(getBreaksPomodoroCounts())
	// Auto start next pomodoro
	breakAutoStartIcon.style.visibility = getBreaksAutoStart()
		? 'visible'
		: 'hidden'
	//** Themes
	const isLight = getThemeState() === 'light' ? true : false
	themesLightIcon.style.visibility = isLight ? 'visible' : 'hidden'
	const isDark = getThemeState() === 'dark' ? true : false
	themesDarkIcon.style.visibility = isDark ? 'visible' : 'hidden'
}
