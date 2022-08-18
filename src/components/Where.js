import React from 'react'
import where1 from '../assets/images/where-1.jpg'
import where2 from '../assets/images/glenns.jpg'
import where3 from '../assets/images/where-3.jpg'
function Where () {
  return (
    <div id='whenwhere' className='whenwhere section-padding bg-pink'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            {' '}
            <span className='raman-title-meta'>Questions</span>
            <h2 className='raman-title'>When & Where</h2>{' '}
          </div>
        </div>
        <div className='row'>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where1} alt='' />
            </div>
            <div className='content'>
              <h5>Wedding Ceremony</h5>
              <p>
                <i className='ti-location-pin'></i> Text
              </p>
              <p>
                <i className='ti-time'></i> <span>Time</span>
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where2} alt='' />
            </div>
            <div className='content'>
              <h5>Weddding Party</h5>
              <p>
                <i className='ti-location-pin'></i> Text
              </p>
              <p>
                <i className='ti-time'></i> <span>Time</span>
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where3} alt='' />
            </div>
            <div className='content'>
              <h5>Accomodations</h5>
              <p>
                <i className='ti-direction-alt'></i> Text
              </p>
              <p>
                <i className='ti-direction'></i> Text
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Where
