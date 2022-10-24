import React from 'react'
import MachineData from '../machine/MachineData'
import './machine.scss'
const Heading = (props) => {
    const machine = props.machine
    const loading = props.loading
  return (
    <div className='header-wrapper'>
        <div className="heading-main">
            <div className="heading-image-container">
                <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1024-512,f_auto,q_auto:best/newscms/2021_01/3440897/210108-donald-trump-cs-636p.jpg" alt="Donald Trump" className="trump-image" />
            </div>
            <div className="centered-stats">
                <h1 className='header-title'>Machine Learning</h1>
                <MachineData machine={machine}/>
            </div>
        </div>
    </div>
  )
}

export default Heading