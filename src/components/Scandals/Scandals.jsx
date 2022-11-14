import { ArticleOutlined } from '@mui/icons-material'
import {useEffect, useState} from 'react'
import './scandals.scss'


const Scandals = (props) => {
  const articles = props.data
  const [data, setData] = useState(articles)
  useEffect(() => {
    console.log(data.title)
  }, [])
  
  return (
    <div className='scandalsWrapper'>
      <div className="scandalWrapper">
        {data.map((article, i) =>
          <div className="scandalCard">
            <div className="articleImage"><img src={"https://static01.nyt.com/" + article.image} alt={article.title} className="article-image"/></div>
            <div className="text-wrapper">
              <div className="article-title">{article.title}</div>
              <div className="article-description">{article.description}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Scandals