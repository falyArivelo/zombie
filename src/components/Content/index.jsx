import React from 'react'
import './style.scss';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import SplitType from 'split-type';
import { xy, clipPath_bottom_top_Trigger, clipPath_bottom_top } from '../../motions/animation';
const Index = () => {

    useGSAP(() => {

        xy(".matching .description", '.matching', -100, 0, 5)
        clipPath_bottom_top(".matching .image1", -30, 0, 1)
    }, []);

    return (
        <div className="content">
            <div className="matching">
                <div className="description">
                    <h1>
                        Matching
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
                    <img src={process.env.REACT_APP_REPOSITORY+"/assets/images/matching_1.jpg"} alt="" />
                </div>

                <div className="image2">
                    <img src={process.env.REACT_APP_REPOSITORY+"/assets/images/prom8pics.jpg"} alt="" />
                </div>
            </div>

            <div className="virtual">
                <div className="virtual_description">
                    <h1>
                        Virtual Date
                    </h1>
                    <div className="paragraphe">
                        Meet, communicate and bond
                        authentic through personalized avatars,
                        while exploring immersive visual experiences.
                    </div>
                </div>

                {/* 
                <div className="image1">
                    <img src="/assets/images/matching_1.jpg" alt="" />
                </div>

                <div className="image2">
                    <img src="/assets/images/prom8pics.jpg" alt="" />
                </div> */}
            </div>

        </div>
    )
}

export default Index