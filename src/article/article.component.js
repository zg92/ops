import ArticleAuthor from '../article-author/article-author.component';
import ArticleContent from '../article-content/article-content.component';
import ArticleRecommendationAuthor from '../article-recommendation-author/article-recommendation-author.component';
import ArticleRecommendationLink from '../article-recommendation-link/article-recommendation-link.component';
import './article.styles.css'

const Article = ({ article }) => {

  return (
    <div className='article-container'>
    <div className='article-content'>
    <ArticleAuthor />
    <ArticleContent />
    </div>
    <div className='recommendations-container'>
      <ArticleRecommendationAuthor />
      <div className='recommendations-text'>More Articles By Zach</div>
      <ArticleRecommendationLink />
      <ArticleRecommendationLink />
      <ArticleRecommendationLink />
      <div className='recommendations-text'>Articles You Might Also Like</div>
      <ArticleRecommendationLink />
      <ArticleRecommendationLink />
      <ArticleRecommendationLink />
      <ArticleRecommendationLink />
      <ArticleRecommendationLink />
    </div>
    </div>
  )
}

export default Article;
