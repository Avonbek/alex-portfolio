import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function NodeGrid() {
  const groupRef = useRef<THREE.Group>(null);

  // Generate a grid of positions (same as before)
  const nodePositions: [number, number, number][] = Array.from(
    { length: 100 },
    (_, i) => [(i % 10) - 5, Math.floor(i / 10) - 5, 0]
  );

  return (
    <group ref={groupRef}>
      {/* Create Nodes */}
      {nodePositions.map((pos, index) => (
        <mesh key={index} position={pos}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial color={0x115e59} />
        </mesh>
      ))}

      {/* Create Connecting Lines */}
      {/* <lineSegments ref={linesRef} geometry={linesGeometry}>
        <lineBasicMaterial color={0x134e4a} />
      </lineSegments> */}
    </group>
  );
}

// Create a basic ongoing animation for the grid using useFrame
// useFrame(() => {
//   if (groupRef.current) {
//     groupRef.current.rotation.x += 0.005;
//     groupRef.current.rotation.y += 0.005;
//   }
// });
// const linesRef = useRef<THREE.LineSegments>(null);

// Generate a grid of positions
// const nodePositions = useMemo(() => {
//   const positions = [];
//   const size = 3;
//   const separation = 2;

//   for (let x = -size; x <= size; x += separation) {
//     for (let y = -size; y <= size; y += separation) {
//       for (let z = -size; z <= size; z += separation) {
//         positions.push(new THREE.Vector3(x, y, z));
//       }
//     }
//   }
//   return positions;
// }, []);

// Create lines connecting each node
// const linesGeometry = useMemo(() => {
//   const geometry = new THREE.BufferGeometry();
//   const vertices: any[] = [];

//   nodePositions.forEach((pos, index) => {
//     // Connect each point with the next point in the array
//     if (index < nodePositions.length - 1) {
//       vertices.push(pos.x, pos.y, pos.z);
//       vertices.push(
//         nodePositions[index + 1].x,
//         nodePositions[index + 1].y,
//         nodePositions[index + 1].z
//       );
//     }
//   });

//   geometry.setAttribute(
//     "position",
//     new THREE.Float32BufferAttribute(vertices, 3)
//   );
//   return geometry;
// }, [nodePositions]);

// const handleMouseMove = (event: MouseEvent) => {
//   if (groupRef.current) {
//     const { innerWidth, innerHeight } = window;
//     const mouseX = (event.clientX / innerWidth) * 2 - 1;
//     const mouseY = -(event.clientY / innerHeight) * 2 + 1;
//     // Rotate group based on mouse position
//     groupRef.current.rotation.x = mouseY * 0.1;
//     groupRef.current.rotation.y = mouseX * 0.1;
//   }
// };
// useFrame(() => {
//   if (typeof window !== "undefined") {
//     window.addEventListener("mousemove", handleMouseMove);
//   }
// });
