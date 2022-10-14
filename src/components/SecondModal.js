import React  from 'react'
import emailjs from 'emailjs-com'

function SecondModal ({closeSecondModal}){

  function sendEmail2(e){
    e.preventDefault();

    emailjs.sendForm('service_5oz0ah6', 'template_dwz5ur5', e.target, 'MCvP1ezzKhPrMxeQl')
      .then((result)=>{
        console.log(result.text);
      }, (error)=>{
        console.log(error.text);
      });
      e.target.reset()
  }

  return (
    
    <div className='row justify-content-center'>
        {/* <button onClick={() => closeModal(false)}> X </button> */}
      <div className='raman-title'>
        <h6 className='edit-text'>Don't worry. You can still virtually celebrate with us!</h6>
        <div className='col-md-12'>
       
            <div className='col-md-12'>
                <p className='edit-text'>
                  <a className='download' href='https://us02web.zoom.us/j/81900825676?pwd=bGc1UnNtSm5qaHp4RlZWTk5qQzduQT09&fbclid=IwAR33x3t1Tn5Dqv3CBNDzn8_HyzfS2LAKiATe2zCLu290um9dptfPjTaktSY#success'>
                    Zoom Link
                  </a>
                </p>

                <p className='edit-text'>
                  Passcode: Wedding
                </p>
            </div>

            <div className='footer'>
            </div>
        
          
            
          </div>
        </div>
      </div>
    
  )
}

export default SecondModal