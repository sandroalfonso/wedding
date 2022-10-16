import React, { useRef, useState } from 'react'
import emailjs from "emailjs-com"

function Popup ({closeModal}){
  const[done, setDone] = useState(false);
  const formRef = useRef("");

  function sendEmail1(e){
    e.preventDefault();

    emailjs.sendForm('service_5oz0ah6', 'template_6q3xx5m', e.target, 'MCvP1ezzKhPrMxeQl')
      .then((result) => {
          console.log(setDone(true));
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }



  return (
      <div className='row justify-content-center'>
          {/* <button onClick={() => closeModal(false)}> X </button> */}
        <div className='raman-title'>
          <h2 className='edit-text2'>Name of Attendees</h2>
          <div className='col-md-12'>
          <form ref={formRef} onSubmit={sendEmail1} encType='multipart/form-data' method="post" className='row'>
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
                  <input type='text' className='form-control' placeholder='Name' name='name1'/>{' '}
                </div>
              </div>
         
              <div className='col-md-12'>
                <div className='form-group'>
                <input type='text' className='form-control' placeholder='Name' name='name2'/>{' '}
                </div>
              </div>

              <div className='col-md-12'>
                <div className='form-group'>
                <input type='text' className='form-control' placeholder='Name' name='name3'/>{' '}
                </div>
              </div>
              

              <div className='col-md-12'>
                <div className='form-group'>
                <input type='text' className='form-control' placeholder='Name' name='name4'/>{' '}
                </div>
              </div>
              
              


              <div className='footer'>
              <input type='submit' className='btn buttono' value='Submit' />{' '}
              <div className='button-padding'></div>
              <input type='submit' className='btn buttono' value='Cancel' onClick={()=> closeModal(false)}/>{' '}
              {done && <p>Thank you for confirming. Your response has been sent to Ramon and Amanda</p>}
              </div>

              
            </form>
            
              
            </div>
          </div>
          </div>

   
  )
}

export default Popup