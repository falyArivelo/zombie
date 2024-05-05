import React, { useEffect, useState } from 'react'
import './style.scss'
import { AnimatePresence, motion as m } from 'framer-motion'
import { imageVariants, opacity } from '../motions/animation'
import Marquee from 'react-fast-marquee'

const About = () => {
  const mates = [
    {
      'image': 'faly.jpg',
      'name': 'faly',
      'post': 'designer'
    },
    {
      'image': 'valisoa.jpg',
      'name': 'valisoa',
      'post': 'dev'
    },
    {
      'image': 'fabien.jpg',
      'name': 'fabien',
      'post': 'back end'
    },
    {
      'image': 'layah.jpg',
      'name': 'layah',
      'post': 'back end'
    },
  ]

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
        {mates.map((mate, index) => (
          <m.div className='mate'>
            <m.div className='image'>
              <m.img
                key={index}
                src={process.env.REACT_APP_REPOSITORY + "/assets/images/" + mate.image}
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
              exit={{ opacity: 0, transition: { duration: 1, delay: Math.abs(index * 0.1 - (0.1 * 4)) } }}
              transition={{ duration: .6, delay: index * 0.3 + 0.5 }}
              variants={opacity}
            >
              <div className='name'>{mate.name}</div>
              <div className='email'>{mate.post}</div>
            </m.div>
          </m.div>
        ))}


      </div>
      <Marquee pauseOnClick={true} direction='right'>
        <div className='team-name'>
          <span> VITTORIA - </span>
          <span> VITTORIA - </span>
        </div>
      </Marquee>


    </div>

  )
}

export default About