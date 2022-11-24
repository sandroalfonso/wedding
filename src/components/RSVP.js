import React from 'react'
import Popup from './Popup'
import SecondModal from './SecondModal';
import Confirm from './Confirm';
import zoom from '../assets/images/zoom.jpg'
function RSVP () {
  return (
    <div
      id='rsvp'
      className='section-padding bg-img'
    >
      <div className='container'>
        <div className='row'>
        <div className='item col-12 col-md-6'>
            <div className='whenwhere-img'>
              {' '}
              <img src={zoom} alt='' />
            </div>
            <div className='edit-align content'>
              <h5>Summit Ridge, Tagaytay</h5>
              <p>
                <i className='ti-direction-alt'></i>
              </p>
              <p>
                <i className='ti-direction'></i> Landline: (02) 8 397-0111 <br/>
                  Mobile (GLOBE): 09178887788<br/>
      
                  Mobile (SMART): 09988887788 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RSVP
