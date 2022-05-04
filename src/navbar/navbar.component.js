import './navbar.styles.css'
import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { UserContext } from '../context/user.context';
import { AccountDropdownContext } from '../context/account-dropdown.context'; 
import DropdownAccount from '../dropdown-account/dropdown-account.component';

const Navbar = () => {

    const {currentUser} = useContext(UserContext)
    const {accountDropdownState, setAccountDropdownState} = useContext(AccountDropdownContext)

    const AccountMenuHandler = () => {
        if (accountDropdownState) {
        setAccountDropdownState(false)
        }
        else {
        setAccountDropdownState(true)
        }
    }

    return (
        <Fragment>
            <div className='navbar-container'>
            {accountDropdownState ?
            <DropdownAccount /> : null
            }
                <div className='logo-container'>
                    <Link to='/' className='logo'>[ Opserver ]</Link>
                </div>
                <div className='links-container'>
                    <Link className='navbar-link navbar-topic' to='/article'>
                        How To
                    </Link>
                    <Link className='navbar-link navbar-topic' to='/article'>
                        Tech Skills
                    </Link>
                    <Link className='navbar-link navbar-topic' to='/article'>
                        Reads
                    </Link>

                    {currentUser ?
                    (<span className='navbar-link' onClick={AccountMenuHandler}>Account</span>) : (
                    <Link to='/signin' className='navbar-link'>
                        Sign In
                    </Link>)
                    }
                </div>
            </div>
            <Outlet />
        </Fragment >
    )
}

export default Navbar