import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

function Index() {
  return (
    <Suspense>
      <Canvas shadows camera={{ position: [8, 8, 8], fov: 40 }}>
        <color attach="background" args={["#ececec"]} />
        <Environment preset="sunset" />
        <ambientLight intensity={0.3} />
        <OrbitControls />
        <ContactShadows blur={2} />

        <mesh
          rotation-x={-Math.PI / 2}
          position-y={-0.001}
        >
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial color={"#f0f0f0"} />
        </mesh>
      </Canvas>
    </Suspense>
  );
}

export default Index;
