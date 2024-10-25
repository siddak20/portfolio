'use client'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';

const AvatarBody = () => {
    const { scene } = useGLTF("./earth/scene.gltf");
    return (
        <mesh scale={2.7}>
            <primitive object={scene} />
        </mesh>
    );
}

const Avatar = () => {
  return (
    <Canvas>
        <ambientLight intensity={1} />
        <directionalLight intensity={0.5} position={[5, 5, 5]} />
        <AvatarBody />
        <OrbitControls enableZoom={true} />
        <Preload all />
    </Canvas>
  );
}

export default Avatar;
