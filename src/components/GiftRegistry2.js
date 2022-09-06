import React from 'react'
import giftreg from '../assets/images/giftreg.jpg'
import contact from '../assets/images/contact.jpg'
function GiftRegistry2 (){
    return(
        <div
      id='rsvp'
      className='section-padding bg-img bg-fixed'
    >
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6 p-40'>
            {' '}
            <img
                    src={giftreg}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}

             <img
                    src={contact}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GiftRegistry2