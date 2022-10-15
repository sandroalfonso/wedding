import React, { useEffect }from 'react'

const Countdown = () => {
    useEffect(()=>{
        (function(){
            const second = 1000,
                min = second * 60,
                hrs = min * 60,
                day = hrs * 24;
            
            let wedding = "November 26, 2022 00:00:00",
                countdown = new Date(wedding).getTime(),
                x = setInterval(function(){
                    let now = new Date().getTime(),
                        distance = countdown - now;

                        document.getElementById("days").innerText = Math.floor(distance / (day));
                        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hrs));
                        document.getElementById("minutes").innerText = Math.floor((distance % (hrs)) / (min));
                        document.getElementById("seconds").innerText = Math.floor((distance % (min)) / second);

                        if(distance < 0){
                            let headline = document.getElementById("headline"),
                                countdown = document.getElementById("countdown"),
                                content = document.getElementById("content");

                            headline.innerText = "We're Married!";
                            countdown.style.display = "none";
                            content.style.display = "block";

                            clearInterval(x);
                        }
                }, 0);
                return null;
        }());
    }, [])
  return (
    <div>
    <div
      id='countdown'
      className='section-padding bg-img'
      data-background='images/banner-1.jpg'
    >
      <div className='container'>
        <div className='row'>
          <div className='section-head col-md-12'>
            <h7>We're so excited to celebrate our special day with you!</h7>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <ul>
              <li>
                <span id='days'></span>Days
              </li>
              <li>
                <span id='hours'></span>Hours
              </li>
              <li>
                <span id='minutes'></span>Minutes
              </li>
              <li>
                <span id='seconds'></span>Seconds
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Countdown