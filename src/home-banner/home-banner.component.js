import React from 'react'
import Button from '../button/button.component'
import './home-banner.styles.css'
import image from '../assets/main-photo.jpg'
import { useNavigate } from 'react-router-dom'

const HomeBanner = () => {

  const navigate = useNavigate()

  const signinNavLink = () => {
    navigate('/signin')
  }

  return (
      <div className='banner-container'>
             <img className='banner-img' src={image} />
    <div className='banner-text-container'> 
    <div className='banner-text-title'>The Opserver.</div>
    <div className='banner-text-title-subtext'>Level up your career and elevate your ops.</div>
    <Button buttonType='loginBanner' onClick={signinNavLink}>Jump In</Button>
    </div>

     



    </div>
  )
}

export default HomeBanner