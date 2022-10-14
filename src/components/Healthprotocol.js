import React from 'react'

function Healthprotocol () {
  return (
    <div id='healthprotocol' className='healthprotocol bg-pink'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            <span className='raman-title-meta'>Reminders</span>
            <h2 className='raman-title'></h2>
          </div>
        </div>
        <div className='row bord-box bg-img' data-background='images/1.jpg'>
          <div className='col-md-4 item-box'>
            <h2 className='custom-font numb'>01</h2>
            <h6 className='title'></h6>
            <p>
            For the safety and comfort of all our guests and in compliance with the authorities in our area, we respectfully request all guests to wear their face masks at all times.
            </p>
          </div>
          <div className='col-md-4 item-box'>
            <h2 className='custom-font numb'>02</h2>
            <h6 className='title'></h6>
            <p>
            Dress code: Strictly formal<br/>
            Men: Barong (preferred)<br/>
            Women: long gown
            </p>
          </div>
          <div className='col-md-4 item-box'>
            <h2 className='custom-font numb'>03</h2>
            <h6 className='title'></h6>
            <p>
            Help us document our special day by tagging us using our hashtag.
#AMANDAsMONCHoice
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
