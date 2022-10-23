import React from 'react'
import Heading from '../components/heading/Heading'
import Words from '../components/words/Words'
import Machine from '../components/MachineLearning/Machine'
import {useEffect, useState} from 'react'
import Loading from '../Loader/Loading';
import WordList from '../components/WordList/WordList'
const Home = () => {
  const [loading, setLoading] = useState(true)
  const [news, setNews] = useState([])
  const [words, setWords] = useState([])

  useEffect(() => {
    setLoading(true)
    fetch(`http://127.0.0.1:5000/trump`)
    .then(async response => {
        const data = await response.json();

        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
        }

        setNews(data['statistics'])
        setWords(data['words'])
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
          <Heading news={news} loading={loading}/>
          <Machine machine={news}/>
          <Words words={words}/>
          <WordList words={words}/>
        </>
        }
        
    </div>
  )
}

export default Home