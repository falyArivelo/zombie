import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import React, { useEffect } from 'react'

const Cursor = () => {

    useGSAP(() => {
        const cursor = document.getElementById('custom-cursor');
        const links = document.querySelectorAll('.hoverable')
        const cursorText = document.querySelector('.cursor-text')

        const onMouseMove = (event) => {
            const { clientX, clientY } = event;
            gsap.to(cursor, { x: clientX - 15, y: clientY - 15 })
        }

        const onMouseEnterLink = (event) => {
            const link = event.target;
            if (link.classList.contains('view')) {
                gsap.to(cursor, {
                    scale: .6,
                    duration: 0.3,
                    ease: "power2.inOut", // Par exemple, utilisez "power2.inOut" pour une transition accélérée et décélérée
                    // delay: 0.2
                }

                )
                // cursorText.style.display = 'block'
            } else {
                gsap.to(cursor, {
                    scale: .6,
                    duration: 0.3,
                    ease: "power2.inOut", // Par exemple, utilisez "power2.inOut" pour une transition accélérée et décélérée
                    // delay: 0.2
                })
            }

        }

        const onMouseLeaveLink = (event) => {
            gsap.to(cursor, {
                scale: 1,
                duration: 0.5,
                ease: "power2.inOut", // Par exemple, utilisez "power2.inOut" pour une transition accélérée et décélérée
                // delay: 0.2
            })
            // cursorText.style.display = 'none'
        }

        document.addEventListener('mousemove', onMouseMove)
        links.forEach((link) => {
            link.addEventListener('mouseenter', onMouseEnterLink)
            link.addEventListener('mouseleave', onMouseLeaveLink)

        })

    })

    return (
        <div id='custom-cursor' className='custom-cursor'>
            <span className="cursor-text"></span>
        </div>
    )
}

export default Cursor