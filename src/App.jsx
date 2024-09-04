import { Canvas } from "@react-three/fiber";
import React from "react";
import "./styles.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";

function App() {
  return (
    <div className="w-full h-screen font-['Helevetica_Now_Display']">
      <div className="navbar absolute flex py-10 gap-5 top-0 left-1/2 -translate-x-1/2">
        {[
          "Iphone",
          "Ipad",
          "Services",
          "IOS",
          "Mac",
          "Products",
          "Ipad",
          "Services",
          "IOS",
          "Mac",
          "Products",
        ].map((e) => (
          <a href="#" className="text-white font-[500] text-sm">
            {e}
          </a>
        ))}
      </div>
      <div className="absolute text-white item-center top-20 left-1/2 -translate-x-1/2 ">
        <h3 className="text-6xl text-center tracking-tighter font-[700]">
          Macbook Pro.
        </h3>
        <p className="text-base text-center tracking-tighter">Oh So Pro</p>
        <p className="text-center w-3/4 mx-auto">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime natus
          molestiae
        </p>
      </div>

      <Canvas camera={{ fov: 12, position: [0, -2, 220] }}>
        {/* <OrbitControls /> */}
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
          ]}
        />
        <ScrollControls>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default App;
