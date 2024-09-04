import { Canvas } from "@react-three/fiber";
import React from "react";
import "./styles.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";

function App() {
  return (
    <Canvas camera={{ fov: 12, position: [0, -2, 220] }}>
      <Environment
        files={[
          "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
        ]}
      />
      <ScrollControls>
        <MacContainer />
      </ScrollControls>
    </Canvas>
  );
}

export default App;
