import React from 'react'
import './selection.scss'
import InfoIcon from '@mui/icons-material/Info';
import BarChartIcon from '@mui/icons-material/BarChart';
import NewspaperIcon from '@mui/icons-material/Newspaper';
const Selection = () => {
  return (
    <div className="selection">
        <div className="selection-items">
            <div className='selectionWrapper'>
                <div className="selection-items">
                    <div className="buttons">
                        <div className="machine-learning pagebutton" onClick={event =>  window.location.href='/analysis'}>
                            <div className="card-image">
                                <img src="https://static01.nyt.com/images/2017/05/22/opinion/22STONE-promo/22STONE-promo-superJumbo.jpg" alt="" className="card-background" />
                            </div>
                            <div className="card-content">
                                <BarChartIcon className='page-icon'/>
                                <span className="page-wrapper">Machine Learning</span>
                            </div>
                        </div>
                        <div className="machine-learning pagebutton" onClick={event =>  window.location.href='/information'}>
                            <div className="card-image">
                                <img src="https://media.newyorker.com/photos/5f59064636b6ac443a7ac2d1/1:1/w_2800,h_2800,c_limit/halpern-trump-app.jpg" alt="" className="card-background" />
                            </div>
                            <div className="card-content">
                                <InfoIcon className='page-icon'/>
                                <span className="page-wrapper">Information</span>
                            </div>
                        </div>
                        <div className="machine-learning pagebutton" onClick={event =>  window.location.href='/scandals'}>
                            <div className="card-image">
                                <img src="https://progressive.org/downloads/12127/download/Collage.jpg?cb=aab7bd5d246612eed6477986becb238d" alt="" className="card-background" />
                            </div>
                            <div className="card-content">
                                <NewspaperIcon className='page-icon'/>
                                <span className="page-wrapper">Scandals</span>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            <img src="https://c.files.bbci.co.uk/15431/production/_126298078_donaldtrump-3.jpg" alt="" className="background" />
        </div>
    </div>
    
  )
}

export default Selection