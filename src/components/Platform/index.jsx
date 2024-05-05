import {
  ContactShadows,
  Environment,
  OrbitControls,
  useCursor,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Zombie } from "../models/Zombie";
import * as THREE from "three";
import {
  charactersAtom,
  socket,
} from "../Sockets/SocketManager";
import { useAtom } from "jotai";

function Index({email}) {
  const [onFloor, setOnFloor] = useState(false);
  const [characters] = useAtom(charactersAtom);

  useCursor(onFloor);
  return (
    <Suspense>
      <Canvas shadows camera={{ position: [8, 8, 8], fov: 40 }}>
        <color attach="background" args={["#ececec"]} />
        <Environment preset="sunset" />
        <ambientLight intensity={0.3} />
        <OrbitControls minDistance={5} maxDistance={20} minPolarAngle={0} maxPolarAngle={Math.PI/2} screenSpacePanning={false}/>
        <ContactShadows blur={2} />
        {characters.map((character,index) => (
          <Zombie
            key={character.id}
            email={"Zombie "+(index+1)}
            position={
              new THREE.Vector3(
                character.position[0],
                character.position[1],
                character.position[2]
              )
            }
          />
        ))}
        <mesh
          rotation-x={-Math.PI / 2}
          position-y={-0.001}
          onClick={(e) => socket.emit("move", [e.point.x, 0, e.point.z])}
          onPointerEnter={() => setOnFloor(true)}
          onPointerLeave={() => setOnFloor(false)}
        >
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial color={"#f0f0f0"} />
        </mesh>
      </Canvas>
    </Suspense>
  );
}

export default Index;
