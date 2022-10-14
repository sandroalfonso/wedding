import React from 'react'
import where1 from '../assets/images/church.jpg'
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
                <i className='ti-location-pin'></i> St. John Nepomucene Parish Church - III, Alfonso, Cavite (Diocese of Imus)
              </p>
              <p>
                <i className='ti-time'></i> <span>Wedding starts at 2pm</span>
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
                <i className='ti-location-pin'></i> 33 Magallanes Dr, Tagaytay, Cavite
              </p>
              <p>
                <i className='ti-time'></i> <span>Cocktails starts at 5pm</span>
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where5} alt='' />
            </div>
            <div className='content'>
              <h5>Virtual Celebration</h5>
              <p>
                <i className='ti-direction-alt'></i>
                <a className='download' href='https://us02web.zoom.us/j/81900825676?pwd=bGc1UnNtSm5qaHp4RlZWTk5qQzduQT09&fbclid=IwAR31Q3BF6RW1PrDj8uUulGqpusf8p8gNsQLPsiOXjgLXQ0HWWd6uHSCVnok#success'>Ramon and Amanda Zoom Link</a>
              </p>
              <p>
                <i className='ti-direction'></i> 
                Passcode: Wedding
              </p>
            </div>
          </div>



          <div className='item col-12 col-md-6'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where3} alt='' />
            </div>
            <div className='content'>
              <h5>Hotel 1</h5>
              <p>
                <i className='ti-direction-alt'></i> Summit Ridge, Tagaytay
              </p>
              <p>
                <i className='ti-direction'></i> Landline: (02) 8 397-0111 <br/>
                  Mobile (GLOBE): 09178887788<br/>
      
                  Mobile (SMART): 09988887788 
              </p>
            </div>
          </div>


          <div className='item col-12 col-md-6'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where4} alt='' />
            </div>
            <div className='content'>
              <h5>Hotel 2</h5>
              <p>
                <i className='ti-direction-alt'></i> Tagaytay Wingate Manor
              </p>
              <p>
                <i className='ti-direction'></i> Mobile (GLOBE): 09175688861<br/>
                Mobile (SMART): 09988870661
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Where
