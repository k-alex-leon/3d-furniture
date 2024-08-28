import { useRef } from "react";
import * as THREE from 'three'

export default function Thing(props) {
  const { highlightPosRef, objects, setObjects } = props;
  const ref = useRef();
  const mousePosition = new THREE.Vector2();
//   useFrame(() => {
//     //(ref.current.rotation.x = ref.current.rotation.y += 0.01)
//   });

  const hoverMesh = (e) => {
    //console.log(e)
    mousePosition.x = (e.clientX / window.innerWidth) * 2 - 1;
    mousePosition.y = -(e.clientY / window.innerHeight) * 2 + 1;
    const highlightPos = new THREE.Vector3()
      .copy(e.point)
      .floor()
      .addScalar(0.5);
    //console.log(highlightPos)
    highlightPosRef.current = highlightPos;
  };

  const clickMesh = (e) => {
    let pos = new THREE.Vector3().copy(e.point).floor().addScalar(0.5);
    // let _objects = objects;
    // _objects.push({ position: pos });
    // console.log(_objects, pos);
    // setObjects(_objects);
  };

  return (
    <mesh
      rotation-x={-Math.PI * 0.5}
      ref={ref}
      onClick={clickMesh}
      onPointerMove={hoverMesh}
      //onPointerOver={(e) => console.log('hover')}
      //onPointerOut={(e) => console.log('unhover')}
    >
      <planeGeometry args={[20, 20]} />
      <meshBasicMaterial
        attach="material"
        side={THREE.DoubleSide}
        visible={false}
      />
    </mesh>
  );
}
