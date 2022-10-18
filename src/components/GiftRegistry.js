import React from 'react'

function GiftRegistry () {
  return (
    <div id='giftregistry' className='healthprotocol bg-pink'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            <span className='raman-title-meta'>Rustan's Gift Registry</span>
          </div>
        </div>
        <div className='row bord-box bg-img' data-background='images/1.jpg'>
          <div className='col-md-2 item-box'>
            <h2 className='custom-font numb'>01</h2>
            <h6 className='title'>Check out couple's Gift Registry</h6>
            <p>
             
              <li>
                <a className='download' onClick={() => {
                  fetch('giftreg.pdf').then(response => {
                    response.blob().then(blob=>{
                      const fileURL = window.URL.createObjectURL(blob);
                      let alink = document.createElement('a');
                      alink.href = fileURL;
                      alink.download = 'giftreg.pdf';
                      alink.click();
                    })
                  })

                }}>
                  Download Gift List
                </a>

              </li>
            </p>
          </div>
          <div className='edit-align col-md-2 item-box'>
            <h2 className='custom-font numb'>02</h2>
            <h6 className='title'>Select and shop</h6>
            <p>
              <li>Select which item from the gift list you would like to purchase as a gift for your
                registrant. With the assistance of registry's associates, you can shop in the comfort
                of your own home.
              </li>
            </p>
          </div>
          <div className='edit-align col-md-3 item-box'>
            <h2 className='custom-font numb'>03</h2>
            <h6 className='title'>Payment</h6>
            <p>
              <li>Deposit or transfer your payment to our BPI, BDO or RCBC account.</li>
              <li>Pay online with your credit card, debit card or mobile wallets.</li>
              <li>Pay in-store or at the curbside pick-up point if you choose to pick up your item(s)</li>
            </p>
          </div>
          <div className='edit-align col-md-3 item-box'>
            <h2 className='custom-font numb'>04</h2>
            <h6 className='title'>Deliver</h6>
            <p>
              <li>Drive by to pick-up your order at our designated curbside pick-up locations (Any Rustan's branch)</li>
              <li>We can also deliver straight to your home or to the registrant's preferred delivery address</li>
            </p>
          </div>
          <div className='edit-align col-md-2 item-box'>
            <h2 className='custom-font numb'>05</h2>
            <h6 className='title'>Questions</h6>
            <p>
              <li>
                For questions and clarifications you may contact our gift registry advisor.<br/>
                <span className='emphasized'>+639178984387</span>
              </li>
              
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GiftRegistry
