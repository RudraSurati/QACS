import React from 'react'
import "./hs.css"
import Navbar from '../../components/navbar';

const HsDetails = (props) => {
    return (
        <div className='hsCard'>
            <div className="hsCS">
                <h1 className='hsCH'>{props.heading}</h1>
                <h1 className='person'>{props.person}</h1>
                <h2 className='motto'>Motto - {props.motto}</h2>
                <h2 className='Date'>{props.date}</h2>
            </div>
        </div>
    )
}

function Hs() {
  return (
    <>
        <Navbar />
        <div className='cards'>
            <HsDetails heading="Blue House" person="Dr. A.P.J Abdul Kalam" motto="Dedication" date="October 15"/>
            <HsDetails heading="Green House" person="Swami Vivekanand" motto="Love" date="January 12"/>
            <HsDetails heading="Red House" person="Mother Teresa" motto="Charity" date="August 26"/>
            <HsDetails heading="White House" person="Mother Veronica" motto="Sacrifice" date="October 01"/>
            <HsDetails heading="Yellow House" person="Mahatma Gandhi" motto="Peace" date="October 02"/>
        </div>
    </>
  )
}

export default Hs;