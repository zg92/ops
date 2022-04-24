import './form-input.styles.css'

const FormInput = ({label, type}) => {
    return (

        <div className='form-container'>
            <label className='form-input-label'><div className='text-wrapper'>{label}</div></label>
            <input className='form-input' type={type}/>
        </div>
    )
}

export default FormInput