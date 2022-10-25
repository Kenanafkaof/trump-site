import React from 'react'

const MachineData = (props) => {
    const data = props.machine

  return (
    <div className='stats-wrapper'>
        <div className="positive-wrapper">
            <span className="descriptor">Positive</span>
            <span className="positive">{data.machine_positive}</span>
        </div>
        <div className="negative-wrapper">
            <span className="descriptor">Negative</span>
            <span className="negative">{data.machine_negative}</span>
        </div>
        <div className="neutral-wrapper">
            <span className="descriptor">Neutral</span>
            <span className="neutral">{data.machine_neutral}</span>
        </div>
    </div>
  )
}

export default MachineData