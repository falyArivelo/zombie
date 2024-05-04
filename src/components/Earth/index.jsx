import React from 'react'
import { Canvas } from '@react-three/fiber'

const index = () => {
    return (
        <div id="canvas-container">
            <Canvas>
                <ambientLight intensity={0.1} />
                <directionalLight color="red" position={[0, 0, 5]} />
                <mesh>
                    <sphereGeometry />
                    <meshStandardMaterial color="black"/>
                </mesh>
            </Canvas>
        </div>
    )
}

export default index