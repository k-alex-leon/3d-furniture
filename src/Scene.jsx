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
import CustomCamera from "./components/CustomCamera";
import { useStore } from "./hooks/useStore";
import { boxData } from "./data/objectsData";

function Scene() {
  // cursor position on map
  const highlightPosRef = useRef(new THREE.Vector3(0.5, 0, 0.5));

  // custom camera position
  const camPosition = useStore((state) => state.camPosition);
  const target = useStore((state) => state.target);

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
        <EffectComposer autoClear={false}>
          <Outline blur hiddenEdgeColor="white" edgeStrength={100} />
        </EffectComposer>

        {/* MODELS */}
        {boxData.map((model, inx) => {
          return <BoxMesh key={inx} model={model} />;
        })}
      </Selection>

      <Thing highlightPosRef={highlightPosRef} />

      {/* CAMERA MOVEMENT */}
      <OrbitControls enabled={true} target={target.position} />
      <CustomCamera
        cameraPosition={camPosition}
        cameraTarget={target.position}
      />
    </>
  );
}

export default Scene;
