import React from 'react';
import {Canvas, useLoader} from '@react-three/fiber';
import {TextureLoader} from 'three';
import {OrbitControls} from '@react-three/drei';
import { Line, Html } from '@react-three/drei';

const MarkerWithArrow = ({ lat, lon, name }: { lat: number; lon: number; name: string }) => {
 const basePos = latLongToVector3(lat, lon, 4.01); // 마커 위치
 const verticalTop = [basePos[0], basePos[1] + 0.5, basePos[2]];
 const horizontalEnd = [basePos[0] + 1.5, basePos[1] + 0.5, basePos[2]];

 return (
  <>
   {/* 마커 */}
   <mesh position={basePos as any}>
    <sphereGeometry args={[0.05, 16, 16]} />
    <meshStandardMaterial color='red' />
   </mesh>

   {/* ㄱ자 라인 (3D) */}
   <Line points={[basePos, verticalTop, horizontalEnd]} color="black" lineWidth={1} />

   {/* 텍스트 */}
   <Html position={horizontalEnd} distanceFactor={10}>
    <div style={{
     background: 'white',
     padding: '4px 10px',
     borderRadius: '6px',
     fontSize: '0.8rem',
     whiteSpace: 'nowrap',
     boxShadow: '0 0 5px rgba(0,0,0,0.2)'
    }}>
     {name}
    </div>
   </Html>
  </>
 );
};


const latLongToVector3 = (lat: number, lon: number, radius: number) => {
 const phi = (90 - lat) * (Math.PI / 180);
 const theta = (lon + 180) * (Math.PI / 180);
 const x = -radius * Math.sin(phi) * Math.cos(theta);
 const y = radius * Math.cos(phi);
 const z = radius * Math.sin(phi) * Math.sin(theta);
 return [x, y, z];
};

const Marker = ({ lat, lon, name }: { lat: number; lon: number; name: string }) => {
 const [hovered, setHovered] = React.useState(false);
 const pos = latLongToVector3(lat, lon, 4.01);
 return (
  <group position={pos as any}>
   <mesh
    onPointerOver={() => setHovered(true)}
    onPointerOut={() => setHovered(false)}
   >
    <sphereGeometry args={[0.05, 16, 16]} />
    <meshStandardMaterial color={hovered ? 'orange' : 'red'} />
   </mesh>
   {hovered && (
    <Html distanceFactor={10} center>
     <div style={{ background: 'white', padding: '4px 8px', borderRadius: '6px', fontSize: '0.8rem' }}>
      {name}
     </div>
    </Html>
   )}
  </group>
 );
};


const markerData = [
 { name: '중국', lat: 35.8617, lon: 104.1954 },
 { name: '유럽', lat: 50.1109, lon: 8.6821 }, // 프랑크푸르트 기준
 { name: '인도네시아', lat: -0.7893, lon: 113.9213 },
 { name: '방글라데시', lat: 23.685, lon: 90.3563 },
];

const ThreeDScene: React.FC = () => {
 const texture = useLoader(TextureLoader, '/textures/world.webp'); // 지구 텍스처 경로

 return (
  <Canvas camera={{ position: [0, 2, 10] }}>
   <ambientLight intensity={1.5} />  {/* 기존 0.5 → 1.5 */}
   <directionalLight position={[5, 5, 5]} intensity={2} /> {/* 기존 1 → 2 */}
   <pointLight position={[-5, -5, -5]} intensity={1} />

   {/* 지구본 추가 */}
   <mesh>
    <sphereGeometry args={[4, 32, 32]} />
    <meshStandardMaterial map={texture} />
   </mesh>

   {markerData.map((data, idx) => (
    <MarkerWithArrow  key={idx} {...data} />
   ))}

   <OrbitControls enableZoom={false}/>
  </Canvas>
 );
};

export default ThreeDScene;