/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/Cube Guy Character.glb -o src/components/models/CubeGuy.jsx -r public
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function CubeGuy(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(process.env.REACT_APP_REPOSITORY+'/models/Cube Guy Character.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group name="CharacterArmature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root} />
          </group>
          <skinnedMesh name="Character" geometry={nodes.Character.geometry} material={materials.Atlas} skeleton={nodes.Character.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(process.env.REACT_APP_REPOSITORY+'/models/Cube Guy Character.glb')
