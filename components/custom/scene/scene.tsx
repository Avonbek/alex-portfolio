"use client";

import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Text,
  Text3D,
  useProgress,
  PerspectiveCamera,
  Lightformer,
} from "@react-three/drei";
import { RotatingSphere } from "./rotating-sphere";
import { useEffect } from "react";

type SceneProps = {
  onLoaded: () => void;
};

export default function Scene({ onLoaded }: SceneProps) {
  const { progress, loaded, total } = useProgress();

  useEffect(() => {
    if (progress === 100 && loaded === total) {
      onLoaded();
    }
  }, [progress, loaded, total]);

  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35] }}>
      <fog attach="fog" args={["#202025", 0, 80]} />
      <RotatingSphere />

      <Environment preset="city">
        {/* <directionalLight position={[0, 3, 2]} intensity={5} castShadow /> */}
        <Lightformer
          intensity={3}
          color="white"
          position={[0, -2, -1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        {/* <Lightformer
          intensity={3}
          color="white"
          position={[-1, -1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        /> */}
        {/* <Lightformer
          intensity={3}
          color="white"
          position={[1, 1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        /> */}
        {/* <Lightformer
          intensity={10}
          color="white"
          position={[-10, 0, 14]}
          rotation={[0, Math.PI / 2, Math.PI / 3]}
          scale={[100, 10, 1]}
        /> */}
      </Environment>
    </Canvas>
  );
}
