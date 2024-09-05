"use client";

import { useRef, useEffect, useState } from "react";
import {
  useFrame,
  useThree,
  extend,
  Object3DNode,
  MaterialNode,
} from "@react-three/fiber";
import { EffectComposer, Bloom, LensFlare } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";

import { useControls } from "leva";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import { Text } from "@react-three/drei";

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
        <sphereGeometry args={[0.2, 64, 64]} />
        <meshPhysicalMaterial
          color={"#134e4a"}
          metalness={0.9}
          roughness={0.2}
          clearcoat={0.9}
          clearcoatRoughness={0.05}
          reflectivity={0.9}
          emissive={"#14b8a6"}
          envMapIntensity={1}
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

      {/* Post-processing for glow */}
      {/* <EffectComposer>
        <Bloom
          luminanceThreshold={0.7}
          luminanceSmoothing={1}
          intensity={0.02}
        />
      </EffectComposer> */}
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
  const ref = useRef<THREE.Mesh>(null);
  const { camera } = useThree();

  // Face the camera in every frame
  useFrame(() => {
    if (ref.current) {
      ref.current.lookAt(camera.position);
    }
  });

  return (
    <mesh ref={ref} position={position} castShadow receiveShadow scale={0.3}>
      {/* Slight rounded box geometry */}
      {/* <boxGeometry args={args} /> */}

      {/* Semi-transparent material for glass-like appearance */}
      {/* <meshPhysicalMaterial
        color={color}
        roughness={0.2}
        metalness={0.5}
        reflectivity={0.8}
        clearcoat={1}
        clearcoatRoughness={0.15}
      /> */}
      <Text anchorX="center" anchorY="middle">
        {" "}
        {labels[index]}{" "}
      </Text>
    </mesh>
  );
}

// Line Component: Creates a line between two points
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
    const vertices = [start, end].map((point) => new THREE.Vector3(...point));
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
      <lineBasicMaterial color="teal" />
    </line>
  );
}
