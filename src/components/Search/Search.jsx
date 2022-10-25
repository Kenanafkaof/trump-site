import React from 'react'
import './search.scss'
import SearchIcon from '@mui/icons-material/Search';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CircularProgress from '@mui/material/CircularProgress';
import {useEffect, useState} from 'react'
import MachineData from '../machine/MachineData';
import ChartData from '../Chart/ChartData'

const Search = () => {
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')
    const [news, setNews] = useState([])
    const [words, setWords] = useState([])
    function getSearch(query) {
        setLoading(true)
        const search = query
        fetch(`https://trump-backend.herokuapp.com/deepsearch?q=${search.toLowerCase()}`)
          .then(async response => {
              const data = await response.json();
  
              // check for error response
              if (!response.ok) {
                  const error = (data && data.message) || response.statusText;
              }
  
              setNews(data['statistics'])
              setWords(data['words'])
              setLoading(false)
          })
      }
  return (
    <div className='search-wrapper'>
        <div className="heading-main">
            <div className="heading-image-container">
                <img src="https://i.insider.com/5e0bcb28855cc2725e65ce97?width=700" alt="Donald Trump" className="trump-image" />
            </div>
            <div className="centered-stats">
                <h1 className='search-title'>Machine Learning Application</h1>
                <div className="search-bar">
                    <NewspaperIcon className="search-icon" />
                    <input type="text" className="search" placeholder='Mar-a-Lago' onChange={e => setSearch(e.target.value)}/>
                    <button className="search-button" onClick={() => getSearch(search)}><SearchIcon className='search-button-icon'/></button>
                </div>
                
                {loading === true &&
                    <div className="loading-search">
                        <CircularProgress color='inherit' className='loader-search'/>
                        <span className="loading-text">Searching...</span>
                    </div>
                }
                {loading === false &&
                <>
                    {news.length != 0 &&
                        <div className="search-results">
                            <MachineData machine={news}/>
                            <div className="search-graph">
                                <ChartData words={words} />
                            </div>
                        </div>
                    }
                </>
                }

            </div>
        </div>
    </div>
  )
}

export default Search