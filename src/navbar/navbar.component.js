import './navbar.styles.css'
import Button from '../button/button.component'
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Fragment } from 'react';

const Navbar = () => {

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
                    <Link to='/signin' className='navbar-link'>
                        Sign In
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment >
    )
}

export default Navbar