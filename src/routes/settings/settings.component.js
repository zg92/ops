import './settings.style.css'
import Button from '../../button/button.component';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/user.context';
import { updateUserData, updateUserPassword, signInAuthUserWithEmailAndPassword } from '../../utils/firebase';


const Settings = () => {

    const defaultFormField = {
        tagline: '',
        displayName: '',
        oldPassword: '',
        newPassword: ''
    }

    const { currentUser, userInfo } = useContext(UserContext)
    const [field, setField] = useState(defaultFormField)
    const { tagline, displayName, oldPassword, newPassword } = field

    const updateField = async (event) => {
        const { name } = event.target
        event.preventDefault()
        console.log(name)
        if (name === 'password') {
            console.log(oldPassword, newPassword)
            await signInAuthUserWithEmailAndPassword(currentUser.email, oldPassword)
            updateUserPassword(newPassword)
            
        }
        if (name === 'tagline' || name === 'displayName')
            {updateUserData(currentUser, name, field[name])}
        setField(defaultFormField)
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setField({ ...field, [name]: value })
    }

    return (
        <div className='settings-wrapper'>
            <div className='settings-item-container'>
                <div className='update-user-photo'><div className='settings-type-text'>Update Photo</div></div>
                <div className='update-tagline'>
                    <div className='settings-type-text'>Update Tagline</div>
                    <form className='change-form' onSubmit={(e) => updateField(e)} name='tagline'>
                        <div className='change-items'>
                            <div className='current-status'>{userInfo ? <div className='text-status-display'><h4>Current Tagline:</h4><p>{userInfo.tagline}</p></div> : 'Set Your Username Below'}</div>
                            <input className='input-settings-form' type='text' name='tagline' onChange={handleChange} value={tagline} />
                        </div>
                        <div className='submit-change'>
                            <Button buttonType='settingsUpdate' type='submit'>Update Tagline</Button>
                        </div>
                    </form>
                </div>
                <div className='update-username'>
                    <div className='settings-type-text'>Update Username</div>
                    <form className='change-form' onSubmit={(e) => updateField(e)} name='displayName'>
                        <div className='change-items'>
                            <div className='current-status'>{userInfo ? <div className='text-status-display'><h4>Current Username:</h4><p>{userInfo.displayName}</p></div> : 'Set Your Username Below'}</div>
                            <input className='input-settings-form' type='text' name='displayName' onChange={handleChange} value={displayName} />
                        </div>
                        <div className='submit-change'>
                            <Button buttonType='settingsUpdate'>Update Username</Button>
                        </div>
                    </form>
                </div>
                <div className='update-password'>
                    <div className='settings-type-text'>Update Password</div>
                    <form className='change-form' onSubmit={(e) => updateField(e)} name='password'>
                        <div className='change-items'>
                            <input className='input-settings-form' type='password' name='oldPassword' onChange={handleChange} value={oldPassword} />
                            <input className='input-settings-form' type='password' name='newPassword' onChange={handleChange} value={newPassword} />
                        </div>
                        <div className='submit-change'>
                            <Button buttonType='settingsUpdate'>Update Password</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    )
}

export default Settings