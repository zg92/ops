import { Fragment } from 'react'
import Button from '../button/button.component'
import './settings-input.styles.css'

const SettingsInput = ({ title, name, updateField, value, currentInfo, handleChange }) => {

  return (
    <div className='input-wrapper'>
      <div className='settings-type-text'>Update {title}</div>
      <form className='change-form' onSubmit={(e) => updateField(e)} name={name}>
        <div className='change-items'>
          <div className='current-status'>{currentInfo ? <div className='text-status-display'><h4>Current {title}: </h4><p>{currentInfo}</p></div> : `Set your ${name} below`}</div>
          <input className='input-settings-form' type='text' name={name} onChange={handleChange} value={value} />
        </div>
        <div className='submit-change-input'>
          <Button buttonType='settingsUpdate' type='submit'>Update {title}</Button>
        </div>
      </form>
    </div>
  )
}

export default SettingsInput