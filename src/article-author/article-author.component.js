import './article-author.styles.css'
import image from '../assets/user-icon.png'

const ArticleAuthor = ({ article }) => {

  return (
   <div className='article-item-wrapper'>
      <img className='author-icon' src={image} />
     <div className='author-info-container'>
    <div className='author-name'>Zach Gordy</div>
    <div className='date'>Apr 19</div>  
    </div> 
    </div>
  )
}

export default ArticleAuthor;
