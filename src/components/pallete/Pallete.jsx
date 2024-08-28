import { Html } from "@react-three/drei";
import "./Pallete.css";
import { useEffect, useState } from "react";

const PALLETE_COLORS = ['#d3a411', '#3c80f6', '#ba68c8']

export default function Pallete({ object, isActive, onColorSelected }) {
  const [active, setActive] = useState(isActive || false);

  useEffect(() => {
    setActive(isActive);
  }, [isActive]);

  if (!active) return;
  return (
    <Html position={object.position} className="modal">
      {/* <button className="pallete">
        <img className="icon" src="./images/paint.png" />
      </button> */}

      <div className={`container-floating${isActive ? '-active' : ''}`}>

        {PALLETE_COLORS.map((color, inx) => {
          return <div key={inx} className={`nd${++inx} nds`} style={{backgroundColor : color}} onClick={() => onColorSelected(color)}/>
        })}
        {/* <div className="nd3 nds"></div>

        <div className="nd2 nds"></div>

        <div className="nd1 nds"></div> */}

        {/* <div className="floating-button"></div> */}
      </div>
    </Html>
  );
}
