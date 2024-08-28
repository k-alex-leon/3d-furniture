import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from 'three'

export default function HightlightMesh(props) {
    const { pos } = props
    let ref = useRef()
  
    useFrame(() => {
      ref.current.position.x = pos.current.x
      ref.current.position.y = 0
      ref.current.position.z = pos.current.z
    })
  
    const getPos = () => {
      if (pos.current) {
        return [pos.current.x, 0, pos.current.z]
      } else {
        return [0.5, 0, 0.5]
      }
    }
  
    return (
      <mesh
        ref={ref}
        rotation-x={-Math.PI * 0.5}
        //onClick={(e) => console.log('click')}
        //onPointerOver={(e) => console.log('hover')}
        //onPointerOut={(e) => console.log('unhover')}
      >
        <planeGeometry args={[1 , 1]} />
        <meshBasicMaterial attach="material" side={THREE.DoubleSide} color={'red'} />
      </mesh>
    )
  }