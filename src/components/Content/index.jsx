import React from 'react'
import './style.scss';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import SplitType from 'split-type';
import Tilt from 'react-parallax-tilt';
import Pro from '../Pro';

import { xy, clipPath_bottom_top_Trigger, clipPath_bottom_top, changeBG } from '../../motions/animation';
const Index = () => {

    useGSAP(() => {

        // xy(".matching .description", '.matching', -100, 0, 5)
        // changeBG(".matching", ".matching", 6)
        clipPath_bottom_top(".matching .image1", -30, 0, 1)
    }, []);

    return (
        <div className="content">
            <div className="learning">
                <div className="description">
                    <h1>
                        Let 's Learn !
                    </h1>
                    <div className="paragraphe">
                        Discover our sophisticated matchmaking
                        algorithm, designed to connect you with your
                        soulmate by taking into account your unique
                        interests, values and preferences, where each match
                        has the potential to become an exceptional love story
                    </div>
                </div>


                <div className="image1">
                    <img src={process.env.REACT_APP_REPOSITORY + "/assets/images/zombie_2.jpg"} alt="" />
                </div>

            </div>

            <div className="forum">
                <div className="forum_description">
                    <h1>
                        Forum
                    </h1>
                    <div className="paragraphe">
                        Meet, communicate with another Zombies
                    </div>
                </div>

                <div className="image1">
                    <Tilt tiltReverse={true} className="tilt-img" transitionSpeed={2000} gyroscope={true}>
                        <img
                            src={
                                process.env.REACT_APP_REPOSITORY + "/assets/images/zombie_2.jpg"
                            }
                            alt=""
                        />
                    </Tilt>
                </div>
            </div>

            <div className="pro">
                <div className="pro_description">
                    <h1>
                        Allez plus loin !
                    </h1>

                </div>
            </div>



        </div>
    )
}

export default Index