import React, { useEffect, useState } from 'react'
import './style.scss'
import { AnimatePresence, motion as m } from 'framer-motion'
import { imageVariants, opacity } from '../motions/animation'
const About = () => {
  const images = [
    'faly.jpg',
    'valisoa.jpg',
    'fabien.jpg',
    'layah.jpg',
  ];

  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };




  return (
    <div className="about">

      <div className="team">
        {images.map((image, index) => (
          <m.div className='mate'>
            <m.div className='image'>
              <m.img
                key={index}
                src={process.env.REACT_APP_REPOSITORY + "./assets/images/" + image}
                alt={`Image ${index + 1}`}
                initial="initial"
                animate="animate"
                exit={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)', transition: { duration: 1, delay: Math.abs(index * 0.2 - (0.2 * 4)) } }}
                transition={{ duration: 1, delay: index * 0.2 + 0.5 }} // Décalage de 0.3s entre chaque image
                variants={imageVariants}
              />
            </m.div>

            <m.div className='info'
              initial="initial"
              animate="animate"
              exit={{ opacity:0, transition: { duration: 1, delay: Math.abs(index * 0.1 - (0.1 * 4)) } }}
              transition={{ duration: .6, delay: index * 0.3 + 0.5 }}
              variants={opacity}
            >
              <div className='name'>faly arivelo</div>
              <div className='email'>arivelofaly@gmail.com</div>
            </m.div>
          </m.div>
        ))}
      </div>

    </div>

  )
}

export default About