import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../button/button.component'
import FormInput from '../../form-input/form-input.component'
import './signup-styles.css'

const SignUp = () => {
    return (
        <div className='sign-up-form'>
            <span className='sign-title'>Join Opserver.</span>
            <form className='sign-up-form-container'>
            <FormInput label='Email' type='text' required />
            <FormInput label='Password' type='password' required />
            <FormInput label='Confirm Password' type='password' required />
            <div className='sign-up-buttons-container'>
                <Button className='sign-up-button' buttonType='login'>Sign Up</Button>
            </div>
            </form>
            <div className='sign-in-switch'>Already Have An Account?<Link to='/signin'> Sign In.</Link></div>
        </div>
    )
}

export default SignUp