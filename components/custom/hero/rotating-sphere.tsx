import { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

// Main RotatingSphere component
const labels = ["AI Experience", "About Me", "Projects", "Contact"];

export function RotatingSphere() {
  const groupRef = useRef<THREE.Group>(null);

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

  // Slow rotation for the group
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0005;
      groupRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Lighting */}
      <ambientLight intensity={0.5} color="#112f39" />
      <directionalLight position={[5, 5, 5]} intensity={0.6} castShadow />

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
          <BillboardBox position={pos} args={[1, 0.5, 0.1]} color={"#fafafa"} />
        </group>
      ))}

      {/* Post-processing for glow */}
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.3}
          luminanceSmoothing={0.9}
          intensity={0.7}
        />
      </EffectComposer>
    </group>
  );
}

// Updated BillboardBox with semi-transparent glass-like effect and glow
function BillboardBox({
  position,
  args,
  color,
}: {
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
    <mesh ref={ref} position={position} castShadow receiveShadow>
      {/* Slight rounded box geometry */}
      <boxGeometry args={args} />

      {/* Semi-transparent material for glass-like appearance */}
      <meshPhysicalMaterial
        color={color}
        transparent
        opacity={0.7} // More transparency for subtle look
        roughness={0.2}
        metalness={0.7}
        reflectivity={0.8}
        clearcoat={0.8}
        clearcoatRoughness={0.1}
        emissive={"#00b3b3"}
        emissiveIntensity={0.3} // Subtle inner glow
      />
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
