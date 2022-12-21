document.addEventListener('DOMContentLoaded', function (event) {
	const settings = document.getElementById('settings')
	const settingsBgBtn = document.getElementById('settingsBg')
	const headerSettingsBtn = document.getElementById('headerSettingsBtn')
	const settingsHeaderBtn = document.getElementById('settings__header')
	// *****************************************
	// ****  Toogle Visible Settings Start  ****
	// *****************************************
	let settingsVisible = true
	const changeVisible = () => {
		settingsVisible = !settingsVisible
		if (settings) {
			if (settingsVisible) {
				settings.style.display = 'flex'
			} else {
				settings.style.display = 'none'
			}
		}
	}

	console.log(settingsBgBtn)

	if (settingsBgBtn != null) {
		console.log('test')

		settingsBgBtn.addEventListener(
			'click',
			e => {
				changeVisible()
			},
			false
		)
	}

	headerSettingsBtn &&
		headerSettingsBtn.addEventListener(
			'click',
			e => {
				changeVisible()
			},
			false
		)
	settingsHeaderBtn &&
		settingsHeaderBtn.addEventListener(
			'click',
			e => {
				changeVisible()
			},
			false
		)
	// *****************************************
	// ****  Toogle Visible Settings End  ****
	// *****************************************
})
