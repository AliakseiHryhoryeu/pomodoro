import React from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'

import { store } from 'app/store'

import './index.scss'

import App from 'app/App'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
)
