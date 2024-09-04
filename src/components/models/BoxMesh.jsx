import { DoubleSide } from "three";
import SelectableMesh from "../../components/SelectableMesh";
import { useRef, useState } from "react";
import { useStore } from "../../hooks/useStore";
import Pallete from "../../components/pallete/Pallete";

export default function BoxMesh(props) {
  const boxRef = useRef();
  const { color, position, viewpoint } = props;
  const [customColor, setCustomColor] = useState(null);
  const setCamPosition = useStore((state) => state.setCamPosition);
  const setTarget = useStore((state) => state.setTarget);

  const [isEdit, setEdit] = useState(false);

  const handlerOnDoubleClick = (e) => {
    e.stopPropagation();

    // console.log(e);
    const { x, y, z } = e.point;
    setCamPosition([x - 3, y + 2, z - 3]);
    setTarget([x, y, z]);
  };

  const handleOnClick = (e) => {
    setEdit(!isEdit);
  };

  const handleChangeColorMaterial = (color) => {
    setCustomColor(color)
  }

  return (
    <group onDoubleClick={handlerOnDoubleClick} onClick={handleOnClick}>
      <Pallete
        isActive={isEdit}
        object={boxRef.current}
        onColorSelected={handleChangeColorMaterial}
      />
      <SelectableMesh>
        <mesh ref={boxRef} position={position} castShadow>
          <boxGeometry />
          <meshStandardMaterial color={customColor ?? color} side={DoubleSide} />
        </mesh>
      </SelectableMesh>
    </group>
  );
}
