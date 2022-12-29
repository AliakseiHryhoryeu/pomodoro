"use strict";
(self["webpackChunkpomodoro_timer"] = self["webpackChunkpomodoro_timer"] || []).push([["main"],{

/***/ "./src/audio/btnSound-2.mp3":
/*!**********************************!*\
  !*** ./src/audio/btnSound-2.mp3 ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fc860afbd8b49620f21f10e7ed2daa56.mp3");

/***/ }),

/***/ "./src/audio/btnSound.mp3":
/*!********************************!*\
  !*** ./src/audio/btnSound.mp3 ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0737d547547a7b78ad58a2704a665ad8.mp3");

/***/ }),

/***/ "./src/audio/endPomodoro.mp3":
/*!***********************************!*\
  !*** ./src/audio/endPomodoro.mp3 ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d410f5162a15fad9e00b8f77ec3dd4f7.mp3");

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/ts/settings/settings.state.ts":
/*!*******************************************!*\
  !*** ./src/ts/settings/settings.state.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getTimerCurrentTimer = exports.getTimerCurrentTime = exports.getTimerCurrentPomodoroCount = exports.getTimerIsActive = exports.getBreaksAutoStart = exports.getBreaksPomodoroCounts = exports.getBreaksLong = exports.getBreaksShort = exports.getDurationsLongTime = exports.getDurationsBreakTime = exports.getDurationsPomodoroTime = exports.getState = exports.changePomodoroCount = exports.toggleAutoStart = exports.toggleLongBreak = exports.toggleBreak = exports.changeLongTime = exports.changeBreakTime = exports.changePomodoroTime = exports.toggleRunTimer = exports.updateTime = exports.changeTimer = void 0;
var settings_types_1 = __webpack_require__(/*! ./settings.types */ "./src/ts/settings/settings.types.ts");
var btnSound_mp3_1 = __importDefault(__webpack_require__(/*! ../../audio/btnSound.mp3 */ "./src/audio/btnSound.mp3"));
var btnSound_2_mp3_1 = __importDefault(__webpack_require__(/*! ../../audio/btnSound-2.mp3 */ "./src/audio/btnSound-2.mp3"));
var endPomodoro_mp3_1 = __importDefault(__webpack_require__(/*! ../../audio/endPomodoro.mp3 */ "./src/audio/endPomodoro.mp3"));
var LocalStorageFolder = 'Settings';
var getParsed = function () {
    var Parsed = JSON.parse(localStorage.getItem(LocalStorageFolder) || '{}');
    if (typeof Parsed == undefined || Parsed == null) {
        Parsed = settings_types_1.emptySettingsState;
    }
    return Parsed;
};
var Parsed = settings_types_1.emptySettingsState;
var state = {
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
    showAlert: true,
};
var changeTimer = function () {
    var audio = new Audio(btnSound_mp3_1.default);
    audio.play();
    if (state.timer.currentTimer === 'Pomodoro') {
        if (state.breaks.short) {
            state.timer.currentTimer = 'Short break';
            state.timer.currentTime = state.durations.breakTime * 60;
        }
        else if (state.breaks.long) {
            state.timer.currentTimer = 'Long break';
            state.timer.currentTime = state.durations.longTime * 60;
        }
        else {
            state.timer.currentTimer = 'Pomodoro';
            state.timer.currentTime = state.durations.pomodoroTime * 60;
        }
    }
    else if (state.timer.currentTimer === 'Short break') {
        if (state.breaks.long) {
            state.timer.currentTimer = 'Long break';
            state.timer.currentTime = state.durations.longTime * 60;
        }
        else {
            state.timer.currentTimer = 'Pomodoro';
            state.timer.currentTime = state.durations.pomodoroTime * 60;
        }
    }
    else {
        state.timer.currentTimer = 'Pomodoro';
        state.timer.currentTime = state.durations.pomodoroTime * 60;
    }
    state.timer.isActive = false;
    localStorage.setItem(LocalStorageFolder, JSON.stringify(state));
    updateTimerChangeBtn();
};
exports.changeTimer = changeTimer;
var updateTime = function () {
    if (state.timer.isActive) {
        state.timer.currentTime -= 1;
    }
    if (state.timer.currentTime <= 0) {
        var endBreakAudio = new Audio(btnSound_2_mp3_1.default);
        var endPomodoroAudio = new Audio(endPomodoro_mp3_1.default);
        switch (state.timer.currentTimer) {
            case 'Pomodoro':
                state.timer.currentPomodoroCount++;
                endPomodoroAudio.play();
                if (state.breaks.short) {
                    state.timer.currentTimer = 'Short break';
                    state.timer.currentTime = state.durations.breakTime * 60;
                }
                else if (state.breaks.long) {
                    state.timer.currentTimer = 'Long break';
                    state.timer.currentTime = state.durations.longTime * 60;
                }
                else {
                    state.timer.currentTimer = 'Pomodoro';
                    state.timer.currentTime = state.durations.pomodoroTime * 60;
                }
                break;
            case 'Short break':
                endBreakAudio.play();
                if (state.timer.currentPomodoroCount >= state.breaks.pomodoroCounts) {
                    if (state.breaks.long) {
                        state.timer.currentTimer = 'Long break';
                        state.timer.currentTime = state.durations.longTime * 60;
                    }
                    else {
                        state.timer.currentTimer = 'Pomodoro';
                        state.timer.currentTime = state.durations.pomodoroTime * 60;
                    }
                }
                else {
                    state.timer.currentTimer = 'Pomodoro';
                    state.timer.currentTime = state.durations.pomodoroTime * 60;
                }
                break;
            case 'Long break':
                endBreakAudio.play();
                state.timer.currentTimer = 'Pomodoro';
                state.timer.currentTime = state.durations.pomodoroTime * 60;
                state.timer.currentPomodoroCount = 1;
                if (state.breaks.autoStart === false) {
                    state.timer.isActive = false;
                }
                break;
            default:
                break;
        }
    }
    localStorage.setItem(LocalStorageFolder, JSON.stringify(state));
    updateTimerChangeBtn();
    updateTimerButton();
};
exports.updateTime = updateTime;
var toggleRunTimer = function () {
    var audio = new Audio(btnSound_2_mp3_1.default);
    audio.play();
    state.timer.isActive = !state.timer.isActive;
    localStorage.setItem(LocalStorageFolder, JSON.stringify(state));
    updateTimerButton();
};
exports.toggleRunTimer = toggleRunTimer;
var changePomodoroTime = function (newPomodoroTime) {
    var currentTimer = state.timer.currentTimer;
    if (newPomodoroTime > 0) {
        state.durations.pomodoroTime = newPomodoroTime;
        if (currentTimer === 'Pomodoro') {
            state.timer.currentTime = newPomodoroTime * 60;
        }
    }
    localStorage.setItem(LocalStorageFolder, JSON.stringify(state));
    updateTimerChangeBtn();
};
exports.changePomodoroTime = changePomodoroTime;
var changeBreakTime = function (newShortTime) {
    var currentTimer = state.timer.currentTimer;
    if (newShortTime > 0) {
        state.durations.breakTime = newShortTime;
        if (currentTimer === 'Short break') {
            state.timer.currentTime = newShortTime * 60;
        }
    }
    localStorage.setItem(LocalStorageFolder, JSON.stringify(state));
    updateTimerChangeBtn();
};
exports.changeBreakTime = changeBreakTime;
var changeLongTime = function (newLongTime) {
    var currentTimer = state.timer.currentTimer;
    if (newLongTime > 0) {
        state.durations.longTime = newLongTime;
        if (currentTimer === 'Long break') {
            state.timer.currentTime = newLongTime * 60;
        }
    }
    localStorage.setItem(LocalStorageFolder, JSON.stringify(state));
    updateTimerChangeBtn();
};
exports.changeLongTime = changeLongTime;
var toggleBreak = function () {
    state.breaks.short = !state.breaks.short;
    localStorage.setItem(LocalStorageFolder, JSON.stringify(state));
};
exports.toggleBreak = toggleBreak;
var toggleLongBreak = function () {
    state.breaks.long = !state.breaks.long;
    localStorage.setItem(LocalStorageFolder, JSON.stringify(state));
};
exports.toggleLongBreak = toggleLongBreak;
var toggleAutoStart = function () {
    state.breaks.autoStart = !state.breaks.autoStart;
    localStorage.setItem(LocalStorageFolder, JSON.stringify(state));
};
exports.toggleAutoStart = toggleAutoStart;
var changePomodoroCount = function (newCount) {
    if (Number(newCount) > 0) {
        state.breaks.pomodoroCounts = Number(newCount);
    }
    else {
        state.breaks.pomodoroCounts = 1;
    }
    localStorage.setItem(LocalStorageFolder, JSON.stringify(state));
};
exports.changePomodoroCount = changePomodoroCount;
var getState = function () {
    return state;
};
exports.getState = getState;
var getDurationsPomodoroTime = function () {
    return state.durations.pomodoroTime;
};
exports.getDurationsPomodoroTime = getDurationsPomodoroTime;
var getDurationsBreakTime = function () {
    return state.durations.breakTime;
};
exports.getDurationsBreakTime = getDurationsBreakTime;
var getDurationsLongTime = function () {
    return state.durations.longTime;
};
exports.getDurationsLongTime = getDurationsLongTime;
var getBreaksShort = function () {
    return state.breaks.short;
};
exports.getBreaksShort = getBreaksShort;
var getBreaksLong = function () {
    return state.breaks.long;
};
exports.getBreaksLong = getBreaksLong;
var getBreaksPomodoroCounts = function () {
    return state.breaks.pomodoroCounts;
};
exports.getBreaksPomodoroCounts = getBreaksPomodoroCounts;
var getBreaksAutoStart = function () {
    return state.breaks.autoStart;
};
exports.getBreaksAutoStart = getBreaksAutoStart;
var getTimerIsActive = function () {
    return state.timer.isActive;
};
exports.getTimerIsActive = getTimerIsActive;
var getTimerCurrentPomodoroCount = function () {
    return state.timer.currentPomodoroCount;
};
exports.getTimerCurrentPomodoroCount = getTimerCurrentPomodoroCount;
var getTimerCurrentTime = function () {
    var currentTime = state.timer.currentTime;
    var minutes = Math.floor(currentTime / 60);
    var seconds = currentTime - Math.floor(currentTime / 60) * 60;
    var formatedTime = function (time) {
        if (time < 10) {
            return "0".concat(time);
        }
        return "".concat(time);
    };
    return "".concat(formatedTime(minutes), ":").concat(formatedTime(seconds));
};
exports.getTimerCurrentTime = getTimerCurrentTime;
var getTimerCurrentTimer = function () {
    return state.timer.currentTimer;
};
exports.getTimerCurrentTimer = getTimerCurrentTimer;
var timerChangeTimeTime = document.getElementById('timer__button-time');
var timerChangeTimeTitle = document.getElementById('timer__button-title');
var updateTimerChangeBtn = function () {
    timerChangeTimeTime.textContent = (0, exports.getTimerCurrentTime)();
    timerChangeTimeTitle.textContent = (0, exports.getTimerCurrentTimer)();
};
var timerTimePause = document.getElementById('timer__time-pause');
var timerTimeRun = document.getElementById('timer__time-run');
var updateTimerButton = function () {
    var timerButtonInitisActive = (0, exports.getTimerIsActive)();
    timerTimePause.style.display = timerButtonInitisActive ? 'block' : 'none';
    timerTimeRun.style.display = timerButtonInitisActive ? 'none' : 'block';
};


/***/ }),

/***/ "./src/ts/settings/settings.ts":
/*!*************************************!*\
  !*** ./src/ts/settings/settings.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var storage_1 = __webpack_require__(/*! ../storage/storage */ "./src/ts/storage/storage.ts");
var theme_state_1 = __webpack_require__(/*! ../theme/theme.state */ "./src/ts/theme/theme.state.ts");
var settings_state_1 = __webpack_require__(/*! ./settings.state */ "./src/ts/settings/settings.state.ts");
setInterval(function () {
    var test1 = (0, storage_1.setServerData)('updated001', (0, settings_state_1.getState)());
    var test = (0, storage_1.getServerData)('updated001');
}, 1000);
document.addEventListener('DOMContentLoaded', function (event) {
    var settings = document.getElementById('settings');
    var settingsBgBtn = document.getElementById('settingsBg');
    var headerSettingsBtn = document.getElementById('headerSettingsBtn');
    var settingsHeaderBtn = document.getElementById('settings__header');
    var settingsVisible = false;
    settings.style.display = 'none';
    var changeSettingsVisible = function () {
        settingsVisible = !settingsVisible;
        if (settings) {
            if (settingsVisible) {
                settings.style.display = 'flex';
            }
            else {
                settings.style.display = 'none';
            }
        }
    };
    settingsBgBtn.addEventListener('click', function (e) {
        changeSettingsVisible();
    }, false);
    headerSettingsBtn.addEventListener('click', function (e) {
        changeSettingsVisible();
    }, false);
    settingsHeaderBtn.addEventListener('click', function (e) {
        changeSettingsVisible();
    }, false);
    var durationPomodoro = document.getElementById('settingsDurations-Pomodoro');
    var durationBreak = document.getElementById('settingsDurations-Break');
    var durationLong = document.getElementById('settingsDurations-LongBreak');
    durationPomodoro.value = String((0, settings_state_1.getDurationsPomodoroTime)());
    durationBreak.value = String((0, settings_state_1.getDurationsBreakTime)());
    durationLong.value = String((0, settings_state_1.getDurationsLongTime)());
    durationPomodoro.onchange = function (e) {
        var target = e.target;
        (0, settings_state_1.changePomodoroTime)(Number(target.value));
    };
    durationBreak.onchange = function (e) {
        var target = e.target;
        (0, settings_state_1.changeBreakTime)(Number(target.value));
    };
    durationLong.onchange = function (e) {
        var target = e.target;
        (0, settings_state_1.changeLongTime)(Number(target.value));
    };
    var breakShortBreak = document.getElementById('settingsBreaks-Break');
    var breakShortBreakIcon = document.getElementById('settingsBreaks-BreakIcon');
    breakShortBreakIcon.style.visibility = (0, settings_state_1.getBreaksShort)() ? 'visible' : 'hidden';
    breakShortBreak.addEventListener('click', function (e) {
        (0, settings_state_1.toggleBreak)();
        breakShortBreakIcon.style.visibility = (0, settings_state_1.getBreaksShort)()
            ? 'visible'
            : 'hidden';
    }, false);
    var breakLongBreak = document.getElementById('settingsBreaks-LongBreak');
    var breakLongBreakIcon = document.getElementById('settingsBreaks-LongBreakIcon');
    breakLongBreakIcon.style.visibility = (0, settings_state_1.getBreaksLong)() ? 'visible' : 'hidden';
    breakLongBreak.addEventListener('click', function (e) {
        (0, settings_state_1.toggleLongBreak)();
        breakLongBreakIcon.style.visibility = (0, settings_state_1.getBreaksLong)()
            ? 'visible'
            : 'hidden';
    }, false);
    var breakPomodoroCounts = document.getElementById('settingsBreaks-PomodoroCounts');
    breakPomodoroCounts.value = String((0, settings_state_1.getBreaksPomodoroCounts)());
    breakPomodoroCounts.onchange = function (e) {
        var target = e.target;
        (0, settings_state_1.changePomodoroCount)(target.value);
        breakPomodoroCounts.value = String((0, settings_state_1.getBreaksPomodoroCounts)());
    };
    var breakAutoStart = document.getElementById('settingsBreaks-AutoStart');
    var breakAutoStartIcon = document.getElementById('settingsBreaks-AutoStartIcon');
    breakAutoStartIcon.style.visibility = (0, settings_state_1.getBreaksAutoStart)()
        ? 'visible'
        : 'hidden';
    breakAutoStart.addEventListener('click', function (e) {
        (0, settings_state_1.toggleAutoStart)();
        breakAutoStartIcon.style.visibility = (0, settings_state_1.getBreaksAutoStart)()
            ? 'visible'
            : 'hidden';
    }, false);
    var themesLight = document.getElementById('settingsThemes-Light');
    var themesLightIcon = document.getElementById('settingsThemes-LightIcon');
    var isLight = (0, theme_state_1.getThemeState)() === 'light' ? true : false;
    themesLightIcon.style.visibility = isLight ? 'visible' : 'hidden';
    themesLight.addEventListener('click', function (e) {
        (0, theme_state_1.elementsClearTheme)();
        (0, theme_state_1.changeThemeToLight)();
        (0, theme_state_1.elementsAddTheme)();
    }, false);
    var themesDark = document.getElementById('settingsThemes-Dark');
    var themesDarkIcon = document.getElementById('settingsThemes-DarkIcon');
    var isDark = (0, theme_state_1.getThemeState)() === 'dark' ? true : false;
    themesDarkIcon.style.visibility = isDark ? 'visible' : 'hidden';
    themesDark.addEventListener('click', function (e) {
        (0, theme_state_1.elementsClearTheme)();
        (0, theme_state_1.changeThemeToDark)();
        (0, theme_state_1.elementsAddTheme)();
    }, false);
    setInterval(function () {
        (0, settings_state_1.updateTime)();
    }, 1000);
    var timer = document.getElementById('timer');
    var timerTime = document.getElementById('timer__time');
    var timerTimePause = document.getElementById('timer__time-pause');
    var timerTimeRun = document.getElementById('timer__time-run');
    var timerButtonInitisActive = (0, settings_state_1.getTimerIsActive)();
    timerTimePause.style.display = timerButtonInitisActive ? 'block' : 'none';
    timerTimeRun.style.display = timerButtonInitisActive ? 'none' : 'block';
    timerTime.addEventListener('click', function (e) {
        (0, settings_state_1.toggleRunTimer)();
    }, false);
    var timerChangeTimeBtn = document.getElementById('timer__button');
    timerChangeTimeBtn.addEventListener('click', function (e) {
        (0, settings_state_1.changeTimer)();
    }, false);
    var timerChangeTimeTitle = document.getElementById('timer__button-title');
    timerChangeTimeTitle.textContent = (0, settings_state_1.getTimerCurrentTimer)();
    var timerChangeTimeTime = document.getElementById('timer__button-time');
    timerChangeTimeTime.textContent = (0, settings_state_1.getTimerCurrentTime)();
});


/***/ }),

/***/ "./src/ts/settings/settings.types.ts":
/*!*******************************************!*\
  !*** ./src/ts/settings/settings.types.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.emptySettingsState = void 0;
exports.emptySettingsState = {
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
        currentPomodoroCount: 1,
        currentTimer: 'Pomodoro',
    },
    showAlert: true,
};


/***/ }),

/***/ "./src/ts/storage/storage.ts":
/*!***********************************!*\
  !*** ./src/ts/storage/storage.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setServerData = exports.getServerData = void 0;
var getServerData = function (key) {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('test');
            var test = chrome.storage.local.get([key]).then(function (onfulfilled) {
                resolve(onfulfilled);
            }, function (error) {
                reject(error);
            });
        }, 4000);
    });
    promise.then(function (val) {
        console.log('resolve success', val);
    });
};
exports.getServerData = getServerData;
var setServerData = function (key, data) {
    var _a;
    var test = chrome.storage.local.set((_a = {}, _a[key] = data, _a)).then(function (onfulfilled) {
        return onfulfilled;
    }, function (onrejected) {
        return onrejected;
    });
};
exports.setServerData = setServerData;


/***/ }),

/***/ "./src/ts/styles.ts":
/*!**************************!*\
  !*** ./src/ts/styles.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ../scss/styles.scss */ "./src/scss/styles.scss");


/***/ }),

/***/ "./src/ts/theme/theme.state.ts":
/*!*************************************!*\
  !*** ./src/ts/theme/theme.state.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.elementsAddTheme = exports.elementsClearTheme = exports.getThemeState = exports.changeThemeToDark = exports.changeThemeToLight = exports.toggleThemeState = void 0;
var LocalStorageFolder = 'Theme';
var LocalStorage_theme = JSON.parse(localStorage.getItem(LocalStorageFolder) || '{}');
var state = {
    theme: LocalStorage_theme || 'dark',
};
var toggleThemeState = function () {
    if (state.theme === 'dark') {
        state.theme = 'light';
    }
    else {
        state.theme = 'dark';
    }
    localStorage.setItem(LocalStorageFolder, JSON.stringify(state.theme));
};
exports.toggleThemeState = toggleThemeState;
var changeThemeToLight = function () {
    state.theme = 'light';
    localStorage.setItem(LocalStorageFolder, JSON.stringify(state.theme));
};
exports.changeThemeToLight = changeThemeToLight;
var changeThemeToDark = function () {
    state.theme = 'dark';
    localStorage.setItem(LocalStorageFolder, JSON.stringify(state.theme));
};
exports.changeThemeToDark = changeThemeToDark;
var getThemeState = function () {
    return state.theme;
};
exports.getThemeState = getThemeState;
var toggleTheme = document.getElementById('toggleTheme');
var header = document.getElementById('header');
var settings = document.getElementById('settings');
var timer = document.getElementById('timer');
var timer__button = document.getElementById('timer__button');
var themesLightIcon = document.getElementById('settingsThemes-LightIcon');
var themesDarkIcon = document.getElementById('settingsThemes-DarkIcon');
var toggleThemeCheckbox = document.getElementById('toggleThemeCheckbox');
var elementsClearTheme = function () {
    var theme = (0, exports.getThemeState)();
    toggleTheme.classList.remove("toggleTheme-".concat(theme));
    header.classList.remove("header-".concat(theme));
    settings.classList.remove("settings-".concat(theme));
    timer.classList.remove("timer-".concat(theme));
    timer__button.classList.remove("timer__button-".concat(theme));
    themesLightIcon.style.visibility = 'hidden';
    themesDarkIcon.style.visibility = 'hidden';
};
exports.elementsClearTheme = elementsClearTheme;
var elementsAddTheme = function () {
    var theme = (0, exports.getThemeState)();
    toggleTheme.classList.add("toggleTheme-".concat(theme));
    header.classList.add("header-".concat(theme));
    settings.classList.add("settings-".concat(theme));
    timer.classList.add("timer-".concat(theme));
    timer__button.classList.add("timer__button-".concat(theme));
    var isLight = (0, exports.getThemeState)() === 'light' ? true : false;
    var isDark = (0, exports.getThemeState)() === 'dark' ? true : false;
    themesLightIcon.style.visibility = isLight ? 'visible' : 'hidden';
    themesDarkIcon.style.visibility = isDark ? 'visible' : 'hidden';
    toggleThemeCheckbox.checked = (0, exports.getThemeState)() === 'light' || false;
};
exports.elementsAddTheme = elementsAddTheme;


/***/ }),

/***/ "./src/ts/theme/theme.ts":
/*!*******************************!*\
  !*** ./src/ts/theme/theme.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var theme_state_1 = __webpack_require__(/*! ./theme.state */ "./src/ts/theme/theme.state.ts");
document.addEventListener('DOMContentLoaded', function (event) {
    var toggleThemeCheckbox = document.getElementById('toggleThemeCheckbox');
    toggleThemeCheckbox.checked = (0, theme_state_1.getThemeState)() === 'light' || false;
    (0, theme_state_1.elementsAddTheme)();
    toggleThemeCheckbox.addEventListener('click', function (e) {
        (0, theme_state_1.elementsClearTheme)();
        (0, theme_state_1.toggleThemeState)();
        (0, theme_state_1.elementsAddTheme)();
    }, false);
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_babel_polyfill_lib_index_js"], function() { return __webpack_exec__("./node_modules/@babel/polyfill/lib/index.js"), __webpack_exec__("./src/ts/styles.ts"), __webpack_exec__("./src/ts/settings/settings.ts"), __webpack_exec__("./src/ts/theme/theme.ts"), __webpack_exec__("./src/ts/storage/storage.ts"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);