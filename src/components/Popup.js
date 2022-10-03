import React from 'react'

function Popup ({closeModal}){
  
  return (
    <div className='container'>
      <div className='row justify-content-center'>
          {/* <button onClick={() => closeModal(false)}> X </button> */}
        <div className='raman-title'>
          <h2>Name</h2>
          <div className='col-md-12'>
          <form encType='multipart/form-data'  method="post" className='row'>
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
              


              <div className='footer'>
              <input type='submit' className='btn buttono' value='Submit' />{' '}
              <input type='submit' className='btn buttono' value='Cancel' onClick={()=> closeModal(false)}/>{' '}
              </div>
            </form>
            
              
            </div>
          </div>
        </div>
      </div>
   
  )
}

export default Popup