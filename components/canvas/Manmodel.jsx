'use client'
import React, { Suspense, useEffect, useRef } from 'react'
import { Canvas} from '@react-three/fiber'
import { useGLTF, OrbitControls, useFBX, useAnimations } from '@react-three/drei'
import { Computers } from './Computers';
import CanvasLoader from '../Loader';

function Model(props){
  const group=useRef();
  const {nodes,materials}=useGLTF('./3dman/manmodel.glb');
  const {animations:wavingAnimation}=useFBX("./3dman/Typing.fbx");
     wavingAnimation[0].name="waving";
     const {actions}=useAnimations(wavingAnimation,group);
     useEffect(()=>{
      console.log(Object.keys(nodes));
       actions["waving"]?.reset().play()
     },[actions,nodes])
  return (
    <group {...props} dispose={null} ref={group} rotation-x={-Math.PI/2} position={[0,-1.3,-2.7]}>
      <primitive object={nodes.Hips} scale={3}  />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
    </group>
  )
}
// function Model(props: any) {
//   const group=useRef();
//   const { scene } = useGLTF('./3dman/manmodel.glb')
//   const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
//   const { nodes, materials } = useGraph(clone)
//   const {animations:wavingAnimation}=useFBX("./3dman/waving.fbx");
//   wavingAnimation[0].name="waving";
//   const {actions}=useAnimations(wavingAnimation,group);
//   useEffect(()=>{
//     actions["waving"]?.reset().play
//   })
//   return (
//     <group ref={group}>
//     <mesh>
//       <primitive
//       object={scene}
//       scale={2.8}
//       position={[0,-3,0]}
//       />
//     </mesh>
//     </group>
//   )
// }

export default function Modelman() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, -2.5, 12], fov: 30 }}
    >
      <ambientLight intensity={1} />
      <pointLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
      <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} enableZoom={false} /> {/* Allow zooming for better control */}
      <Suspense fallback={<CanvasLoader/>}>
      <group scale={1}>
        <Model />
        <mesh position={[0, -1.73, -2.4]}>
          <boxGeometry args={[1.4,1.4,1.4]} />
          <meshStandardMaterial color="#C8ACD6" /> {/* Added material to make the box visible */}
        </mesh>
        <Computers isMobile={false}/>
      </group>
      </Suspense>
    </Canvas>
  )
}

useGLTF.preload('./3dman/manmodel.glb')
