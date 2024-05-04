import React, { Suspense, useEffect, useState } from 'react'
import './style.scss'
import { useIntl } from 'react-intl';
import { useGSAP } from "@gsap/react";
import { text_from_bottom, imageVariants, xy, textVariants, popUp } from '../../motions/animation';
import 'swiper/css';

import scroll_animation from '../../assets/scroll_animation.json'
import Lottie from 'lottie-react';
import { useInView } from 'react-intersection-observer';
import { motion as m } from 'framer-motion'

import { motion, MotionConfig, useMotionValue } from "framer-motion";
import { Shapes, ThreeDee } from "../Shapes";
import { transition } from "../settings";
import useMeasure from "react-use-measure";
import "../button.css";
import GradientSphere from '../Mylamina';


const Index = () => {

    const [button_ref, bounds] = useMeasure({ scroll: false });
    const [isHover, setIsHover] = useState(false);
    const [isPress, setIsPress] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const resetMousePosition = () => {
        mouseX.set(0);
        mouseY.set(0);
    };


    const intl = useIntl();
    console.log(JSON.stringify(import.meta.env))
    const { ref, inView } = useInView({
        triggerOnce: false, // Assure que l'animation ne se déclenche qu'une seule fois
    });

    useGSAP(() => {
        xy('.find', '.content', 0, '-100%', 5, 'bottom')
        xy('.match', '.content', 0, '100%', 5, 'bottom')
        xy('.perfect span', '.content', '90%', '50%', 5, 'bottom')

        // increaseScale('.image', '.content', 0.5, '30%', 0, 5)
        // increaseScale('.image img', '.content', 2, '0%', 0, 5)
    })

    const variants = {
        from_bottom: { opacity: 0, y: '100%' },
        to_top: { opacity: 1, y: '0%' },
    }

    return (

        <div className='hero' >

            {/* <m.div className="image"
                initial="from_bottom_initial"
                animate="from_bottom_animate"
                transition={{ duration: 1, delay: 3.5 }}
                exit="from_bottom_exit"
                variants={imageVariants}
            >
                <img src={process.env.REACT_APP_REPOSITORY + "/assets/images/hero_1.jpg"} alt="" />
            </m.div> */}

            {/* <div className='perfect'>
                <m.span
                    initial={"from_bottom"}
                    animate={"to_top"}
                    exit={"exit_from_bottom"}
                    variants={textVariants}
                    transition={{
                        type: "tween",
                        ease: "easeOut",
                        duration: 1, delay: 1.5
                    }}
                >
                    perfect
                </m.span>
            </div> */}

            <div className="slogan">
                <m.div className='find'

                >
                    <m.span
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.8, delay: .2 }}
                        variants={popUp}
                    >
                        Zombify your
                    </m.span>
                </m.div>

                <m.div className='match'
                >
                    <m.span
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.8, delay: .5 }}
                        variants={popUp}
                    >
                        Knowledge
                    </m.span>

                </m.div>
            </div>

            <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                exit={{ opacity: 0, transition: { delay: .3 } }}
            >
                <Lottie className='scroll_animation' animationData={scroll_animation} />

            </m.div>


            <m.div
                className='trust'
                ref={ref}
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                exit={{ opacity: 0, transition: { delay: .3 } }}

            >
                <span>Trust us with your romantic destiny and let yourself </span>
                <span>be enchanted by the magic of our process</span>
            </m.div>

            <div className="threedee"
            >
                <ThreeDee />
            </div>

        </div >
    )
}

export default Index


