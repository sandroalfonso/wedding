import React  from 'react'

function SecondModal ({closeSecondModal}){
  return (
    <div className='container'>
    <div className='row justify-content-center'>
        {/* <button onClick={() => closeModal(false)}> X </button> */}
      <div className='raman-title'>
        <h2>Message for the Bride &</h2>
        <div className='col-md-12'>
        <form encType='multipart/form-data'  method="post" className='row'>
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

            <div className='footer'>
           
            <button type='submit'  value='Submit'>Submit</button>{' '}
            <button type='submit'  value='Cancel' onClick={()=> closeSecondModal(false)}>CANCEL</button>{' '}
            </div>
          </form>
          
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondModal