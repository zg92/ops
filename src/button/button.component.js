import './button.styles.css'
import { useNavigate } from 'react-router-dom'

const BUTTON_TYPES_CLASSES = {
  login: 'login-button',
  loginBanner: 'login-banner-button'
}

const Button = ({ buttonType, to, children }) => {

  const navigate = useNavigate()

  return (
    <button className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`} onClick={() => { navigate(`${to}`) }}>{children}</button>
  )
}

export default Button;
