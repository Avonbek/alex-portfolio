"use client";

import { useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import { Billboard, Text, Environment, useProgress } from "@react-three/drei";
import * as THREE from "three";

// Words that will orbit around the center
const labels = ["AI Experience", "About Me", "Projects", "Contact"];

// Main Scene Component
type SceneProps = {
  onLoaded: () => void;
};

export default function NewScene({ onLoaded }: SceneProps) {
  const { progress, loaded, total } = useProgress();

  useEffect(() => {
    if (progress === 100 && loaded === total) {
      onLoaded();
    }
  }, [progress, loaded, total]);

  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 20] }}>
      <fog attach="fog" args={["#202025", 0, 80]} />
      <directionalLight position={[0, 3, 2]} intensity={Math.PI} castShadow />
      <Environment preset="city" />
      <RotatingSphere />
    </Canvas>
  );
}

// Function for individual word component
function Word({
  children,
  position,
}: {
  children: string;
  position: THREE.Vector3;
}) {
  const ref = useRef<any>(null);
  const color = new THREE.Color();
  const fontProps = {
    fontSize: 0.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    materialToneMapped: false,
  };

  const [hovered, setHovered] = useState(false);

  // Hover effects: change color and cursor
  const handleHover = () => setHovered(true);
  const handleOut = () => setHovered(false);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = "pointer";
    }
    // Cleanup function to reset the cursor style
    return () => {
      document.body.style.cursor = "auto";
    };
  }, [hovered]);

  // Update material color on hover
  useFrame(() => {
    if (ref.current) {
      ref.current.material.color.lerp(
        color.set(hovered ? "#fa2720" : "#ffffff"),
        0.1
      );
    }
  });

  return (
    <Billboard position={position}>
      <Text
        ref={ref}
        onPointerOver={handleHover}
        onPointerOut={handleOut}
        onClick={() => console.log(`${children} clicked`)}
        {...fontProps}
        anchorX="center"
        anchorY="middle"
      >
        {children}
      </Text>
    </Billboard>
  );
}

// Main RotatingSphere component with orbiting words
export function RotatingSphere() {
  const groupRef = useRef<THREE.Group>(null);

  // Calculate spherical positions for words
  const positions = useMemo(() => {
    const count = labels.length;
    const radius = 5; // Radius from the center
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;

    for (let i = 1; i < count + 1; i++) {
      for (let j = 0; j < 1; j++) {
        temp.push(
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          )
        );
      }
    }
    return temp;
  }, []);

  // Rotate the entire group for slow orbiting effect
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
      groupRef.current.rotation.x += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      {positions.map((pos, index) => (
        <Word key={index} position={pos} children={labels[index]} />
      ))}
    </group>
  );
}
