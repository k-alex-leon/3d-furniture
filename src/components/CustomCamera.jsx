import { CameraControls } from "@react-three/drei";
import { useEffect, useRef } from "react";

export default function CustomCamera(props) {
  const { cameraPosition, cameraTarget } = props;
  const ref = useRef();

  useEffect(() => {
    if (cameraTarget)
      ref.current.setLookAt(...cameraPosition, ...cameraTarget, true);
    else ref.current.moveTo(...cameraPosition, true);
  }, [cameraPosition]);

  return <CameraControls ref={ref} {...props} dolly={1} distance={0.1} enabled makeDefault />;
}
