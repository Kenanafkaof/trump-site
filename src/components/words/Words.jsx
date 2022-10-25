import React from 'react'
import './word.scss'
import ChartData from '../Chart/ChartData'
const Words = (props) => {
  const words = props.words
  return (
    <div className='words-wrapper'>
        <div className="words-image">
            <img src="https://i0.wp.com/news.northeastern.edu/wp-content/uploads/2022/07/donald_trump_1400.jpg?fit=1400%2C933&ssl=1" alt="Trump Silly" className="words-image-main" />
        </div>
        <div className="centered-words">
            <h1 className='header-title'>Most Common Words</h1>
            <ChartData words={words}/>
        </div>
</div>
  )
}

export default Words