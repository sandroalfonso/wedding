import React from 'react'
import Popup from './Popup'
import {useState} from 'react'
import SecondModal from './SecondModal';
import Confirm from './Confirm';
import zoom from '../assets/images/zoom.jpg'
function RSVP () {

  const [openModal, setOpenModal] = useState(false);

  const[openSecondModal, setSecondModal] = useState(false);

  const[openConfirm, setConfirm] = useState(false);


  return (
    <div
      id='rsvp'
      className='section-padding bg-img'
    >
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6 bg-white p-40'>
            {' '}
            <h2 className='raman-title text-center'>Zoom</h2>
            <br />

            <div className='item col-12 col-md-6'>
            <div className='whenwhere-img'>
              {' '}
            
            </div>
            <div className='edit-align content'>
         
              <div className='col-md-12 edit-space'>
                  <p className='edit-text'>
                  <a className='download' href='https://us02web.zoom.us/j/81900825676?pwd=bGc1UnNtSm5qaHp4RlZWTk5qQzduQT09&fbclid=IwAR33x3t1Tn5Dqv3CBNDzn8_HyzfS2LAKiATe2zCLu290um9dptfPjTaktSY#success'>
                    Zoom Link
                  </a>
                </p>

                <p className='edit-text'>
                  Meeting ID: 819 0082 5676
                </p>
                <p className='edit-text'>
                  Passcode: Wedding
                </p>     
            </div>
            </div>
          </div>

           
          </div>
        </div>
      </div>
    </div>
  )
}

export default RSVP
