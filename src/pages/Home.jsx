import React from 'react'
import Heading from '../components/heading/Heading'
import Words from '../components/words/Words'
import Machine from '../components/MachineLearning/Machine'
import Search from '../components/Search/Search'
import {useEffect, useState} from 'react'
import Loading from '../Loader/Loading';
import WordList from '../components/WordList/WordList'
import Articles from '../components/Articles/Articles'

import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Return from '../components/Return/Return'

const Home = () => {
  const [loading, setLoading] = useState(true)
  const [news, setNews] = useState([])
  const [words, setWords] = useState([])
  const [articles, setArticles] = useState([])

  useEffect(() => {
    setLoading(true)
    fetch(`https://trump-backend.herokuapp.com/trump`)
    .then(async response => {
        const data = await response.json();

        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
        }

        setNews(data['statistics'])
        setWords(data['words'])
        setArticles(data['statistics']['articles'])
        setLoading(false)
    })
  }, [])


  return (
    <div className='home-wrapper'>
          {loading === true &&
          <>
            <div className="loading-wrapper">
            </div>
             <Loading />  
          </>
          }

        {loading === false &&
        <>
        <Fade>
          <Heading news={news} loading={loading}/>
          <Fade>
            <Machine machine={news}/>
          </Fade>
          <Slide left>
            <Words words={words}/>
          </Slide>
          <Zoom right>
            <WordList words={words}/>
          </Zoom>
          <Slide right>
            <Articles articles={articles}/>
          </Slide>
          <Fade>
            <Search />
          </Fade>
        </Fade>
        <Return />
        </>
        }
        
    </div>
  )
}

export default Home