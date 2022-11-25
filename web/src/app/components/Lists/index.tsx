import React, { FC } from 'react'

import { HeaderList, List, AddList } from 'app/components'

import './Lists.scss'

export const Lists: FC = () => {
	return (
		<>
			<HeaderList />
			<List />
			<AddList />
		</>
	)
}
