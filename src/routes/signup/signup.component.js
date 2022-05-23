import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Button from '../../button/button.component'
import FormInput from '../../form-input/form-input.component'
import { createUserDocumentFromAuth, createAuthUserWithEmailAndPassword } from '../../utils/firebase'
import './signup-styles.css'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}


const SignUp = () => {

    const navigate = useNavigate()

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields
    
    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }
    
    const handleChanges = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            alert("passwords do not match")
            return
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user, { displayName })
            resetFormFields()
            navigate('/')

        }
        catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use')
            }
            else {
                console.log('user creation encountered an error', error)
            }
        }
    }

    return (
        <div className='sign-up-form'>
            <span className='sign-title'>Join Opserver.</span>
            <form className='sign-up-form-container' onSubmit={handleSubmit}>
            <FormInput label='Email' required onChange={handleChanges} value={email}  name='email' type='text' />
            <FormInput label='Username' required onChange={handleChanges} value={displayName} name='displayName' type='text' />
            <FormInput label='Password' required onChange={handleChanges} value={password} name='password' type='password' />
            <FormInput label='Confirm Password' required onChange={handleChanges} value={confirmPassword} name='confirmPassword' type='password' />
            <div className='sign-up-buttons-container'>
                <Button buttonType='login'>Sign Up</Button>
            </div>
            </form>
            <div className='sign-in-switch'>Already Have An Account? <Link to='/signin'>Sign In.</Link></div>
        </div>
    )
}

export default SignUp