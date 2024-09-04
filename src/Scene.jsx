import { Environment, Grid, OrbitControls, Sky } from "@react-three/drei";
import { useRef, useState } from "react";
import { DoubleSide } from "three";
import * as THREE from "three";
import HightlightMesh from "./components/HightLightMesh";
import Thing from "./components/Thing";
import {
  EffectComposer,
  Outline,
  Selection,
} from "@react-three/postprocessing";
import BoxMesh from "./components/models/BoxMesh";
import { BlendFunction } from "postprocessing";
import CustomCamera from "./components/CustomCamera";
import { useStore } from "./hooks/useStore";

function Scene() {
  // cursor position on map
  const highlightPosRef = useRef(new THREE.Vector3(0.5, 0, 0.5));

  // custom camera position
  const camPosition = useStore((state) => state.camPosition);
  const target = useStore((state) => state.target);

  // edit mode
  const [isEditing, setEdit] = useState(false);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[0, 50, 50]}
        castShadow
        intensity={0.5}
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
        shadow-radius={10}
        shadow-bias={-0.0001}
      />
      {/* <Sky azimuth={2} inclination={Math.PI * 0.5}/> */}
      <Environment background files="./environment/sky.hdr" />

      {/* POSITION SQUARE */}
      <HightlightMesh pos={highlightPosRef} />
      <Grid
        args={[100, 100]}
        position={[0, 0, 0]}
        side={DoubleSide}
        cellSize={1}
        sectionSize={1}
        followCamera
        fadeDistance={50}
        cellColor={"#D6D5D5"}
        sectionColor={"#D6D5D5"}
        receiveShadow
      />

      {/* MESH OUTLINES */}
      <Selection>
        {/* OUTLINE EFFECTS */}
        <EffectComposer multisampling={0} autoClear={false}>
          <Outline
            blur
            visibleEdgeColor={0x00ff00}
            edgeStrength={100}
            width={500}
            xRay={true}
            blendFunction={BlendFunction.ALPHA}
          />
        </EffectComposer>

        {/* MODELS */}
        <BoxMesh position={[0, 0.5, 0]} viewpoint={[-3, 1, 3]} color={"red"} />

        <BoxMesh position={[6, 0.5, 0]} viewpoint={[9, 1, 9]} color={"blue"} />
      </Selection>

      <Thing highlightPosRef={highlightPosRef} />

      {/* CAMERA MOVEMENT */}
      <OrbitControls enabled={true} target={target} />
      <CustomCamera cameraPosition={camPosition} cameraTarget={target}/>
    </>
  );
}

export default Scene;
