"use client";

import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Text,
  Text3D,
  useProgress,
  PerspectiveCamera,
} from "@react-three/drei";
import { RotatingSphere } from "../hero/rotating-sphere";
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
      <directionalLight position={[0, 3, 2]} intensity={Math.PI} castShadow />
      <Environment preset="city" />

      <RotatingSphere />
    </Canvas>
  );
}
