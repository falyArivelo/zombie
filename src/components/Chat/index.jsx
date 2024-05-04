import React, { useEffect, useRef } from 'react'
import './style.scss'

import { granim_image, charByCharNoTrigger } from '../../motions/animation'
import { useGSAP } from '@gsap/react'
import { LuSend } from "react-icons/lu";
import { BsSoundwave } from "react-icons/bs";
import { MdInsertPhoto } from "react-icons/md";
const Index = () => {
    const chatRef = useRef(null);
    useEffect(() => {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
        granim_image("#canvas-image-blending", '/assets/images/Dreamers_01.jpg')
    })

    useGSAP(() => {
        charByCharNoTrigger(".bot_presentation")
    })
    return (
        <div className='chat'>
            <div className="intern">
                <div className="illustrations">
                    <canvas id="canvas-image-blending"></canvas>
                </div>
                <div className="ask">
                    <div className="bot_presentation">
                        Hi ! I'm Vittou , team Vittoria's bot . How can I help you ?
                    </div>
                    <div  ref={chatRef} className="interation">
                        <div className="me">
                            who are team Vittoria ?
                        </div>
                        <div className="bot">
                            <div className='bot_avatar' />
                            <div>
                                team vittoria is a group of 4 students from ITuniversity , Layah, Faly, Valisoa, Fabien .
                            </div>

                        </div>

                        <div className="me">
                            How are you today ?
                        </div>
                        <div className="bot">
                            <div className='bot_avatar' />

                            I'm doing well, thank you for asking! How about you? Is there anything I can assist you with today?
                        </div>

                        <div className="me">
                            <div className='bot_avatar' />

                            give me an image of an cat wearing a glasses and smoke !
                        </div>

                        <div className="bot">
                            <div className='bot_avatar' />

                            here is an image of an cat wearing a glasses and smoking
                            <div className="images">
                                <img src="/assets/images/Dreamers_00.jpg" alt="" />
                                <img src="/assets/images/Dreamers_01.jpg" alt="" />
                                <img src="/assets/images/Dreamers_02.jpg" alt="" />
                            </div>
                        </div>

                        <div className="me">
                            <div className="image">
                                <img src="/assets/images/Dreamers_00.jpg" alt="" />
                            </div>
                            Descriptions of this image please
                        </div>

                        <div className="bot">
                            <div className='bot_avatar' />

                            cyber punk Women wearing a mask .
                        </div>

                    </div>
                    <div className='input_question'>
                        <input type="text" placeholder='Ask me' />

                        <button className='sound'>
                            <BsSoundwave size={23} />
                        </button>
                        <button className='picture'>
                            <MdInsertPhoto size={23} />
                        </button>
                        <button className='send'>
                            <LuSend size={23} />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Index