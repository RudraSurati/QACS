import React from 'react'
import './sm.css'
import Navbar from '../../components/navbar'

function Sm() {
  return (
    <>
        <Navbar />
        <h1 className='SmHead'>Our Motto</h1>
        <div className="Sm">
            <div className='love'>
                <h1 className='cHead'>Love</h1>
                <br />
                <p className='cPara'>Love is the motivating factor that characterizes all our actions. Genuine love is that which gives itself for the sake of others without any expectation or hidden motive. One is able to give oneself and feel happy for having touched and enriched someone else.</p>
                <div className='smOverlay'></div>
            </div>
            <div className='service'>
                <h1 className='cHead'>Service</h1>
                <div className='smOverlay'></div>
                <br />
                <p className='cPara'>Service is the result of all our actions. Since all our actions stem from the deeper commitment and love for God, the actions are permeated by that divine love and therefore becomes service to humanity. Service is an outcome of a selfless love and genuine concern for human needs.</p>
            </div>
            <div className='sacrifice'>
                <h1 className='cHead'>Sacrifice</h1>
                <div className='smOverlay'></div>
                <br />
                <p className='cPara'>Sacrifice is a meaningful way of life by which we are able to consider the needs of others around us. We sacrifice something so that someone else can have a better life. Sacrifice involves giving of oneself, and not merely giving from that - ‘extra’ of one’s abundance. Sacrifice means giving up for the sake of others when it really hurts. It involves imparting of one’s knowledge, wealth and time when one perceives the need.</p>
            </div>
        </div>
    </>
  )
}

export default Sm