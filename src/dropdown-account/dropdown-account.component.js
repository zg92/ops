import './dropdown-account.styles.css'
import { signOutUser } from '../utils/firebase';
import { AccountDropdownContext } from '../context/account-dropdown.context'; 
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DropdownAccount = () => {

  const navigate = useNavigate()

  const signOutHandler = () => {
    signOutUser()
    setAccountDropdownState(false)
    navigate('/')
  }

  const {setAccountDropdownState} = useContext(AccountDropdownContext)

  return (
    <div className='account-dropdown-container'>
        <div className='account-dropdown-options'>
            <div>View Publications</div>
            <Link to='/settings' onClick={() => setAccountDropdownState(false)}><div>Settings</div></Link>
            <div onClick={() => signOutHandler()}>Sign Out</div>

        </div>

    </div>
  )
}

export default DropdownAccount