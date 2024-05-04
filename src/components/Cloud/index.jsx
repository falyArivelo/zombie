import { Cloud, Plane, QuadraticBezierLine, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

const index = () => {
    return (
        <Canvas>
            <Cloud
                opacity={0.1}
                speed={0.4} // Rotation speed
                width={0.1} // Width of the full cloud
                depth={1} // Z-dir depth
                segments={20} // Number of particles
            />

        </Canvas>
    )
}

export default index