import image from '../assets/user-icon.png'
import './article-recommendation-author.style.css'

const ArticleRecommendationAuthor = () => {
  return (
    <div className='recommendation-author-container'>
    <img className='recommendation-author-icon' src={image} />
    <div className='recommendation-author-info-container'>
    <span className='recommendation-author-name'>Zach Gordy</span>
    <span className='recommendation-author-tagline'>Master of Ops</span>
    </div>
    </div>
  )
}

export default ArticleRecommendationAuthor