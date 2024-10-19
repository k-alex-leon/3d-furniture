import { Select } from "@react-three/postprocessing";
import { useRef, useState } from "react";

export default function SelectableMesh(props) {
  const ref = useRef();
  const [hovered, hover] = useState(null);

  const { mesh, ...rest } = props;

  return (
    <Select
      onPointerOver={() => hover(true)}
      onPointerLeave={() => hover(false)}
      enabled={hovered}
    >
      {props.children}
    </Select>
  );
}
