import React from 'react'
import { Component } from 'react/cjs/react.development';
// import emailjs from "emailjs-com"


class RSVP extends Component{

  // sendemail = event => {
  //   event.preventDefault();
  //   emailjs.sendForm('service_7d2c6gt', 'template_dwz5ur5', event.target, 'MCvP1ezzKhPrMxeQl')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  //     event.target.reset()
  // };

  // fileSelectedHandler = event => {
  //   console.log(event.target.files[0]);
  // }

  render(){
  return (
    <div
      id='rsvp'
      className='section-padding bg-img bg-fixed'
    >
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6 bg-white p-40'>
            {' '}
            <h2 className='raman-title text-center'>R.S.V.P</h2>
            <br />
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
                  <input type='text' className='form-control' placeholder='Email' name='email'/>{' '}
                </div>
              </div>
              {/* <div className='col-md-12'>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Guests'

                  />{' '}
                </div>
              </div> */}
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
              {/* <div className='col-md-12'>
                
                  <input
                    type='file'
                    name = "file"
                    onChange={this.fileSelectedHandler}
                  />{' '}
                
              </div> */}



              <div className='col-md-12'>
                <div className='form-group'>
                  <input type='submit' className='btn buttono' value='Submit' />{' '}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
}

export default RSVP
