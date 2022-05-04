import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../button/button.component'
import FormInput from '../../form-input/form-input.component'
import { createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase'
import './signin-styles.css'

const defaultFormFields = {
    email: '',
    password: ''
}



const SignIn = () => {

    const navigate = useNavigate()

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleChanges = (event) => {
        const { name, value } = event.target;
        console.log(name, value)
        setFormFields({ ...formFields, [name]: value })
    }

    const googleSignIn = async () => {
        await signInWithGooglePopup();
        navigate('/')

    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await signInAuthUserWithEmailAndPassword(email, password)
            resetFormFields()
            navigate('/')

        }
        catch (error) {

            switch (error.code) {
                case "auth/wrong-password":
                    alert('Incorrect password for email');
                    break

                case "auth/user-not-found":
                    alert('No user associated with this email');
                    break;
                default:
                    console.log(error)
            }
        }
    }

    return (
        <div className='sign-in-form'>
            <span className='sign-title'>Login to Observer.</span>
            <form className='sign-in-form-container' onSubmit={handleSubmit}>
            <FormInput label='Email' type='text' value = {email}  onChange={handleChanges} name='email' />
            <FormInput label='Password' type='password' value={password}  onChange={handleChanges} name='password'/>
            <div className='sign-in-buttons-container'>
                <Button buttonType='login'>Sign In</Button>
                <Button buttonType='googleSignin' onClick={googleSignIn}>Google Sign In</Button>
            </div>
            </form>
            

            <div className='sign-in-switch'>Need To Create An Account? <Link to='/signup'>Sign Up.</Link></div>
        </div>
    )
}

export default SignIn