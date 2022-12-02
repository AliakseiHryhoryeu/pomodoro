import React, { FC } from 'react'

import { Header, Timer } from 'app/components'
import styled from 'styled-components'
export const Main: FC = () => {
	const Main = styled.div`
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		width: 100%;
		height: 100%;
		@media (max-width: 768px) {
			// background-color: red;
		}
	`

	return (
		<Main className='main'>
			<Header />
			<Timer />
		</Main>
	)
}
