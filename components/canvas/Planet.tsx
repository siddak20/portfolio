'use client'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas} from '@react-three/fiber'
import React, { Suspense, useRef } from 'react'
import CanvasLoader from '../Loader';


const RotatingPlanet: React.FC = () => {
    const { scene } = useGLTF("./planet/scene.gltf");
    const ref = useRef(null);


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
            <Suspense fallback={<CanvasLoader/>}>
            <RotatingPlanet />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default Planet;
