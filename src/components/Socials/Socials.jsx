import React from 'react'
import './socials.scss'
import { TikTok, } from "react-tiktok";
import Tweet from './Tweet/Tweet';
import TwitterIcon from '@mui/icons-material/Twitter';
import VideocamIcon from '@mui/icons-material/Videocam';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import MenuIcon from '@mui/icons-material/Menu';
import {useEffect, useState} from 'react'
import Scandals from '../Scandals/Scandals';
const Socials = () => {
  const [media, setMedia] = useState('twitter')
  const [tiktok, setTiktok] = useState(0)
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
  const scandals = [{
		"title": "NOAA Leaders Privately Disowned Agencys Rebuke of Scientists Who Contradicted Trump",
		"image": "images/2020/02/01/us/politics/01DC-NOAA/merlin_160191879_7e3d66f7-3561-4384-b9ac-98676d1dcbbb-articleLarge.jpg",
		"description": "Newly released emails show officials at NOAA told the agencys scientists it did not approve or support a controversial agency statement issued after the president falsely said that Alabama was at risk from Hurricane Dorian."
	}, {
		"title": "Anticipating a Senate Vote to Acquit Trump",
		"image": "images/2020/01/31/opinion/31precedents/31precedents-articleLarge.jpg",
		"description": "Republican senators are condemned by readers as subservient and cowardly, while another chides Democrats for manufactured scandals."
	},
	{
		"title": "How the Supreme Court Is Quietly Enabling Trump",
		"image": "images/2020/06/17/opinion/17Vladeck/merlin_156586044_cb0823c2-3f4b-4eb2-8b79-18d505a603c9-articleLarge.jpg",
		"description": "Using emergency relief at the court, the administration has imposed controversial policies without a final determination of their legality."
	},
	{
		"title": "Is the Trump Campaign Colluding With Russia Again?",
		"image": "images/2020/10/20/opinion/19goldberg1/merlin_178650930_7fb3c9e7-e44f-4607-8f96-9870d9a9ef0b-articleLarge.jpg",
		"description": "Giulianis dirty tricks are the scandal, not Hunter Bidens hard drive."
	},
   {
		"title": "A Narrative Collapses as Trump Tweets: It Doesnt Really Matter",
		"image": "images/2020/01/13/us/politics/13dc-trump/merlin_166901625_9a5289c3-dbc9-4b27-8e71-9a34a0d69138-articleLarge.jpg",
		"description": "President Trump cited Maj. Gen. Qassim Suleimanis horrible past as possibly reason enough for the drone strike that killed him."
	}, {
		"title": "Schiff, Calling Trump Wrathful and Vindictive, Sees Tweet as a Threat",
		"image": "images/2020/01/26/us/politics/26dc-impeach/merlin_167788866_d0c7d542-de37-454a-8e72-d2d217ae32e5-articleLarge.jpg",
		"description": "In an extraordinary back-and-forth between a president and a congressman, President Trump warned that Representative Adam Schiff, the lead House impeachment manager, has not paid the price, yet."
	},
	{
		"title": "For Trump, Coronavirus Proves to Be an Enemy He Cant Tweet Away",
		"image": "images/2020/03/08/us/politics/08dc-memo/08dc-memo-articleLarge.jpg",
		"description": "A president who is at his strongest politically when he has a human target to attack has found it harder to confront a growing outbreak that has rattled the country."
	},
	{
		"title": "Trump Tweets and Golfs, but Makes No Mention of Viruss Toll",
		"image": "images/2020/05/24/us/politics/24dc-virus-trumptoll1/merlin_172793832_7456bbe5-e356-4e68-a0e0-529efc30da97-articleLarge.jpg",
		"description": "Coronavirus deaths in the United States approached a staggering 100,000, a number the president once predicted would never be reached."
	}, {
		"title": "Trumps False Tweets, and Twitters Response",
		"image": "images/2020/05/26/us/politics/29newsquiz-trump/merlin_172864197_21a6fd91-9ff4-4de7-a1aa-107735197220-articleLarge.jpg",
		"description": "Readers discuss the presidents claim that a prominent TV host was guilty of murder and Twitters refusal to remove it and other untrue tweets."
	}, {
		"title": "Twitter Adds Warnings to Trump and White House Tweets, Fueling Tensions",
		"image": "images/2020/05/29/world/29trump-twitter-1/merlin_172931115_a46552ea-338d-4dcd-b9d1-33132a437045-articleLarge.jpg",
		"description": "Twitter said the tweets, which implied that protesters in Minneapolis could be shot, glorified violence  the first time it had applied such warnings to any public figures posts."
	}, {
		"title": "How Trumps Tweets Cause Collateral Damage for Families Already in Pain",
		"image": "images/2020/05/28/us/politics/28trump-innocents/merlin_171799068_019c7d18-be22-4af7-9ced-cc4a946b9d5e-articleLarge.jpg",
		"description": "The presidents baseless insinuations about the death of Lori Klausutis reflect a callous pattern that can leave even ordinary people facing threats from his supporters long after he has moved on."
	},
	{
		"title": "Facebook and Twitter Must Do More About Trumps Tweets",
		"image": "images/2020/06/01/opinion/01bensingerWeb/merlin_172935999_edc533b5-fc87-46f3-8904-1768a313dd6f-articleLarge.jpg",
		"description": "Twitter is only bringing more attention to the presidents tweets, and Facebooks strategy has been to do nothing."
	}, {
		"title": "Twitter Labels Trump Tweet About Racist Baby as Manipulated Media",
		"image": "images/2020/06/18/us/politics/18dc-trump-twitter/merlin_173678022_0dd4d165-33a8-4875-ba58-0dcf6008cc9a-articleLarge.jpg",
		"description": "It was the first time that Twitter had used that tag on one of the presidents messages."
	}, {
		"title": "Trumps Juneteenth Tweet: A Warning to Protesters at His Tulsa Rally",
		"image": "images/2020/06/19/us/politics/19TRUMP-TULSA/merlin_173591838_d15416cc-82d8-47a9-895a-784026b538e0-articleLarge.jpg",
		"description": "The president issued a thinly veiled threat to anyone planning to demonstrate at his campaign rally on Saturday, but drew no distinction between peaceful protesters and looters or lowlifes."
	}, {
		"title": "Another Tweet From Trump Gets a Label From Twitter",
		"image": "images/2020/06/23/business/23twitter/merlin_173833548_75db2f2a-c6ca-407f-b2c3-e000cd2085e3-articleLarge.jpg",
		"description": "The president threatened serious force if protesters tried to set up an autonomous zone in Washington, D.C., as they have in Seattle."
	}, {
		"title": "With Tweets, Videos and Rhetoric, Trump Pushes Anew to Divide Americans by Race",
		"image": "images/2020/06/23/us/politics/23trump-race/merlin_173833557_38360d4b-2d5c-4fa5-b91c-7ab2df2c74e5-articleLarge.jpg",
		"description": "President Trump is leaning hard into his decades-long habit of falsely portraying some black Americans as dangerous or lawless. And he is doing it during one of the most tumultuous periods in decades."
	}, {
		"title": "Trump Retweets Racist Video Showing Supporter Yelling White Power",
		"image": "images/2020/06/28/us/politics/28dc-trump-pix/28dc-trump-pix-articleLarge.jpg",
		"description": "The president later deleted the tweet, which once again showed his willingness to use social media to amplify some of the most hateful commentary of some of his followers, even at a moment of unrest."
	},
	{
		"title": "Trump Defends Delay the Election Tweet, Even Though He Cant Do It",
		"image": "images/2020/07/30/business/30elections-briefing-trump1/merlin_175067439_ab0ab0be-6b55-49cb-a733-09e64b3f07f0-articleLarge.jpg",
		"description": "Trailing badly in the polls, President Trump baselessly suggested that the November election would be fraudulent. Former President Barack Obama called for sweeping changes to expand voting rights."
	}, {
		"title": "More Than Just a Tweet: Trumps Campaign to Undercut Democracy",
		"image": "images/2020/07/31/us/31dc-trump-democracy/merlin_175135440_b6103548-fa0a-42e6-b8b4-8c47aa78ae3b-articleLarge.jpg",
		"description": "Floating the idea of delaying the election was the latest step in the presidents running effort to discredit the election, risking long-term damage to public trust in the system."
	},
	{
		"title": "Twitter Flags Trump Tweet for Dissuading Voting",
		"image": "images/2020/08/23/business/23twitter/merlin_171850677_23822a22-6c32-4d28-aef4-c0e0fe11abe6-articleLarge.jpg",
		"description": "The social media service hid the presidents post about ballot drop boxes, saying it violated Twitters election integrity rules."
	}, {
		"title": "Trumps Tweets on Troop Withdrawals Unnerve Pentagon",
		"image": "images/2020/10/14/us/politics/14dc-trump-missions/merlin_178119129_18ba7675-684a-456a-97ea-317952de469e-articleLarge.jpg",
		"description": "The presidents demands to draw down forces in Afghanistan, Somalia and Syria seek to fulfill a campaign promise. But officials warn rapid troop reductions could bolster adversaries."
	}, {
		"title": "Trump Officials Tweet, and Its Removal, Set Off Flurry of Anti-Mask Posts",
		"image": "images/2020/10/19/reader-center/19burst-sneeze/19burst-sneeze-articleLarge-v2.jpg",
		"description": "The tweet, from Dr. Scott Atlas, one of the presidents top science advisers, was debunked by many experts and deleted by Twitter."
	},
	{
		"title": "After Twitter Labels Trumps Tweet About Pennsylvania, Its Spread Slows",
		"image": "images/2020/11/03/business/03distortions-twitterlabel-promo/merlin_179489955_d40cde05-68c2-4dc5-aa10-5fca2d483a8d-articleLarge.jpg",
		"description": "Twitters act curtailed the distribution of President Trumps tweet about absentee ballots, according to an analysis."
	}, {
		"title": "Twitter Has Labeled 38% of Trumps Tweets Since Tuesday",
		"image": "images/2020/11/05/business/05distortion-trump/merlin_179558940_412d4692-a276-4ff2-ae74-4e344279b8c1-articleLarge.jpg",
		"description": "The company had said it would closely monitor posts that contain misinformation about the election or prematurely declare an outcome."
	}, {
		"title": "Trump has amplified voting falsehoods in over 300 tweets since election night.",
		"image": "images/2020/11/16/us/politics/16distortions-blog-trumplies1/merlin_179951340_a6253953-81a5-490c-8594-8f41c9914ff7-articleLarge.jpg",
		"description": "The president has mischaracterized the ballot counting process, falsely claimed victory and lodged baseless accusations of fraud."
	}, {
		"title": "The End of Trumps Reign of Tweet Terror Is Near",
		"image": "images/2020/11/17/opinion/17swisher-01/merlin_167140671_927aa26e-700e-49ca-93d8-867d4716d533-articleLarge.jpg",
		"description": "The presidents magic social media wand will soon be powerless."
	}, {
		"title": "Since Election Day, a Lot of Tweeting and Not Much Else for Trump",
		"image": "images/2020/11/23/us/trump-calendar-promo-1606172604599/trump-calendar-promo-1606172604599-articleLarge.png",
		"description": "President Trump has tweeted an average of 28 times a day in the last three weeks, mostly lamenting the results of the election, even as the coronavirus pandemic reached new heights across the country."
	}, {
		"title": "Jimmy Kimmel Rags on Trump for His Randy Quaid Retweets",
		"image": "images/2020/11/25/arts/25latenight/25latenight-articleLarge-v4.jpg",
		"description": "Lets just say he makes Gary Busey look like Dr. Fauci, Kimmel said of the pro-Trump actor after the president retweeted five of his posts on Tuesday."
	}
  ] 
  
  function checkLoad() {
    setTiktok(tiktok+1)
    console.log(tiktok)
  }
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
              <TikTok url={tiktok.url} onLoad={() => checkLoad()} className='fyp'/>
            </div>
          )}
        </>
        }
        {media === "scandals" &&
        <>
          <div className="header-scandals">
              <NewspaperIcon className='tweet-header-icon'/> <h1 className="tweets-header">2020 Scandal Analysis</h1>
          </div>
          <Scandals data={scandals}/>
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
          <div className={`scandals-button page ${media === "scandals" ? "scandals-active" : ""}`} onClick={() => setMedia("scandals")}>
            <NewspaperIcon />
            News Scandals
          </div>
          <div className={`page`} onClick={() => window.location.href="/"}>
            <MenuIcon />
            Back Home
          </div>
        </div>
    </div>
  )
}

export default Socials