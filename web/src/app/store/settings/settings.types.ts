export interface ISettingsState {
	durations: IDurations
	breaks: IBreaks
	timer: ITimer
	showAlert: boolean
}

export interface IDurations {
	pomodoroTime: number
	breakTime: number
	longTime: number
}
export interface IBreaks {
	short: boolean
	long: boolean
	pomodoroCounts: number
	autoStart: boolean
}

export interface ITimer {
	isActive: boolean
	currentTime: number
	currentTimer: 'Pomodoro' | 'Short break' | 'Long break'
}

export const emptySettingsState: ISettingsState = {
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
		currentTime: 25 * 60,
		currentTimer: 'Pomodoro',
	},
	showAlert: true,
}
