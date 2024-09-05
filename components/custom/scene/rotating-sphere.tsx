"use client";

import { useRef, useEffect, useState } from "react";
import {
  useFrame,
  useThree,
  extend,
  Object3DNode,
  MaterialNode,
} from "@react-three/fiber";
// import { EffectComposer, Bloom, LensFlare } from "@react-three/postprocessing";
// import { BlendFunction } from "postprocessing";
import * as THREE from "three";
// import { useControls } from "leva";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import { Billboard, Text } from "@react-three/drei";

extend({ MeshLineGeometry, MeshLineMaterial });

declare module "@react-three/fiber" {
  interface ThreeElements {
    meshLineGeometry: Object3DNode<MeshLineGeometry, typeof MeshLineGeometry>;
    meshLineMaterial: MaterialNode<MeshLineMaterial, typeof MeshLineMaterial>;
  }
}

// Main RotatingSphere component
const labels = ["AI Experience", "About Me", "Projects", "Contact"];

export function RotatingSphere() {
  // Calculate positions for each label around a sphere using spherical coordinates
  const positions = labels.map((_, i) => {
    const phi = Math.acos(-1 + (2 * i) / labels.length);
    const theta = Math.sqrt(labels.length * Math.PI) * phi;
    const radius = 2;
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);

    return [x, y, z] as [number, number, number];
  });

  // Rotate the group in every frame
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0005;
      groupRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <group ref={groupRef} scale={viewport.width / 6}>
      {/* Central Core Sphere with enhanced material */}
      <mesh position={[0, 0, 0]} castShadow>
        <sphereGeometry args={[0.15, 64, 64]} />
        <meshPhysicalMaterial
          color={"#134e4a"}
          metalness={0.9}
          roughness={0.2}
          clearcoat={0.9}
          clearcoatRoughness={0.05}
          reflectivity={0.9}
          // emissive={"#14b8a6"}
          // envMapIntensity={1}
        />
      </mesh>

      {/* Lines and improved billboard boxes */}
      {positions.map((pos, index) => (
        <group key={index}>
          <Line start={[0, 0, 0]} end={pos} />
          <BillboardBox
            index={index}
            position={pos}
            args={[1, 0.5, 0.1]}
            color={"#fafafa"}
          />
        </group>
      ))}
    </group>
  );
}

// Updated BillboardBox with semi-transparent glass-like effect and glow
function BillboardBox({
  index,
  position,
  args,
  color,
}: {
  index: number;
  position: [number, number, number];
  args: [number, number, number];
  color: string;
}) {
  const ref = useRef<any>(null);

  const [hovered, setHovered] = useState(false);
  const handleHover = () => setHovered(true);
  const handleOut = () => setHovered(false);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = "pointer";
    }
    return () => {
      document.body.style.cursor = "auto";
    };
  }, [hovered]);
  useFrame(() => {
    if (ref.current) {
      const newColor = hovered
        ? new THREE.Color("#134e4a")
        : new THREE.Color("#ffffff");
      ref.current.material.color.lerp(newColor, 0.3);
    }
  });

  return (
    <Billboard position={position} scale={0.3}>
      <Text
        ref={ref}
        onPointerOver={handleHover}
        onPointerOut={handleOut}
        onClick={() => console.log(`${labels[index]} clicked`)}
        anchorX="center"
        anchorY="middle"
        // castShadow
        // receiveShadow
      >
        {" "}
        {labels[index]}{" "}
        <meshPhysicalMaterial
          color={color}
          emissive={"#14b8a6"}
          emissiveIntensity={1}
          reflectivity={0.9}
          roughness={0.1}
          metalness={0.3}
          clearcoat={0.3}
          clearcoatRoughness={0.05}
        />
      </Text>
    </Billboard>
  );
}

function Line({
  start,
  end,
}: {
  start: [number, number, number];
  end: [number, number, number];
}) {
  const ref = useRef<any>();
  const [geometry, setGeometry] = useState<THREE.BufferGeometry | null>(null);

  useEffect(() => {
    // Helper function to calculate a shortened endpoint
    const interpolatePoint = (
      start: [number, number, number],
      end: [number, number, number],
      factor: number
    ) => {
      return [
        start[0] + (end[0] - start[0]) * factor,
        start[1] + (end[1] - start[1]) * factor,
        start[2] + (end[2] - start[2]) * factor,
      ];
    };

    // Set the factor to shorten the line by 10% (0.9)
    const shortenedEnd = interpolatePoint(start, end, 0.9);

    const vertices = [start, shortenedEnd].map(
      (point) => new THREE.Vector3(...point)
    );
    const geometry = new THREE.BufferGeometry().setFromPoints(vertices);
    setGeometry(geometry);
  }, [start, end]);

  useFrame(() => {
    if (ref.current && ref.current.geometry && geometry) {
      ref.current.geometry = geometry;
    }
  });

  return (
    <line ref={ref}>
      {geometry && <bufferGeometry />}
      <lineBasicMaterial color="teal" transparent opacity={0.7} />
    </line>
  );
}

// Line Component: Creates a line between two points
// function Line({
//   start,
//   end,
// }: {
//   start: [number, number, number];
//   end: [number, number, number];
// }) {
//   const ref = useRef<any>();
//   const [geometry, setGeometry] = useState<THREE.BufferGeometry | null>(null);

//   useEffect(() => {
//     const vertices = [start, end].map((point) => new THREE.Vector3(...point));
//     const geometry = new THREE.BufferGeometry().setFromPoints(vertices);
//     setGeometry(geometry);
//   }, [start, end]);

//   useFrame(() => {
//     if (ref.current && ref.current.geometry && geometry) {
//       ref.current.geometry = geometry;
//     }
//   });

//   return (
//     <line ref={ref}>
//       {geometry && <bufferGeometry />}
//       <lineBasicMaterial color="teal" transparent opacity={0.7} />
//     </line>
//   );
// }
