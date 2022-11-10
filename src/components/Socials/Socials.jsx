import React from 'react'
import './socials.scss'
import { TikTok, } from "react-tiktok";
import Tweet from './Tweet/Tweet';
import TwitterIcon from '@mui/icons-material/Twitter';
import VideocamIcon from '@mui/icons-material/Videocam';
import {useEffect, useState} from 'react'
const Socials = () => {
  const [media, setMedia] = useState('twitter')
  const urls = [{
    "url": "https://www.tiktok.com/@ezra_martin097/video/6891896411818937605"
  },
  {
    "url": "https://www.tiktok.com/@nbata1776/video/7026484131559263494?is_copy_url=1&is_from_webapp=v1", 
  }, 
  {
    "url": "https://www.tiktok.com/@republicancontenthouse/video/6917405657176083717?is_copy_url=1&is_from_webapp=v1&lang=en&q=trump%202020&t=1668018298993"
  }
  ]
  return (
    <div className='socialsWrapper'>
        {media === "twitter" &&
          <div className="tweets">
            <Tweet />
          </div>
        }
        {media === "tiktok" &&
        <>
          <div className="header-tiktok">
              <VideocamIcon className='tweet-header-icon'/> <h1 className="tweets-header">Tik Tok Polarization</h1>
          </div>
          {urls.map((tiktok, i) =>
            <div className="tiktoks" key={i}>
              <TikTok url={tiktok.url} className='fyp'/>
            </div>
          )}
        </>
        }
        <div className="pagination">
          <div className={`twitter-button page ${media === "twitter" ? "active" : ""}`} onClick={() => setMedia("twitter")}>
            <TwitterIcon />
            View Tweets
          </div>
          <div className={`tiktok-button page ${media === "tiktok" ? "tiktok-active" : ""}`} onClick={() => setMedia("tiktok")}>
            <VideocamIcon />
            View Tik Toks
          </div>
        </div>
    </div>
  )
}

export default Socials