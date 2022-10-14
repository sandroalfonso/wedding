import React from 'react'
import gallery1 from '../assets/images/raman6.jpg'
import gallery2 from '../assets/images/raman4.jpg'
import gallery3 from '../assets/images/raman5.jpg'
import gallery4 from '../assets/images/raman3.jpg'
import gallery5 from '../assets/images/banner.jpg'
import gallery6 from '../assets/images/raman7.jpg'
function Gallery () {
  return (
    <div id='gallery' className='section-padding1'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            <span className='raman-title-meta'>Gallery</span>
            <h2 className='raman-title'>Our Memories</h2>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row gallery-filter mt-3'>
          <div className='col-md-4 gallery-item ceremony'>
            <div className='img-zoom'>
              <div className='gallery-box'>
                <div className='gallery-img'>
                  {' '}
                  <img
                    src={gallery1}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                  <div className='gallery-detail'>
                    <p>#AMANDAsMONCHoice</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>



          <div className='col-md-4 gallery-item party'>
            <div className='img-zoom'>
              <div className='gallery-box'>
                <div className='gallery-img'>
                  {' '}
                  <img
                    src={gallery2}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                </div>
                <div className='gallery-detail'>
                    <p>#AMANDAsMONCHoice</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4 gallery-item ceremony'>
            <div  className='img-zoom'>
              <div className='gallery-box'>
                <div className='gallery-img'>
                  {' '}
                  <img
                    src={gallery3}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                </div>
                <div className='gallery-detail'>
                    <p>#AMANDAsMONCHoice</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4 gallery-item party'>
            <div  className='img-zoom'>
              <div className='gallery-box'>
                <div className='gallery-img'>
                  {' '}
                  <img
                    src={gallery4}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                </div>
                <div className='gallery-detail'>
                    <p>#AMANDAsMONCHoice</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4 gallery-item ceremony'>
            <div  className='img-zoom'>
              <div className='gallery-box'>
                <div className='gallery-img'>
                  {' '}
                  <img
                    src={gallery5}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                </div>
                <div className='gallery-detail'>
                    <p>#AMANDAsMONCHoice</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4 gallery-item party'>
            <div  className='img-zoom'>
              <div className='gallery-box'>
                <div className='gallery-img'>
                  {' '}
                  <img
                    src={gallery6}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                </div>
                <div className='gallery-detail'>
                    <p>#AMANDAsMONCHoice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
