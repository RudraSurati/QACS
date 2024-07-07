import React from 'react';
import './message.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeftAlt } from '@fortawesome/free-solid-svg-icons';
import profile from '../images/profile.jpg'

function Message(props) {
  return (
    <div className='messageBox'>
        <FontAwesomeIcon icon={faQuoteLeftAlt} className='quote'/>
        <p className="rText">{props.text}</p> {/* 200 max. words */}
        <div className="profileInfo">
            <img src={profile} alt="Profile" className='PII' />
            <div className='PIN'>
                <p className='PINN'>{props.name}</p>
                <p className='PINC'>{props.occupation}</p>
            </div>
        </div>
    </div>
  )
}

export default Message;