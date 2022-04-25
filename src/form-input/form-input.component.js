import './form-input.styles.css'

const FormInput = ({label, ...otherProps}) => {

    return (

        <div className='form-container'>
            <label className='form-input-label'><div className='text-wrapper'>{label}</div></label>
            <input className='form-input' {...otherProps} />
        </div>
    )
}

export default FormInput