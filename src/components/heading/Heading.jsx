import React from 'react'
import Stats from '../stats/Stats'
import {useEffect, useState} from 'react'
import './heading.scss'
const Heading = (props) => {
    const news = props.news
    const loading = props.loading
  return (
    <div className='header-wrapper'>
        <div className="heading-main">
            <div className="heading-image-container">
                <img src="https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F220808210241-donald-trump-file-080622.jpg" alt="Donald Trump" className="trump-image" />
            </div>
            <div className="centered-stats">
                <h1 className='header-title'>Donald Trump Stats</h1>
                {loading === true &&
                <>
                    <div className="loading">
                        Loading data...
                    </div>
                </>
                }
                {loading === false &&
                    <Stats news={news}/>
                }
            </div>
        </div>
    </div>
  )
}

export default Heading