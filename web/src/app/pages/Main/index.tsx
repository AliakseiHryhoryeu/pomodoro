import React, { FC } from 'react'

import { Alert, Header, Lists, Tasks } from 'app/components'
import { useTypedSelector } from 'app/hooks/useAppSelector'
import { RootState } from 'app/store'

import './Main.scss'

export const Main: FC = () => {
	const alertMessage = 'To save data, you must login or signup'
	return (
		<div className='main'>
			<Header />
			<div className='main__wrapper'>
				<div className='main__menu'>
					<div className='main__menu__wrapper'>
						<Lists />
					</div>
				</div>
				<div className='main__tasks'>
					<div className='main__tasks__wrapper'>
						<Tasks />
					</div>
				</div>
			</div>
		</div>
	)
}

// const { isTrialMode, showAlert } = useTypedSelector((state: RootState) => {
// 	return {
// 		isTrialMode: state.user.trialMode,
// 		showAlert: state.user.alertVisible,
// 	}
// })
