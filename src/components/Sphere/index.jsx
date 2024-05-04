import React, { useEffect, useRef, useState } from 'react'
import { Canvas, extend, useFrame, useLoader, useThree } from '@react-three/fiber'
import { OrbitControls, Environment, Effects, useTexture } from '@react-three/drei'
import { LUTPass, LUTCubeLoader } from 'three-stdlib'
import gsap from 'gsap'

extend({ LUTPass })


function Grading() {
    const { texture3D } = useLoader(LUTCubeLoader, '/cubicle-99.CUBE')
    return (
        <Effects>
            <lUTPass lut={texture3D} intensity={0.75} />
        </Effects>
    )
}

function Sphere(props) {
    const texture = useTexture('/assets/2k_earth_daymap.jpg')

    const meshRef = useRef();
    const { scene } = useThree();

    const [sphereSize, setSphereSize] = useState(1.5); // Taille de base

    useEffect(() => {
        const handleResize = () => {
            let width = window.innerWidth; // Exemple de valeur

            switch (true) {
                case (width > 1024):
                    setSphereSize(1.5);
                    break;
                case (width > 480):
                    setSphereSize(1.2);
                    break;
                case (width < 480):
                    setSphereSize(1);
                    break;
                default:
                    setSphereSize(1.5);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Appel initial pour définir la taille initiale

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <mesh ref={meshRef} {...props}>
            <sphereGeometry args={[sphereSize, 64, 64]} />
            <meshPhysicalMaterial map={texture} clearcoat={1} clearcoatRoughness={0} roughness={0} metalness={0.5} />
        </mesh>
    )
}

const index = () => {
    return (
        <div className='earth' >
            <Canvas frameloop="demand" camera={{ position: [0, 0, 5], fov: 45, aspect: 500 }}>
                <ambientLight intensity={3} />
                <pointLight position={[10, 10, 10]} />
                {/* <spotLight intensity={1} angle={0.2} penumbra={10} position={[5, 15, 10]} /> */}
                {/* <directionalLight position={[100, 100, 100]} color="white" /> */}
                <Sphere />
                <OrbitControls enableZoom={false} enablePan={false} />
                <Environment preset='sunset' />
            </Canvas>
        </div >
    )
}

export default index