import React from 'react'
import Button from '../button/button.component'
import './settings-input-password.styles.css'

const SettingsInputPassword = ({title, name, updateField, oldPassword, newPassword, handleChange}) => {
  return (
    <div className='input-wrapper password-wrapper'>
        <div className='settings-type-text'>Update {title}</div>   
        <form className='change-form' onSubmit={(e) => updateField(e)} name={name}>
            <div className='change-items'>
                <div className='text-status-display-password'><h4>Enter Current Password</h4></div>
                <input className='input-settings-form-password' type='password' name='oldPassword' onChange={handleChange} value={oldPassword} />
                <div className='text-status-display-password'><h4>Enter New Password</h4></div>
                <input className='input-settings-form-password' type='password' name='newPassword' onChange={handleChange} value={newPassword} />
            </div>
            <div className='submit-change-password'>
                <Button buttonType='settingsUpdate' type='submit'>Update {title}</Button>
            </div>
        </form>
    </div>
  )
}

export default SettingsInputPassword