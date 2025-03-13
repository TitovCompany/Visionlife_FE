import React from 'react';
import {Canvas, useLoader} from '@react-three/fiber';
import {TextureLoader} from 'three';
import {OrbitControls} from '@react-three/drei';

const ThreeDScene: React.FC = () => {
 const texture = useLoader(TextureLoader, '/textures/world.jpg'); // 지구 텍스처 경로

 return (
  <Canvas camera={{ position: [0, 2, 5] }}>
   <ambientLight intensity={1.5} />  {/* 기존 0.5 → 1.5 */}
   <directionalLight position={[5, 5, 5]} intensity={2} /> {/* 기존 1 → 2 */}
   <pointLight position={[-5, -5, -5]} intensity={1} />

   {/* 🌍 지구본 추가 */}
   <mesh>
    <sphereGeometry args={[2, 32, 32]} />
    <meshStandardMaterial map={texture} />
   </mesh>

   <OrbitControls />
  </Canvas>
 );
};

export default ThreeDScene;