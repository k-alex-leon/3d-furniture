import { Select } from "@react-three/postprocessing";
import { useRef, useState } from "react";

export default function SelectableMesh(props) {
  const ref = useRef();
  const [hovered, hover] = useState(null);

  const { mesh, ...rest } = props;

  return (
    <Select enabled={hovered}>
      {mesh ? (
        <primitive
          object={mesh}
          {...rest}
          onPointerOver={(e) => {
            hover(true);
            e.stopPropagation();
          }}
          onPointerOut={() => hover(false)}
        />
      ) : (
        <mesh
          ref={ref}
          {...rest}
          onPointerOver={(e) => {
            hover(true);
            e.stopPropagation();
          }}
          onPointerOut={() => hover(false)}
        >
          {props.children}
        </mesh>
      )}
    </Select>
  );
}
