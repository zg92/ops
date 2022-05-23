import './settings.style.css'
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/user.context';
import { updateUserData, updateUserPassword, signInAuthUserWithEmailAndPassword, getUserData } from '../../utils/firebase';
import SettingsInput from '../../settings-input/settings-input.component';
import SettingsInputPassword from '../../settings-input-password/settings-input-password.component';
import { useNavigate } from 'react-router-dom';


const Settings = () => {

    const defaultFormField = {
        tagline: '',
        displayName: '',
        oldPassword: '',
        newPassword: ''
    }

    const { currentUser, userInfo, setUserInfo } = useContext(UserContext)
    const [field, setField] = useState(defaultFormField)
    const { tagline, displayName, oldPassword, newPassword } = field
    const [currentUserInfo, setCurrentUserInfo] = useState(userInfo)
    const { tagline: currentTagline, displayName: currentDisplayName } = currentUserInfo

    const navigate = useNavigate()
    
    useEffect(
        () => {
            if (userInfo === undefined) {
                navigate('/')
            }
            setCurrentUserInfo(userInfo)
        }, [userInfo]
    )

    const updateField = async (event) => {
        const { name } = event.target
        event.preventDefault()
        if (name === 'password') {
            await signInAuthUserWithEmailAndPassword(currentUser.email, oldPassword)
            await updateUserPassword(newPassword)

        }
        if (name === 'tagline' || name === 'displayName') {await updateUserData(currentUser, name, field[name]) };
        setField(defaultFormField)
        const newUserInfo = await getUserData(currentUser)
        setUserInfo(newUserInfo)   
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setField({ ...field, [name]: value })
    }

    return (
        <div className='settings-wrapper'>
            <div className='settings-item-container'>
                <SettingsInput title='Tagline' name='tagline' updateField={updateField} value={tagline} currentInfo={currentTagline} handleChange={handleChange} />
                <SettingsInput title='Username' name='displayName' updateField={updateField} value={displayName} currentInfo={currentDisplayName} handleChange={handleChange} />
                <SettingsInputPassword title='Password' name='password' updateField={updateField} userInfo={userInfo} newPassword={newPassword} oldPassword={oldPassword} handleChange={handleChange} />
            </div>
        </div>


    )
}

export default Settings