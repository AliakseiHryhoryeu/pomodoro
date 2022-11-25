import React from 'react'

import userIcon from 'assets/img/userIcon_5.png'

import './MainSettings.scss'

export const MainSettings = () => {
	return (
		<div className='settings__content'>
			<div className='settings__block'>
				<div className='settings__block-title'>Photo</div>
				<div className='settings__block__wrapper-row'>
					<img src={userIcon} alt='User Icon' />
					<div className='settings__block__wrapper-column'>
						<div className='settings__block-button'>Upload photo</div>
						<div className='settings__block-description'>
							Pick a photo up to 4MB
						</div>
					</div>
				</div>
			</div>
			<div className='settings__block'>
				<div className='settings__block-title'>Name</div>
				<input
					className='settings__block-input'
					placeholder='Enter your name'
					name='email'
					type='email'
				></input>
			</div>
			<div className='settings__block'>
				<div className='settings__block-title'>Email</div>
				<div className='settings__block-text'>
					aliaksei.hryhoryeu.1@gmail.com
				</div>
				<div className='settings__block-button'>Change email</div>
			</div>
			<div className='settings__block'>
				<div className='settings__block-title'>Password</div>
				<div className='settings__block-button'>Change Password</div>
			</div>
		</div>
	)
}
