import React from 'react'
import Navbar from '../../components/navbar';
import './home.css'

function HomeHistory(props) {
  return (
    <>
      <Navbar />
      <div class='congHead'>
        <h1 class='chh1'>{props.head}</h1>
      </div>
      <div class='chdes'>
          <img src={props.image} class='chdImg'/>
          <div class='chtext'>
              <p class='cht1'>{props.first}</p>
              <p class='cht2'>{props.second}</p>
          </div>
      </div>
    </>
  )
}

export default HomeHistory;