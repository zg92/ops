import './navbar.styles.css'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='logo-container'>
                <a>[ Opserver ]</a>
            </div>
            <div className='links-container'>
                <a className='navbar-link'>
                    How To
                </a>
                <a className='navbar-link'>
                    Tech Skills
                </a>
                <a className='navbar-link'>
                    Reads
                </a>
            
            <div className='sign-in'>
                Sign In
            </div>
            </div>

        </div>
    )
}

export default Navbar