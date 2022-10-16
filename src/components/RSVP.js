import React from 'react'
import Popup from './Popup'
import {useState} from 'react'
import SecondModal from './SecondModal';
import Confirm from './Confirm';

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
            <h2 className='raman-title text-center'>R.S.V.P</h2>
            <br />
            <p>Will you attend?</p>
            <div className='footer'>
      
              <button onClick={() => {setOpenModal(true); setSecondModal(false)}}>Yes</button>{' '}
              <button onClick={() => {setSecondModal(true); setOpenModal(false)}}>No</button>{' '}

            
            {/* <button onClick={() => {
              setOpenModal(true);
            }} className='btn buttono' value='Yes' />{' '} */}
            {/* <input type='submit' className='btn buttono' value='No' />{' '} */}
            
            </div>
            {openModal && <Popup closeModal={setOpenModal}/>}
            {openSecondModal && <SecondModal closeSecondModal={setSecondModal}/>}
            {openConfirm && <Confirm closeConfirm={setConfirm}/>}
            {/* <form encType='multipart/form-data'  method="post" className='row'>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Name'
                    name='name'
                    required
                  />{' '}
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input type='text' className='form-control' placeholder='Email' name='email'/>{' '}
                </div>
              </div>
         
              <div className='col-md-12'>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    cols='30'
                    rows='7'
                    className='form-control'
                    placeholder='Message'
                  
                  ></textarea>
                </div>
              </div>
              
              <div className='col-md-12'>
              <div className='flex'>
                <div className='form-group'>
                <input type='radio' className='buttono' value='Yes' />Yes{' '}
                <input type='radio' className='buttono' value='No' />No{' '}
                </div>
              </div>
              </div>



              <div className='col-md-12'>
                <div className='form-group'>
                  <input type='submit' className='btn buttono' value='Submit' />{' '}
                </div>
              </div>
            </form> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RSVP
