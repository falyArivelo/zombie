import React from 'react'
import './style.scss'
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import Tilt from 'react-parallax-tilt';

const Index = () => {

    // gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        let divs = gsap.utils.toArray(".panel");

        console.log(divs)


        gsap.to(divs, {
            xPercent: -100 * (divs.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".hcontainer",
                pin: true,
                scrub: 1,
                // snap: 1 / (divs.length - 1),
                end: "+=3500",
            },
            duration: 10
        });
    })


    return (
        <div className="hcontainer">

            <div className="panel red">
                <div className='title'>
                    Tutoriels
                </div>

                <div className="tutoriels">
                    <div className="tuto">
                        <img src={process.env.REACT_APP_REPOSITORY + "/assets/images/zombie_2.jpg"} alt="" />

                    </div>

                    <div className="tuto">
                        <img src={process.env.REACT_APP_REPOSITORY + "/assets/images/zombie_2.jpg"} alt="" />

                    </div>

                    <div className="tuto">
                        <img src={process.env.REACT_APP_REPOSITORY + "/assets/images/zombie_2.jpg"} alt="" />

                    </div>
                </div>

                <div className="more">
                    <Link to='/tutoriels'>
                        more
                    </Link>
                </div>
            </div>
            <div className="panel orange">


                <div className="go_container">
                    <Link to='/vittou'>
                        <Tilt className='go' tiltReverse={true} transitionSpeed={2000} gyroscope={true}>
                            Goo !
                        </Tilt >
                    </Link>
                </div>


                <Marquee className='marquee' pauseOnClick={true} direction='right'>
                    <div className='big-text1'>
                        Ask Vitou <span> What you want </span>
                    </div>
                </Marquee>


                <Marquee className='marquee' pauseOnClick={true} direction='left'>
                    <div className='big-text2'>
                        Ask Vitou <span> What you want </span>
                    </div>
                </Marquee>
            </div>
            <div className="panel purple">
                <div className='certification'>
                    GET YOUR CERTIFICATION
                </div>
            </div>
            {/* <div className="panel green">
                FOUR
            </div>
            <div className="panel gray">
                FIVE
            </div> */}

        </div>
    )
}

export default Index