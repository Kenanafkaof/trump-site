import React from 'react'
import './data.scss'

const Data = () => {
  return (
    <div className='scandal-wrapper'>
        <div className="scandal-card-socials">
            <div className="scandal-image">
                <img src="https://cdn.britannica.com/40/211840-050-8DA98F44/Volodymyr-Zelensky-Ukraine-President-2019.jpg" className='image-card' alt="" />
            </div>
            <div className="scandal-content">
                <div className="scandal-title">
                    Ukraine Scandal
                </div>
                <div className="scandal-description">
                    Coercion of Ukraine into providing negative narrative surrounding Joe Biden.
                </div>
            </div>
        </div>
    </div>
  )
}

export default Data