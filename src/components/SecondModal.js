import React, { useRef, useState }  from 'react'
import emailjs from 'emailjs-com'
import Confirm from './Confirm';
function SecondModal ({closeSecondModal}){

  const[confirm, setConfirm] = useState(false);
  const formRef = useRef("");

  function sendEmail2(e){
    e.preventDefault();

    emailjs.sendForm('service_5oz0ah6', 'template_dwz5ur5', e.target, 'MCvP1ezzKhPrMxeQl')
      .then((result)=>{
        console.log(setConfirm(true));
      }, (error)=>{
        console.log(error.text);
      });
      e.target.reset()
  }

  return (
    
    <div className='row justify-content-center'>
      <div className='raman-title'>
        <h6 className='edit-text2'>Don't worry! You can still celebrate with us virtually!</h6>
        <div className='col-md-12'>
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

        <div className='col-md-12'>
        <form ref={formRef} onSubmit={sendEmail2} encType='multipart/form-data'  method="post" className='row'>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Name'
                    name='no_name'
                    required
                  />{' '}
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
                    required
                  ></textarea>
                </div>
                <div className='footer'>
              <input type='submit' className='btn buttono' value='Submit'/>{' '}
              <div className='button-padding'></div>
              <input type='submit' className='btn buttono' value='Cancel' onClick={() => closeSecondModal(false)}/>{' '}
              {/* {done && <p>Thank you for confirming. Your response has been sent to Ramon and Amanda</p>} */}
              </div>
              </div>

              </form>
            
          </div>
        </div>
        {confirm && <Confirm closeConfirm={setConfirm}/>}
      </div>
    
  )
}

export default SecondModal