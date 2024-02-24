import React, { useState } from 'react';
import Footer from '../header/Footer'
import './about.css'
import imgicon from '../assets/WhatsApp Image 2024-02-22 at 9.11.49 AM.jpeg'
import vedio1 from '../assets/vedio1.mp4'

const About = () => {

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div>
      <div className="about-sc-1">
        <div className="a-s-1 container">
          <h1 className='text-white ms-4 pt-4'>We are Prevalent AI. We provide clarity and control.</h1>
        </div>
        <div className='abouit-img-1'></div>
        <div className="about-sc-2 text-white">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum illum a exercitationem ipsa provident officiis nulla corporis ratione, alias quo. Quasi harum assumenda magnam ea numquam eos culpa consequatur dolorem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam similique dolores culpa incidunt suscipit recusandae porro quod sed, natus molestias, ut veniam omnis rem ab. Dolorem dignissimos molestias voluptatem nam!
          </p>
        </div>
      </div>

      <div className="about-sc-3">
        <h1>Our mission and purpose.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tenetur illum vel fuga amet dolorem magnam doloribus maiores, quis facere repellat ex voluptatum, soluta dicta sit perspiciatis optio, autem earum.
        </p>
        <video
          className='abt-vid'
          autoPlay={true}
          muted={isMuted}
          onClick={() => setIsPlaying(!isPlaying)}
        >
          <source src={vedio1} type="video/mp4" />
        </video>
      </div>
      <div className="container about-sc-4">
        <div className="row">
          <div className="col-lg-6 col-sm-12 about-sc-4-topic p-2">
            <img src={imgicon} alt="" />
            <h1>Innovating cyber security with ISTARI.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt in magni enim vel ut nam, fugiat illum repellendus recusandae eaque? Eos error atque ducimus dignissimos impedit consectetur veritatis molestias quam?</p>
          </div>
          <div className="col-lg-6 col-sm-12 about-sc-4-img">
            <img src="https://www.completechaintech.com/sites/default/files/2021-04/3786012_3.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className='about-our-team p-5 mt-5'>
        <div className="a-s-2 container">
          <h1 className='text-dark ms-4 pt-4'>We work with extraordinary people.</h1>
        </div>
        <div className="scroll-container mb-4">
          <img className='scroll-img' src="https://wallpapercave.com/wp/wp4987178.jpg" />
          <img className='scroll-img' src="https://pbs.twimg.com/media/FqTnfm6aEAAhcfU.jpg:large" />
          <img className='scroll-img' src='https://i.pinimg.com/originals/2b/9c/77/2b9c77b7bf208c6a278733b2cede20e0.jpg' />
          <img className='scroll-img' src="https://i.pinimg.com/originals/c1/95/91/c19591d54c50edf1f4d6a3dc2c634620.jpg" />
          <img className='scroll-img' src="https://th.bing.com/th/id/OIP.H3m001rGcbrV82_0XgpZ9wAAAA?w=474&h=659&rs=1&pid=ImgDetMain" />
          <img className='scroll-img' src="https://s1.zerochan.net/Hinata.(Pixiv53862745).600.3801239.jpg" />
          <img className='scroll-img' src="https://cdn.donmai.us/sample/69/62/__mikeneko_indie_virtual_youtuber_drawn_by_deyui__sample-6962dab56c93f173ca45c02d86cb82ad.jpg" />
          <img className='scroll-img' src='https://i.redd.it/9x1e0acjbs191.jpg' />
        </div>

      </div>
    </div>
  )
}

export default About