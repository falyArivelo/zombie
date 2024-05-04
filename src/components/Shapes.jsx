import { motion } from "framer-motion-3d";
import { MotionConfig } from "framer-motion";
import { useRef, useLayoutEffect } from "react";
import { transition } from "./settings";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useSmoothTransform } from "./use-smooth-transform";
import { Box, Cloud, Clouds, Effects, Environment, Float, MeshDistortMaterial, MeshWobbleMaterial, OrbitControls, Plane, Sky, Stars } from "@react-three/drei";
import { ShaderMaterial } from "three";
import FakeGlowMaterial from "./models/FakeGlowMaterial";
import GradientSphere from "./Mylamina";
import * as THREE from 'three'
import { Brain } from "./models/Brain";
import { ZombieMini } from "./models/ZombieMini";



export function ThreeDee(props) {
  return (
    <Canvas shadows dpr={[1, 2]} resize={{ scroll: false, offsetSize: true }}>
      <Environment preset="sunset" />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={0.9} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.9} // Up/down float intensity, defaults to 1
      >
        <Brain position={[0, 0, 0]} />
      </Float>


      <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={0} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.9} // Up/down float intensity, defaults to 1
      >
        <ZombieMini
          position={[-0, -0, 2]}
          rotation={[0, 1, -0]}
        />
      </Float>
      <Clouds material={THREE.MeshBasicMaterial}>
        <Cloud
          opacity={0.1}
          speed={0.1} // Rotation speed
          width={20} // Width of the full cloud
          depth={1.5} // Z-dir depth
          segments={20}
         seed={10} bounds={50} volume={80} position={[0, 0, 0]} color={"white"} />
      </Clouds>


    </Canvas >
  );
}


export function GlowBox() {

  const ref = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    ref.current.rotation.x = time / 2;
    ref.current.rotation.y = time / 2;

  })

  return (
    <Box ref={ref} args={[1, 1, 1]} position={[1, 1, 0]}>
      <meshBasicMaterial attach="material" color="hotpink" />
      <meshBasicMaterial attach="material" color="white" />
      <meshBasicMaterial attach="material" color="blue" />
      <meshBasicMaterial attach="material" color="red" />
      <meshBasicMaterial attach="material" color="violet" />
      <meshBasicMaterial attach="material" color="green" />

    </Box>
  );
}


export function Shapes({ isHover, isPress, mouseX, mouseY }) {
  const lightRotateX = useSmoothTransform(mouseY, spring, mouseToLightRotation);
  const lightRotateY = useSmoothTransform(mouseX, spring, mouseToLightRotation);

  return (
    <Canvas shadows dpr={[1, 2]} resize={{ scroll: false, offsetSize: true }}>
      <Camera mouseX={mouseX} mouseY={mouseY} />
      <MotionConfig transition={transition}>
        <motion.group
          center={[0, 0, 0]}
          rotation={[lightRotateX, lightRotateY, 0]}
        >
          <Lights />
        </motion.group>
        <motion.group
          initial={false}
          animate={isHover ? "hover" : "rest"}
          dispose={null}
          variants={{
            hover: { z: isPress ? -0.9 : 0 }
          }}
        >
          <Sphere />
          <Cone />
          <Torus />
          <Icosahedron />
        </motion.group>
      </MotionConfig>
    </Canvas>
  );
}

export function Lights() {
  return (
    <>
      <spotLight color="#61dafb" position={[-10, -10, -10]} intensity={0.2} />
      <spotLight color="#61dafb" position={[-10, 0, 15]} intensity={0.8} />
      <spotLight color="#61dafb" position={[-5, 20, 2]} intensity={0.5} />
      <spotLight color="#f2056f" position={[15, 10, -2]} intensity={2} />
      <spotLight color="#f2056f" position={[15, 10, 5]} intensity={1} />
      <spotLight color="#b107db" position={[5, -10, 5]} intensity={0.8} />
    </>
  );
}

export function Sphere() {
  return (
    <motion.mesh position={[-0.5, -2.5, 0]} variants={{ hover: { z: 2 } }}>
      <sphereGeometry args={[0.4]} />
      <Material />
      <MeshDistortMaterial color="blue" />

    </motion.mesh>
  );
}

export function Cone() {

  const ref = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    ref.current.rotation.x = time / 2;
    ref.current.rotation.y = time / 2;

  })

  return (
    <motion.mesh
      ref={ref}
      position={[-3.8, 0.4, 0]}
      rotation={[-0.5, 0, -0.3]}
      variants={{
        hover: {
          z: 1.1,
          x: -1.5,
          rotateX: -0.2,
          rotateZ: 0.4
        }
      }}
    >
      <coneGeometry args={[0.3, 0.6, 20]} />
      <MeshDistortMaterial color="hotpink" />
      {/* <meshPhongMaterial color="#fff" specular="#61dafb" shininess={10} /> */}
      <Material />

    </motion.mesh>
  );
}

export function Torus() {
  const ref = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    ref.current.rotation.x = time / 2;
    ref.current.rotation.y = time / 2;

  })

  return (
    <motion.mesh
      ref={ref}
      position={[2.1, .4, 3]}
      rotation={[-0.5, 0.5, 0]}
      variants={{
        hover: {
          y: 0.5,
          z: 2,
          rotateY: -0.2
        }
      }}
    >
      <torusGeometry args={[0.2, 0.1, 10, 50]} />
      <Material />
    </motion.mesh>
  );
}

export function Icosahedron() {

  const ref = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    ref.current.rotation.x = time / 2;
    ref.current.rotation.y = time / 2;

  })

  return (
    <motion.mesh
      ref={ref}
      position={[1.4, 2, 0]}
      rotation-z={0.5}
      variants={{
        hover: {
          x: 1.8,
          z: 0.6,
          y: 0.6,
          rotateZ: -0.5
        }
      }}
    >
      <icosahedronGeometry args={[0.7, 0]} />
      <Material />
    </motion.mesh>
  );
}

export function Material() {
  return <meshPhongMaterial color="#fff" specular="#61dafb" shininess={10} />;
}

// Adapted from https://github.com/pmndrs/drei/blob/master/src/core/PerspectiveCamera.tsx
function Camera({ mouseX, mouseY, ...props }) {
  const cameraX = useSmoothTransform(mouseX, spring, (x) => x / 350);
  const cameraY = useSmoothTransform(mouseY, spring, (y) => (-1 * y) / 350);

  const set = useThree(({ set }) => set);
  const camera = useThree(({ camera }) => camera);
  const size = useThree(({ size }) => size);
  const scene = useThree(({ scene }) => scene);
  const cameraRef = useRef();

  useLayoutEffect(() => {
    const { current: cam } = cameraRef;
    if (cam) {
      cam.aspect = size.width / size.height;
      cam.updateProjectionMatrix();
    }
  }, [size, props]);

  useLayoutEffect(() => {
    if (cameraRef.current) {
      const oldCam = camera;
      set(() => ({ camera: cameraRef.current }));
      return () => set(() => ({ camera: oldCam }));
    }
  }, [camera, cameraRef, set]);

  useLayoutEffect(() => {
    return cameraX.onChange(() => camera.lookAt(scene.position));
  }, [cameraX]);

  return (
    <motion.perspectiveCamera
      ref={cameraRef}
      fov={90}
      position={[cameraX, cameraY, 3.8]}
    />
  );
}

const spring = { stiffness: 600, damping: 30 };

const mouseToLightRotation = (v) => (-1 * v) / 140;
