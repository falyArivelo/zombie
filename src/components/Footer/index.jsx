import React, { useEffect } from 'react'
import './style.scss'
import { useGSAP } from '@gsap/react'
import { change_text_color } from '../../motions/animation'
import { useInView } from 'react-intersection-observer'
import gsap from 'gsap'
import { LuCopyright } from "react-icons/lu";
import Marquee from 'react-fast-marquee';

const Index = () => {
  const [footerRef, footerInView] = useInView({ threshold: .95 });

  function changeColor() {
    const logoColor = footerInView ? 'black' : 'white';

    gsap.to(".logo", {
      color: logoColor,
      duration: .2,
      ease: 'power3.inOut'
    })
  }

  function changeFontSize() {
    const rotate = footerInView ? 0 : 0;

    gsap.to(".logo", {
      rotation: rotate,
      duration: 2,
      ease: 'power3.inOut'
    })
  }
  useEffect(() => {
    changeColor()
    // changeFontSize()
  })


  useGSAP(() => {
    // change_text_color('.footer')
  })


  return (
    <div ref={footerRef} className='footer'>

      <div className="left">
        <LuCopyright size={16} /> <span> copyright</span>
      </div>

      <div className="middle">

      </div>
      <div className="right">
        <div>24h by Web cup 2024</div>
      </div>



      <div className="partners">
        <Marquee className="carousel" pauseOnClick={true}  direction='right'>
        <div className="carousel-item">
          <img src={process.env.REACT_APP_REPOSITORY + "/assets/images/pulse.jpg"} alt="" />
        </div>
        <div className="carousel-item">
          <img src={process.env.REACT_APP_REPOSITORY + "/assets/images/bocasay.jpg"} alt="" />
        </div>
        <div className="carousel-item">
          <img src={process.env.REACT_APP_REPOSITORY + "/assets/images/ingenosya.jpg"} alt="" />
        </div>
        <div className="carousel-item">
          <img src={process.env.REACT_APP_REPOSITORY + "/assets/images/webcup.jpg"} alt="" />
        </div>
        <div className="carousel-item">
          <img src={process.env.REACT_APP_REPOSITORY + "/assets/images/novity.jpg"} alt="" />
        </div>
        <div className="carousel-item">
          <img src={process.env.REACT_APP_REPOSITORY + "/assets/images/havanahub.jpg"} alt="" />
        </div>
        <div className="carousel-item">
          <img src={process.env.REACT_APP_REPOSITORY + "/assets/images/vivetic.jpg"} alt="" />
        </div>

        <div className="carousel-item">
          <img src={process.env.REACT_APP_REPOSITORY + "/assets/images/telma.jpg"} alt="" />
        </div>
        <div className="carousel-item">
          <img src={process.env.REACT_APP_REPOSITORY + "/assets/images/p4h.jpg"} alt="" />
        </div>
        <div className="carousel-item">
          <img src={process.env.REACT_APP_REPOSITORY + "/assets/images/etech.jpg"} alt="" />
        </div>
        {/* -- */}


        </Marquee>
      </div>

      <div className="team_name">
        <span>VITTORIA</span>
      </div>

    </div>
  )
}

export default Index