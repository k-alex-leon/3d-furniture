import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useStore } from "../hooks/useStore";

// this is the red square display on floor grid
export default function HightlightMesh(props) {
  const { pos } = props;
  let ref = useRef();

  const setCamPosition = useStore((state) => state.setCamPosition);
  const setActiveTarget = useStore((state) => state.setTarget)

  useFrame(() => {
    ref.current.position.x = pos.current.x;
    ref.current.position.y = 0;
    ref.current.position.z = pos.current.z;
  });

  const handlerOnDoubleClick = (e) => {
    const { x, y, z } = e.point;
    setCamPosition([x, y + 1, z]);

    // set data target to null
    setActiveTarget(null)
  };

  return (
    <mesh
      ref={ref}
      rotation-x={-Math.PI * 0.5}
      onClick={(e) => handlerOnDoubleClick(e)}
    >
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial
        attach="material"
        side={THREE.DoubleSide}
        color={"red"}
      />
    </mesh>
  );
}
