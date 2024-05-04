import React, { useRef } from 'react'
import { motion, progress, useTransform } from 'framer-motion'
import { FormattedMessage } from 'react-intl'


const WordByword = ({ text }) => {
    const element = useRef(null)

    const words = text.split(" ")

    return (
        <div ref={element} className='description'>
            <div className="text hoverable">
                {words.map((word, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: .2, ease: [0.22, 1, 0.36, 1], delay: index * 0.2 }} // Délai pour chaque mot
                        style={{ display: "inline-block", marginRight: "0.5rem" }}
                    >
                        {word}
                    </motion.span>
                ))}
            </div>
            <div className="hire_me"><FormattedMessage id="hire_me" /></div>

        </div>
    )
}

const Word = ({ children, range, progress }) => {
    const opacity = useTransform(progress, range, [0, 1])

    return (

        <motion.span style={{ opacity }} className='word' >
            {children}
        </motion.span>
    )
}

export default WordByword