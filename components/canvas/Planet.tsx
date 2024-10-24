'use client'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import {Group} from 'three'

const RotatingPlanet: React.FC = () => {
    const { scene } = useGLTF("./planet/scene.gltf");
    const ref = useRef<Group>(null);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y += 0.01 * delta;
        }
    });

    return (
        <mesh ref={ref}>
            <primitive object={scene} scale={3.2} />
        </mesh>
    );
};

const Planet: React.FC = () => {
    return (
        <Canvas>
            <OrbitControls enableZoom={false}/>
            <RotatingPlanet />
            <Preload all />
        </Canvas>
    );
};

export default Planet;
