import React from 'react'
import './word.scss'
import ChartData from '../Chart/ChartData'
const Words = (props) => {
  const words = props.words
  return (
    <div className='words-wrapper'>
        <div className="words-image">
            <img src="https://media.newyorker.com/photos/5fc812d465b1e636a7ab4baa/master/w_2560%2Cc_limit/Cassidy-TrumpGrift.jpg" alt="Trump Silly" className="words-image-main" />
        </div>
        <div className="centered-words">
            <h1 className='header-title'>Most Common Words</h1>
            <ChartData words={words}/>
        </div>
</div>
  )
}

export default Words