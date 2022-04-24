import './home-link-container.styles.css'
import HomeLinkItem from '../home-link-item/home-link-item.component'
import { FcManager, FcAcceptDatabase, FcPanorama } from 'react-icons/fc'

const topicList =
    [['Learn SQL', <FcAcceptDatabase className='home-link-icon'/>],
    ['Become a Manager', < FcManager  className='home-link-icon' /> ],
    ['Presentation Excellence', <FcPanorama  className='home-link-icon' />]]

const HomeLinkContainer = () => {
    return (
        <div className='container-wrapper'>
            {topicList.map(topic => <HomeLinkItem key= {topic} category={topic} />)}
</div>
    )
}

export default HomeLinkContainer