
import React, { useEffect, useRef } from 'react'
import { Float, MeshDistortMaterial, Html, useGLTF } from '@react-three/drei'
import FakeGlowMaterial from './FakeGlowMaterial'
import * as THREE from 'three'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { motion } from 'framer-motion'
// import { a } from '@react-spring/three'

const glowRed = new THREE.MeshBasicMaterial({ color: new THREE.Color(7, 0, 0.5), toneMapped: false })
const glowBlue = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0.5, 20), toneMapped: false })
const glowGreen = new THREE.MeshBasicMaterial({ color: new THREE.Color(0.6, 7, 0.1), toneMapped: false })
// const AnimatedMaterial = a(MeshDistortMaterial)


export function Hand(props) {
  const { nodes, materials } = useGLTF('/models/hand.glb')


  return (
    <group {...props} dispose={null}>
      <mesh
        initial={{ scale: [0.1, 0.1, 0.1] }} // Initial state: scaled down
        animate={{ scale: [1.2, 1.2, 1.2] }} // Final state: scaled up
        transition={{ type: 'spring', stiffness: 60 }} // Smooth transition
        position={[0, 0, 0]}
        // material={glowGreen}
        castShadow
        receiveShadow
      >
        <sphereGeometry />
        <meshBasicMaterial color={"#FFF781"} wireframe />

      </mesh>

      <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={0.9} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.9} // Up/down float intensity, defaults to 1
      >
        <mesh
          scale={[0.35, 0.35, 0.35]}
          position={[-8, -3, 1]}
          rotation={[0, 1.7, 2.6]}
          geometry={nodes.Object_2.geometry} material={nodes.Object_2.material}
        />

      </Float>

      <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.6} // Up/down float intensity, defaults to 1
      >
        <mesh
          scale={[0.35, 0.35, 0.35]}
          position={[7.5, 3, -0.1]}
          rotation={[0, -1.7, 0]}
          geometry={nodes.Object_2.geometry} material={nodes.Object_2.material}
        />

      </Float>


    </group >
  )
}

useGLTF.preload('/models/hand.glb')
