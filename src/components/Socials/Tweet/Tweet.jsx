import React from 'react'

import TwitterIcon from '@mui/icons-material/Twitter';
import Like from '../Like/Like.jsx'
import './tweet.scss'
const Tweet = () => {
    const tweets = [{
        "content": "I will be leaving the great Walter Reed Medical Center today at 6:30 P.M. Feeling really good! Don’t be afraid of Covid. Don’t let it dominate your life. We have developed, under the Trump Administration, some really great drugs & knowledge. I feel better than I did 20 years ago!",
        "date": "October 5, 2020",
    },
    {
        "content": "Starting to get VERY high marks in our handling of the Coronavirus (China Virus), especially when compared to other countries and areas of the world. Now the Vaccines (Plus) are coming, and fast!",
        "date": "September 7, 2020"
    },
    {
        "content": "Crazy Joe Biden is trying to act like a tough guy. Actually, he is weak, both mentally and physically, and yet he threatens me, for the second time, with physical assault. He doesn’t know me, but he would go down fast and hard, crying all the way. Don’t threaten people Joe!",
        "date": "March 22, 2018"
    },
    {
        "content": "These are the things and events that happen when a sacred landslide election victory is so unceremoniously & viciously stripped away from great patriots who have been badly & unfairly treated for so long. Go home with love & in peace. Remember this day forever!",
        "date": "January 6, 2021"
    }
    ]


  return (
    <>  
        <div className="header">
            <TwitterIcon className='tweet-header-icon'/> <h1 className="tweets-header">Best Tweets</h1>
        </div>
        {tweets.map((tweet, i) =>
            <div className='tweet-wrapper'>
                <div className="tweet-main" key={i}>
                    <div className="profile-section">
                        <div className="image">
                            <img src="data:image/jpeg;base64,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" alt="" className="profile-image" />
                        </div>
                        <div className="profile-details">
                            <h2 className="poster">Donald Trump</h2>
                            <span className="username">@RealGDonny</span>
                        </div>
                    </div>
                        
                    <div className="tweet-content">
                        {tweet.content}
                    </div>
                    <div className="reactions">
                        <div className="date">
                            {tweet.date}
                        </div>
                        <div className="right">
                            <Like />
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        )}
    </>
    
  )
}

export default Tweet