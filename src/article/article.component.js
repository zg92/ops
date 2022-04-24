import ArticleAuthor from '../article-author/article-author.component';
import ArticleContent from '../article-content/article-content.component';
import './article.styles.css'

const Article = ({ article }) => {

  return (
    <div>
    <ArticleAuthor />
    <ArticleContent />
    </div>
  )
}

export default Article;
