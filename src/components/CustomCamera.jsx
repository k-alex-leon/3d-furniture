import { CameraControls } from "@react-three/drei";
import { useEffect, useRef } from "react";

export default function CustomCamera(props) {
  const { cameraPosition, cameraTarget } = props;
  const ref = useRef();

  // useLayoutEffect

  // useLayoutEffect(() => {
  //   ref.current.position.set(x, y, z);
  //   ref.current.moveTo(x, y, z, true)
  //   ref.current.position.lerp(new Vector3(x, y, z), 0.01)
  //   ref.current.aspect = size.width / size.height;
  //   ref.current.updateMatrixWorld();
  //   ref.current.updateProjectionMatrix();
  //   set({ camera: ref.current });
  // }, [cameraPosition, size]);

  useEffect(() => {
    // ref.current.moveTo(...cameraPosition, true)
    // ref.current.setTarget(...cameraTarget, true)
    ref.current.setLookAt(...cameraPosition, ...cameraTarget, true);
  }, [cameraPosition]);

  return <CameraControls ref={ref} {...props} enabled makeDefault />;
}
