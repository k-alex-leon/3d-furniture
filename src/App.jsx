import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { Suspense } from "react";

function App() {
  return (
    <Canvas camera={{ position: [10, 10, 10], fov: 50 }} shadows>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}

export default App;
