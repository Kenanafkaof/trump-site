import React from 'react'
import {useEffect, useState} from 'react'
import './articles.scss'
import ArticleCard from '../Card/ArticleCard'
const Articles = (props) => {
    const articles = props.articles
    const [desktop, setDesktop] = useState(true)
    useEffect(() => {
        if (window.innerWidth < 450) {
            setDesktop(false)
        }
        console.log(desktop)
    }, [])
  return (
    <div className='header-wrapper'>
        <div className="heading-main-articles">
            {desktop === true &&
            <>
                <div className="heading-image-container">
                    <img src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-01/220127-donald-trump-mn-1120-a0a284.jpg" alt="Donald Trump" className="trump-image" />
                </div>
                <div className="centered-stats">
                    <h1 className='header-title'>Top Stories</h1>
                    <div className="articles-container">
                        <ArticleCard articles={articles}/>
                    </div>
                </div>
            </>
            }
            {desktop === false &&
                <div className="centered">
                    <h1 className='header-title'>Top Stories</h1>
                    <div className="articles-container">
                        <ArticleCard articles={articles}/>
                    </div>
                </div>
            }
            
        </div>
    </div>
  )
}

export default Articles