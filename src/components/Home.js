import React from 'react'
import Button from 'react-bootstrap/Button';
import Footer from '../header/Footer'
import './Home.css'

import Services from './Services';
import Projects from './Projects';
import About from './About';

const Home = () => {
  return (
    <div>
      <div className='homesize'>
        <h1>One Platform. Hundreds of Experts.<br />Unlimited Analytics.</h1>
        <b>Prevalent AI helps organisations take control of their cyber technology by unifying their data and building<br /> tailored solutions—helping them better manage Risk.</b><br />
        <Button className='mt-3' variant="primary">Learn more ↘</Button>
      </div>
      <Services/>
      <About/>
      <Projects/>
      <Footer />
    </div>
  )
}

export default Home