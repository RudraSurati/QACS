import React from 'react'
import Navbar from '../../components/navbar'
import './theme.css'
import theme from '../../images/Theme.jpg'

function Theme() {
  return (
    <div className="themeDiv">
        <Navbar />
        <div className='theme'>
            <img src={theme} alt='back' className='themeImg'/>
        </div>
    </div>
  )
}

export default Theme