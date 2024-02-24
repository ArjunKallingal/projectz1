import React from 'react'
import './headfoot.css'

const Footer = () => {
  return (
    <div>
      <div className='footer text-dark'>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm6 col-lg-6 company-logo">
                             
                        </div>
                        <div className="col-sm-6 col-lg-3" style={{margin:'auto'}}>
                            <span className='mb-3'>Country availability</span><br/><br/>
                            <span>Pixel walk-in centres</span><br/><br/>
                            <span>Disability support</span><br/><br/>
                        </div>
                        <div className="col-sm-6 col-lg-3" style={{margin:'auto'}}>
                            <span>Help Centre</span><br/><br/>
                            <span>Contact us</span><br/><br/>
                            <span>Device recycling</span><br/><br/>
                        </div>

                    </div>
                </div>
                <hr />
                <p className='copyright'>Copyright © Blue Bird, All Right Reserved.</p>
                <br />
            </div>
    </div>
  )
}

export default Footer