import { useFrame, useThree } from "@react-three/fiber";
import { useLayoutEffect, useRef } from "react";
import { Vector3 } from "three";

export default function CustomCamera (props){
  const { position } = props;
  const [x, y, z] = position;
  const ref = useRef();
  const set = useThree((state) => state.set);
  const size = useThree((state) => state.size);

  useLayoutEffect(() => {
    ref.current.position.set(x, y, z);
    ref.current.aspect = size.width / size.height;
    ref.current.updateMatrixWorld();
    ref.current.updateProjectionMatrix();
    set({ camera: ref.current });
  }, [position, size]);

  return <perspectiveCamera ref={ref} {...props} />;
};