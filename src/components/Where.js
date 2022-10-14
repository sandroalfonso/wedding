import React from 'react'
import where1 from '../assets/images/church.jpeg'
import where2 from '../assets/images/glens.jpg'
import where3 from '../assets/images/summit.jpg'
import where4 from '../assets/images/wingate.jpg'
import where5 from '../assets/images/zoom.jpg'
function Where () {
  return (
    <div id='whenwhere' className='whenwhere section-padding bg-pink'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            {' '}
           
            <h2 className='raman-title'></h2>{' '}
          </div>
        </div>
        <div className='row'>
          <div className='item col-12 col-md-6'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where1} alt='' />
            </div>
            <div className='edit-align content'>
              <h5>Wedding Ceremony</h5>
              <p>
                <i className='ti-location-pin'></i> St. John Nepomucene Parish, Mojica, Alfonso, Cavite
              </p>
              <p>
                <i className='ti-time'></i> <span>Ceremony will start at 2pm</span>
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-6'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where2} alt='' />
            </div>
            <div className='edit-align content'>
              <h5>Wedding Party</h5>
              <p>
                <i className='ti-location-pin'></i> 33 Magallanes Dr, Tagaytay, Cavite
              </p>
              <p>
                <i className='ti-time'></i> <span>Cocktails to follow at 5pm</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Where
