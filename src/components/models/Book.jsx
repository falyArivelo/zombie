/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/Book Stack.glb -o src/components/models/Book.jsx -r public
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Book(props) {
  const { nodes, materials } = useGLTF(process.env.REACT_APP_REPOSITORY+'/models/Book Stack.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['Node-Mesh'].geometry} material={materials.mat10} />
      <mesh geometry={nodes['Node-Mesh_1'].geometry} material={materials.mat23} />
      <mesh geometry={nodes['Node-Mesh_2'].geometry} material={materials.mat21} />
      <mesh geometry={nodes['Node-Mesh_3'].geometry} material={materials.mat4} />
      <mesh geometry={nodes['Node-Mesh_4'].geometry} material={materials.mat8} />
      <mesh geometry={nodes['Node-Mesh_5'].geometry} material={materials.mat5} />
      <mesh geometry={nodes['Node-Mesh_6'].geometry} material={materials.mat3} />
      <mesh geometry={nodes['Node-Mesh_7'].geometry} material={materials.mat17} />
      <mesh geometry={nodes['Node-Mesh_8'].geometry} material={materials.mat16} />
      <mesh geometry={nodes['Node-Mesh_9'].geometry} material={materials.mat1} />
    </group>
  )
}

useGLTF.preload(process.env.REACT_APP_REPOSITORY+'/models/Book Stack.glb')
