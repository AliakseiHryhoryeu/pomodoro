import React, { FC } from 'react'

import { Header } from 'app/components'
import styled from 'styled-components'
export const Main: FC = () => {
	const Main = styled.div`
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		@media (max-width: 768px) {
			// background-color: red;
		}
	`

	return (
		<Main className='main'>
			<Header />
		</Main>
	)
}

// import { useTypedSelector } from 'app/hooks/useAppSelector'
// import { RootState } from 'app/store'
// const { isTrialMode, showAlert } = useTypedSelector((state: RootState) => {
// 	return {
// 		isTrialMode: state.user.trialMode,
// 		showAlert: state.user.alertVisible,
// 	}
// })
