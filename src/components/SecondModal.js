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
        <h2>Message for the Bride & Groom</h2>
        <div className='col-md-12'>
        <form onSubmit={sendEmail2} encType='multipart/form-data'  method="post" className='row'>
            <div className='col-md-12'>
                <div className='form-group'>
                  <input type='text' className='form-control' placeholder='Name' name='no_name' required/>{' '}
                  
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
              </div>

            <div className='footer'>
           
            <button type='submit'  value='Submit'>Submit</button>{' '}
            <button type='submit'  value='Cancel' onClick={()=> closeSecondModal(false)}>CANCEL</button>{' '}
            </div>
          </form>
          
            
          </div>
        </div>
      </div>
    
  )
}

export default SecondModal