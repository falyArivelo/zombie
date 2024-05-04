/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/ZombieMini.glb -o src/components/models/ZombieMini.jsx -r public
*/

import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function ZombieMini(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(process.env.REACT_APP_REPOSITORY + '/models/ZombieMini.glb')
  const { actions } = useAnimations(animations, group)

  console.log(actions);

  const [animation, setAnimation] = useState("CharacterArmature|Wave");

  useEffect(() => {
    actions[animation].reset().fadeIn(0.32).play();
    return () => actions[animation]?.fadeOut(0.32);
  }, [animation]);


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group name="CharacterArmature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root} />
          </group>
          <skinnedMesh name="Eyelid" geometry={nodes.Eyelid.geometry} material={materials.Atlas} skeleton={nodes.Eyelid.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <skinnedMesh name="Zombie" geometry={nodes.Zombie.geometry} material={materials.Atlas} skeleton={nodes.Zombie.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(process.env.REACT_APP_REPOSITORY + '/models/ZombieMini.glb')
