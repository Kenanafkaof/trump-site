import React from 'react'
import Scandals from '../components/Scandals/Scandals'
import Socials from '../components/Socials/Socials'

const Scandalslisted = () => {
  return (
    <div className='scandals-page'>
        <Socials />
        <Scandals />
    </div>
  )
}

export default Scandalslisted