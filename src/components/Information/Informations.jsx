import React from 'react'
import pewdata from '../../assets/pewdata.jpg'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import difference from '../../assets/difference.jpg'
import './information.scss'
import Data from './Data/Data';
import Return from '../Return/Return';
const Informations = () => {
  return (
    <div className='informationWrapper'>
        <div className="main-header">
            <div className="header-data">
                <img src="https://www.fairobserver.com/wp-content/uploads/2020/03/Social-media-4.jpg" alt="Pew Data" className='pew-research' />
            </div>
            <div className="header-details">
                <h1 className='pew-header-text'>More Scandals & Polarization</h1>
            </div>
        </div>
        <main>
            <Data />
            <div className="quotes">
            <div className="quote-wrapper">
                <div className="quoteBlock">
                    <div className="quoteText">
                        <FormatQuoteIcon class="start-quote" />
                        <p className="quote">
                        <mark className='mark-highlight'>Buzzwords are privileged over reasonable and complex arguments. Short videos with outrageous and uncomplicated claims will gain more traction than longer videos discussing more detailed evidence and viewpoints</mark>
                        </p>
                        <FormatQuoteIcon class="end-quote"/>
                    </div>
                </div>
                <div className="quoteBlock">
                    <div className="quoteText">
                        <FormatQuoteIcon class="start-quote" />
                        <p className="quote">
                        <mark className='mark-highlight'>But in reality, the TikTok algorithm is similar or arguably worse in creating an echo chamber of ideas, because there are no journalistic standards or accountability, unlike traditional news media</mark>
                        </p>
                        <FormatQuoteIcon class="end-quote"/>
                    </div>
                </div>
                <div className="quoteBlock">
                    <div className="quoteText">
                        <FormatQuoteIcon class="start-quote" />
                        <p className="quote">
                        <mark className='mark-highlight'>TikTok trolled on Trump's effort to rally after they humiliated him by requesting more than 1 million tickets for the event, and only 6,000 people showed up. For the leftist political TikTok, this was a rather satisfying victory</mark>
                        </p>
                        <FormatQuoteIcon class="end-quote"/>
                    </div>
                </div>
            </div>
            </div>
            <Return />
        </main>
    </div>
  )
}

export default Informations