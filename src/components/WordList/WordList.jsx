import React from 'react'
import './list.scss'
import DividedWords from '../ListIndex/DividedWords'
const WordList = (props) => {
    const words = props.words
  return (
    <div className='word-list-wrapper'>
        <div className="heading-main">
            <div className="heading-image-container">
                <img src="https://www.politico.com/dims4/default/8b92a22/2147483647/strip/true/crop/1160x773+0+0/resize/1290x860!/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F32%2F02%2Fb235da514e03a14d66c1e0154b55%2F220105-donald-trump-getty-773.jpg" alt="Donald Trump" className="trump-image" />
            </div>
            <div className="centered-stats">
                <h1 className='header-title'>Donald Trump Stats</h1>
                <div className="list-index">
                    <DividedWords words={words}/>
                </div>
            </div>
        </div>
</div>
  )
}

export default WordList