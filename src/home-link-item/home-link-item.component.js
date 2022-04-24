import './home-link-item.styles.css'
import { FcManager, FcAcceptDatabase, FcPanorama } from 'react-icons/fc'


const HomeLinkItem = ({category}) => {
    const catText = category[0]
    const catIcon = category[1]

  return (
    <div className='home-link-image-container'>
    {catIcon}
    <span className='home-link-icon-text'>{catText}</span>
</div>
  )
}

export default HomeLinkItem