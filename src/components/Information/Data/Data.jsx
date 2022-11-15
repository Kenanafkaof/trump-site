import React from 'react'
import tweet from '../../../assets/trump tweet.jpg'
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
        <div className="scandal-card-socials">
            <div className="scandal-image">
                <img src="https://m.wsj.net/video/20201111/11112020gavotev2/11112020gavotev2_1920x1080.jpg" className='image-card' alt="" />
            </div>
            <div className="scandal-content">
                <div className="scandal-title">
                    Post 2020 Election Lawsuits
                </div>
                <div className="scandal-description">
                    Filed approximately 63 lawsuits surrounding vote counts and fraud. M
                </div>
            </div>
        </div>
        <div className="scandal-card-socials">
            <div className="scandal-image">
                <img src={tweet} className='image-card' alt="" />
            </div>
            <div className="scandal-content">
                <div className="scandal-title">
                    January 6
                </div>
                <div className="scandal-description">
                    Raiding of the capital which resulted in Trumps second impeachment regarding incitement of a riot/insurrection.
                </div>
            </div>
        </div>
        <div className="scandal-card-socials">
            <div className="scandal-image">
                <img src="https://www.politico.com/dims4/default/abe0846/2147483647/strip/true/crop/1500x1000+0+0/resize/630x420!/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2Fcf%2Ff8%2F7975adc448568f3c3ce9925cc9c3%2F200605-troops-gty-773.jpg" className='image-card' alt="" />
            </div>
            <div className="scandal-content">
                <div className="scandal-title">
                    Deployment of Federal Forces
                </div>
                <div className="scandal-description">
                    Trump deployed federal troops in order to suppress "rioting" after George Floyd.
                </div>
            </div>
        </div>
    </div>
  )
}

export default Data