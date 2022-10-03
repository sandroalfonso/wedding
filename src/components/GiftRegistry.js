import React from 'react'

function GiftRegistry () {
  return (
    <div id='giftregistry' className='healthprotocol section-padding bg-pink'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            <span className='raman-title-meta'>Rustan's Gift Registry</span>
          </div>
        </div>
        <div className='row bord-box bg-img' data-background='images/1.jpg'>
          <div className='col-md-3 item-box'>
            <h2 className='custom-font numb'>01</h2>
            <h6 className='title'>Get in touch</h6>
            <p>
              Request for the Gift list:
              <li>Contact us via Email, Viber or SMS</li>
              <li>Visit Wedding & Beyonf Gift Registry of any branch near you</li>
              <li>Ask for a copy of your Registrant's gift list</li>
            </p>
          </div>
          <div className='col-md-3 item-box'>
            <h2 className='custom-font numb'>02</h2>
            <h6 className='title'>Select and shop</h6>
            <p>
              <li>Select which item from the gift list you would like to purchase as a gift for your
                registrant. With the assistance of registry's associates, you can shop in the comfort
                of your own home.
              </li>
            </p>
          </div>
          <div className='col-md-3 item-box'>
            <h2 className='custom-font numb'>03</h2>
            <h6 className='title'>Payment</h6>
            <p>
              <li>Deposit or transfer your payment to our BPI, BDO or RCBC account.</li>
              <li>Pay online with your credit card, debit card or mobile wallets.</li>
              <li>Pay in-store or at the curbside pick-up point if you choose to pick up your item(s)</li>
            </p>
          </div>
          <div className='col-md-3 item-box'>
            <h2 className='custom-font numb'>04</h2>
            <h6 className='title'>Deliver</h6>
            <p>
              <li>Drive by or book a third-party courier to pick-up your order at our designated curbside pick-up locations</li>
              <li>We can also deliver straight to your home or to the registrant's preferred delivery address</li>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GiftRegistry
