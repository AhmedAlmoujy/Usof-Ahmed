import { useRef, useState, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Line } from '@react-three/drei';
import * as THREE from 'three';

// Utility for generating bolt data outside the component to avoid hook issues
const generateBoltData = (startX, startY, startZ, depth = 0, counter = { val: 0 }) => {
  const points = [];
  let current = new THREE.Vector3(
    startX ?? (Math.random() - 0.5) * 80,
    startY ?? 25,
    startZ ?? (Math.random() - 0.5) * 20 - 20
  );
  points.push(current.clone());
  
  const segments = depth === 0 ? 15 : 8;
  const branches = [];

  for (let i = 0; i < segments; i++) {
    current = current.clone();
    current.x += (Math.random() - 0.5) * (depth === 0 ? 12 : 6);
    current.y -= (depth === 0 ? 50 : 20) / segments;
    current.z += (Math.random() - 0.5) * 6;
    points.push(current);

    if (depth === 0 && i > 3 && Math.random() > 0.85) {
      branches.push(generateBoltData(current.x, current.y, current.z, depth + 1, counter));
    }
  }

  counter.val += 1;
  return {
    id: `${Date.now()}-${counter.val}-${Math.random()}`,
    points,
    opacity: 1,
    isBranch: depth > 0,
    lightPos: points[Math.floor(points.length / 2)],
    branches
  };
};

function LightningManager() {
  const [bolts, setBolts] = useState([]);
  const counter = useRef({ val: 0 });

  useFrame((state, delta) => {
    // Controlled frequency
    const shouldStrike = Math.random() > 0.94;
    
    setBolts((prev) => {
      // 1. Update opacity of existing bolts
      const updated = prev.map((b) => {
        const nextOpacity = b.opacity * 0.85;
        return {
          ...b,
          opacity: nextOpacity,
          branches: b.branches.map(br => ({ ...br, opacity: nextOpacity }))
        };
      }).filter(b => b.opacity > 0.02);

      // 2. Add new bolt if triggered
      if (shouldStrike) {
        return [...updated, generateBoltData(undefined, undefined, undefined, 0, counter.current)];
      }

      // 3. Prevent unnecessary state updates if nothing changed
      if (updated.length === 0 && prev.length === 0) return prev;
      return updated;
    });
  });

  return (
    <group>
      {bolts.map((bolt) => (
        <group key={bolt.id}>
          {/* Main Bolt */}
          <Line
            points={bolt.points}
            color="#00FFFF"
            lineWidth={6}
            transparent
            opacity={bolt.opacity}
          />
          {/* Sub Branches (Wings) */}
          {bolt.branches.map((branch) => (
            <Line
              key={branch.id}
              points={branch.points}
              color="#00FFFF"
              lineWidth={2}
              transparent
              opacity={branch.opacity}
            />
          ))}
          {/* Light Hit */}
          {bolt.opacity > 0.6 && (
            <pointLight 
              position={bolt.lightPos} 
              color="#FFFFFF" 
              intensity={bolt.opacity * 120} 
              distance={120} 
              decay={1}
            />
          )}
        </group>
      ))}
    </group>
  );
}

export default function Scene3D() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}>
      <Canvas 
        camera={{ position: [0, 0, 40], fov: 60 }} 
        gl={{ antialias: false, stencil: false, depth: true }}
        dpr={[1, 2]} // Support high-resolution screens but capped at 2
      >
        <Stars 
          radius={150} 
          depth={60} 
          count={25000} // Increased even more for "alot of it"
          factor={5} 
          saturation={0} 
          fade 
          speed={0.5} 
        />
        <LightningManager />
        <ambientLight intensity={0.2} />
      </Canvas>
    </div>
  );
}
