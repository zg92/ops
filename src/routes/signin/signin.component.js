import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../button/button.component'
import FormInput from '../../form-input/form-input.component'
import './signin-styles.css'

const SignIn = () => {
    return (
        <div className='sign-in-form'>
            <span className='sign-title'>Login to Observer.</span>
            <form className='sign-in-form-container'>
            <FormInput label='Email' type='text' required />
            <FormInput label='Password' type='password' required />
            <div className='sign-in-buttons-container'>
                <Button className='sign-in-button' buttonType='login'>Sign In</Button>
                <Button className='sign-in-button' buttonType='login'>Google Sign In</Button>
            </div>
            </form>
            <div className='sign-in-switch'>Need To Create An Account? <Link to='/signup'>Sign Up.</Link></div>
        </div>
    )
}

export default SignIn