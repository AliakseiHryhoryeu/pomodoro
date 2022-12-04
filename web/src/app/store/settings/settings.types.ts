export interface ISettingsState {
	durations: IDurations
	breaks: IBreaks
	timer: ITimer
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
	currentTimer: 'pomodoro' | 'short' | 'longBreak'
}
