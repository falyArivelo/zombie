import React, { useRef, useState } from 'react'
import transition from '../motions/transition'
import { motion as m } from "framer-motion"
import Transition from '../motions/transition'
import WordByword from '../motions/wordByword_apparition'
import Content from '../components/Content'
import Earth from '../components/Earth';
import Sphere from '../components/Sphere';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Pro from '../components/Pro';


import HorizontalScroll from '../components/SCROLLTRIGGER/HorizontalScroll'
import './style.scss'
import Cloud from '../components/Cloud'
import { MeshTransmissionMaterial, useGLTF, Text, Environment } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all'
import Lenis from 'lenis'
import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'

const Home = () => {
  useGSAP(() => {
    const lenis = new Lenis({ duration: 3 })
    lenis.on('scroll', (e) => {
    })
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  })


  return (

    <m.div
    >
      <Hero />
      <Content />
      <Pro />

      <Footer />
    </m.div>


  )
}

export default Home;