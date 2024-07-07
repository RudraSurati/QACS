import React from 'react'
import './vm.css'
import Navbar from '../../components/navbar'

function Vm() {
  return (
    <>
        <Navbar />
        <h1 className='vmHead'>Our Vision and Mission</h1>
        <div className="vm">
            <div className='vision'>
                <h1 className='vHead'>Vision</h1>
                <br />
                <div className='vmOverlay'></div>
                <p className='vPara'>Through  comprehensive  well programmed training, we aim at molding our students to be integrated with a well-balanced  personality,  having  a strong character, imbued with love and compassion towards others, courageous and outreaching in moments of crisis, astute and versatile in leadership roles.</p>
            </div>
            <div className='mission'>
                <h1 className='mHead'>Mission</h1>
                <div className='vmOverlay'></div>
                <br />
                <p className='mPara'>Our mission is to train and develop every Angelite with strong spiritual and ethical values  combined  with  an  all-round training, focusing on analytical thinking, and  creative  output  by  using  multi-disciplinary skills to face the ever changing, challenging and competitive world.</p>
            </div>
        </div>
    </>
  )
}

export default Vm