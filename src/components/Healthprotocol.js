import React from 'react'
import Dresscode from '../assets/images/dresscode.jpg'
function Healthprotocol () {
  return (
    <div id='healthprotocol' className='healthprotocol section-padding bg-pink'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            <span className='raman-title-meta'>Reminders</span>
            <h2 className='raman-title'></h2>
          </div>
        </div>
        <div className='row bord-box bg-img' data-background='images/1.jpg'>
          <div className='edit-align col-md-4 item-box'>
            <h2 className='custom-font numb'>01</h2>
            <h6 className='title'></h6>
            <p>
            For the safety and comfort of all our guests and in compliance with the authorities in our area, we respectfully request all guests to wear their face masks at all times.
            </p>
          </div>
          <div className='edit-align col-md-4 item-box'>
            <h2 className='custom-font numb'>02</h2>
            <h6 className='title'></h6>
            <p>
            Dress code: Strictly formal<br/>
            Gentlemen: Barong (preferred)<br/>
            Ladies: Long gown
            <div className='whenwhere-img'>
              {' '}
              <img className='edit-img' src={Dresscode} alt='' />
            </div>
            </p>
          </div>
          <div className='edit-align col-md-4 item-box'>
            <h2 className='custom-font numb'>03</h2>
            <h6 className='title'></h6>
            <p>
            Help us document our special day by tagging us using our hashtag.
            <span className='emphasized'>#AMANDAsMONCHoice</span>
            </p>
          </div>
          {/* <div className='col-md-3 item-box'>
            <h2 className='custom-font numb'>04</h2>
            <h6 className='title'>Vaccination Card</h6>
            <p>
              text
            </p>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Healthprotocol
