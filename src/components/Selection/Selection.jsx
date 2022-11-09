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
                <div className="curved-background__curved"></div>
                <div className="selection-items">
                    <h1 className='welcome-header'>Welcome - Please Select a Page</h1>
                    <div className="buttons">
                        <div className="machine-learning pagebutton" onClick={event =>  window.location.href='/analysis'}>
                            <BarChartIcon className='page-icon'/>
                            <span className="page-wrapper">Machine Learning</span>
                        </div>
                        <div className="machine-learning pagebutton">
                            <InfoIcon className='page-icon'/>
                            <span className="page-wrapper">Information</span>
                        </div>
                        <div className="machine-learning pagebutton" onClick={event =>  window.location.href='/scandals'}>
                            <NewspaperIcon className='page-icon'/>
                            <span className="page-wrapper">Scandals</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Selection