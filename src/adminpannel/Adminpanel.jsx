import React, { useState, useEffect } from 'react'
import './adminpannel.css'

const Adminpanel = () => {

  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch message from local storage
    const storedMessage = localStorage.getItem('savedMessage');
    if (storedMessage) {
      setMessage(storedMessage);
    }
  }, []);

  return (
    <div className='ap'>
      <div className="ap-1">
        <h1>Hi Wellcome back.</h1>
        <p>Have a nice day</p>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <div className="box-1" style={{ backgroundColor: "rgb(8, 8, 190)" }} >
                <h3>profile vistors</h3>
                <b>300+</b>
              </div>
            </div>
            <div className="col-sm-12 col-lg-3">
              <div className="box-1" style={{ backgroundColor: "blue" }} >
                <h3>Message reseved</h3>
                <b>50+</b>
              </div>
            </div>
            <div className="col-sm-12 col-lg-3">
              <div className="box-1" style={{ backgroundColor: "orange" }} >
                <h3>Reviews</h3>
                <b>50+</b>
              </div>
            </div>
            <div className="col-sm-12 col-lg-3">
              <div className="box-1" style={{ backgroundColor: "orangered" }} >
                <h3>contries</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="ap-graph">
          <img src="https://www.wavemetrics.com/sites/www.wavemetrics.com/files/2021-07/floatingbars.png" alt="" />
        </div>

        <div>
          <h3>Feedback Messages:</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  )
}

export default Adminpanel