import React from 'react';
import "./programCards.css"

function ProgramCards(props) {
  return (
    <div className='card'>
        <img src={props.image} alt='Logo' className='cardImage' />
        <h1 className='cardHead'>{props.heading}</h1>
        <p className='cardPara'>{props.text}</p>
    </div>
  )
}

export default ProgramCards