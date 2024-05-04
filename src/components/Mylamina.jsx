import { Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { LayerMaterial, Depth } from 'lamina'
import { AmbientLight } from 'three'

export default function GradientSphere() {
  return (
      <Sphere>
        <LayerMaterial
          color="#ffffff" //
          lighting="physical"
          transmission={1}
        >
          <Depth
            colorA="#810000" //
            colorB="#ffd0d0"
            alpha={0.5}
            mode="multiply"
            near={0}
            far={2}
            origin={[1, 1, 1]}
          />
        </LayerMaterial>
      </Sphere>

  )
}