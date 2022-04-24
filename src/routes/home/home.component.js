import HomeLinkContainer from "../../home-link-container/home-link-container.component"
import HomeMain from "../../home-main-container/home-main-container.component"
import './home.styles.css'

const Home = () => {
  return (
    <div className='home-container-main'>
    <HomeMain />
    <HomeLinkContainer />
    </div>
  )
}

export default Home