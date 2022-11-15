import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './return.scss'
const Return = () => {
  return (
    <div className="back-home" onClick={event => window.location.href = "/"}>
        <ArrowBackIcon className="back-arrow" />
    </div>
  )
}

export default Return