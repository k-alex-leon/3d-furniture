import { Canvas } from "@react-three/fiber";
import './App.css'
import Scene from "./Scene";
import { Suspense } from "react";
import Description from "./components/description/Description";

function App() {

  return (
    <div>
      <Description />
      <div className="canvas-scene">
        <Canvas camera={{ position: [10, 10, 10], fov: 50 }} shadows>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default App;
