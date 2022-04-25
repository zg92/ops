import './button.styles.css'

const BUTTON_TYPES_CLASSES = {
  login: 'login-button',
  loginBanner: 'login-banner-button',
  googleSignin: 'google-signin-button'
}

const Button = ({ buttonType, children, ...otherProps }) => {

  return (
    <button className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`} {...otherProps}>{children}</button>
  )
}

export default Button;
