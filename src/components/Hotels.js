import React from 'react'
import where3 from '../assets/images/summit.jpg'
import where4 from '../assets/images/wingate.jpg'


function Hotels () {
  return (
    <div id='hotels' className='whenwhere bg-pink'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            {' '}
            <span className='raman-title-meta'>Accommodations</span>
            <h2 className='raman-title'></h2>{' '}
          </div>
        </div>
        <div className='row'>


          <div className='item col-12 col-md-6'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where3} alt='' />
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


          <div className='item col-12 col-md-6'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where4} alt='' />
            </div>
            <div className='edit-align content'>
              <h5>Tagaytay Wingate Manor</h5>
              <p>
                <i className='ti-direction-alt'></i>
              </p>
              <p>
                <i className='ti-direction'></i> Mobile (GLOBE): 09175688861<br/>
                Mobile (SMART): 09988870661
              </p>


              <p className='edit-p'>
              Note: To avail of the discounted rates, kindly mention that you are booking for De Leon - Alfonso wedding.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hotels