import React from 'react'
import './style.scss'
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import MyImage from '../../MyImage'
import Team from '../../Team'

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
                snap: 1 / (divs.length - 1),
                // base vertical scrolling on how wide the hcontainer is so it feels more natural.
                end: "+=3500",
            }
        });
    })


    return (
        <div className="hcontainer">

            <div className="panel red">
                <Team />
            </div>
            <div className="panel orange">
                TWO
            </div>
            <div className="panel purple">
                THREE
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