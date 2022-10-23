import React from 'react'
import './stats.scss'

const Stats = (props) => {
    const statistics = props.news
  return (
    <div className='stats-wrapper'>
        <div className="positive-wrapper">
            <span className="descriptor">Positive</span>
            <span className="positive">{statistics.positive}</span>
        </div>
        <div className="neutral-wrapper">
            <span className="descriptor">Neutral</span>
            <span className="neutral">{statistics.neutral}</span>
        </div>
        <div className="negative-wrapper">
            <span className="descriptor">Negative</span>
            <span className="negative">{statistics.negative}</span>
        </div>
    </div>
  )
}

export default Stats