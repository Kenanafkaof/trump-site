import React from 'react'

const MachineData = (props) => {
    const data = props.machine
    console.log(data)
  return (
    <div className='stats-wrapper'>
        <div className="positive-wrapper">
            <span className="descriptor">Positive</span>
            <span className="positive">{data.positive}</span>
        </div>
        <div className="negative-wrapper">
            <span className="descriptor">Negative</span>
            <span className="negative">{data.negative}</span>
        </div>
        <div className="neutral-wrapper">
            <span className="descriptor">Confidence</span>
            <span className="neutral">{data.confidence}</span>
        </div>
    </div>
  )
}

export default MachineData