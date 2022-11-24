import React from 'react'
import where1 from '../assets/images/church.jpeg'
import where2 from '../assets/images/glens.jpg'
import zoom from '../assets/images/zoom.jpg'
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
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where1} alt='' />
            </div>
            <div className='edit-align content'>
              <h5 className='raman-title-meta'>Ceremony</h5>
              <p>
                <span className='where-p'>St. John Nepomucene Parish, Mojica, Alfonso, Cavite</span>
              </p>
              <p>
              <span className='where-p'>Ceremony will start at 2pm</span>
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where2} alt='' />
            </div>
            <div className='edit-align content'>
              <h5 className='raman-title-meta'>Reception</h5>
              <p>
                <i className='ti-location-pin'></i> <span className='where-p'>33 Magallanes Drive, Tagaytay, Cavite</span>
              </p>
              <p>
                <i className='ti-time'></i> <span className='where-p'>Cocktails to follow at 5pm</span>
              </p>
            </div>
          </div>

          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={zoom} alt='' />
            </div>
            <div className='edit-align content'>
              <h5 className='raman-title-meta'>Zoom</h5>
              <a className='download' href='https://us02web.zoom.us/j/81900825676?pwd=bGc1UnNtSm5qaHp4RlZWTk5qQzduQT09&fbclid=IwAR33x3t1Tn5Dqv3CBNDzn8_HyzfS2LAKiATe2zCLu290um9dptfPjTaktSY#success'>
                <i className='download'></i> <span className='download'>Zoom Link</span>
              </a>
              <p>
                <i className='ti-time'></i> <span className='where-p'>Meeting ID: 819 0082 5676</span>
              </p>
              <p>
              <i className='ti-time'></i> <span className='where-p'>Passcode: Wedding</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Where
