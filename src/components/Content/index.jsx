import React, { useEffect, useState } from 'react'
import './style.scss';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import SplitType from 'split-type';
import Tilt from 'react-parallax-tilt';
import Pro from '../Pro';
import animation from '../../assets/books.json'

import { xy, clipPath_bottom_top_Trigger, clipPath_bottom_top, changeBG } from '../../motions/animation';
import Lottie from 'lottie-react';
import { useInView } from 'react-intersection-observer';
const Index = () => {

    useGSAP(() => {
        xy(".learning .description", ".learning", -200, 0, 5, '90%')
        xy(".forum .forum_description", ".forum", -200, 0, 5, '90%')
        xy(".forum .image1", ".forum", -150, 0, 2, '80%')


    }, []);

    const [isAnimated, setIsAnimated] = useState(false);
    const { ref: booksref, inView: inViewBooks } = useInView({
        triggerOnce: true, // Assure que l'observation ne se déclenche qu'une seule fois
    });



    return (
        <div className="content">
            <div className="learning">
                <div ref={booksref} className="animation">
                    {inViewBooks && (
                        <Lottie animationData={animation}
                            loop={false} // Assurez-vous que l'animation ne boucle pas
                            autoplay={true} />
                    )}
                </div>

                <div className="description">
                    <h1>
                        Let 's Learn !
                    </h1>
                    <div className="paragraphe">
                        Curious zombies looking to unravel human mysteries? Come join us for some hilarious and brain-enriching learning!
                    </div>
                </div>


            </div>

            <div className="forum">
                <div className="forum_description">
                    <h1>
                        Forum
                    </h1>
                    <div className="paragraphe">
                        Meet, communicate with another Zombies
                        humans to exchange ideas, survival tips and brain-twisted jokes
                    </div>
                </div>

                <div className="image1">
                    <Tilt tiltReverse={true} className="tilt-img" transitionSpeed={2000} gyroscope={true}>
                        <img
                            src={
                                process.env.REACT_APP_REPOSITORY + "/assets/images/zombie_1.jpg"
                            }
                            alt=""
                        />
                    </Tilt>
                </div>

                <div className="image2">
                    <Tilt tiltReverse={true} className="tilt-img" transitionSpeed={2000} gyroscope={true}>
                        <img
                            src={
                                process.env.REACT_APP_REPOSITORY + "/assets/images/forum_2.jpg"
                            }
                            alt=""
                        />
                    </Tilt>
                </div>

            </div>

            <div className="pro">
                <div className="pro_description">
                    <h1>
                        GO FURTHER !
                    </h1>

                </div>
            </div>



        </div>
    )
}

export default Index