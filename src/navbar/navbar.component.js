import './navbar.styles.css'
import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { UserContext } from '../context/user.context';
import { signOutUser } from '../utils/firebase';

const Navbar = () => {

    const {currentUser} = useContext(UserContext)

    return (
        <Fragment>
            <div className='navbar-container'>
                <div className='logo-container'>
                    <Link to='/' className='logo'>[ Opserver ]</Link>
                </div>
                <div className='links-container'>
                    <Link className='navbar-link' to='/article'>
                        How To
                    </Link>
                    <Link className='navbar-link' to='/article'>
                        Tech Skills
                    </Link>
                    <Link className='navbar-link' to='/article'>
                        Reads
                    </Link>

                    {currentUser ?
                    (<span className='navbar-link' onClick={signOutUser}>Sign Out</span>) : (
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