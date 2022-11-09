import React from 'react'
import './socials.scss'
import { TikTok, } from "react-tiktok";
import Tweet from './Tweet/Tweet';

const Socials = () => {
  return (
    <div className='socialsWrapper'>
        <div className="tweets">
            <Tweet />
        </div>
        <div className="social-items">
            <TikTok url="https://www.tiktok.com/@ezra_martin097/video/6891896411818937605" />
        </div>
    </div>
  )
}

export default Socials