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
import { Pencil } from "./models/Pencil";
import { Book } from "./models/Book";
import { CharacterAnimated } from "./models/CharacterAnimated";




export function ThreeDee(props) {
  return (
    <Canvas shadows dpr={[1, 2]} resize={{ scroll: false, offsetSize: true }}>
      <Environment preset="sunset" />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={1} // XYZ rotation intensity, defaults to 1
        floatIntensity={1} // Up/down float intensity, defaults to 1
      >
        <Brain position={[0, 0, 0]} />
      </Float>


      <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={0} // XYZ rotation intensity, defaults to 1
        floatIntensity={1} // Up/down float intensity, defaults to 1
      >
        <ZombieMini
          position={[-3.5, -1.6, 2]}
          rotation={[-0.25, .8, -0.1]}
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

      <Book />
      <Pencil />
      <CharacterAnimated />

    </Canvas >
  );
}

