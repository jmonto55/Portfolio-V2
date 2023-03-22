import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber'; //canvas is just an empty canvas that lets us put something on it
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'; //OrbitControls is a camera that lets us move around the scene

import CanvasLoader from '../Loader'

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./holo/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight 
        position={[ -10, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 6 : 13}
        position={isMobile ? [-0.5,-1, -0.25] : [-0.5,-1, -0.5]}
        rotation={[0, 1.7, 0]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQuChange = (event) => {
      setIsMobile(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQuChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQuChange);
    };
  }, [])
  
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }} //x, y, z axis. field of view
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* loader while model is loading */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls //camera controls
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2} //max angle you can move the camera up
          minPolarAngle={Math.PI / 2} //max angle you can move the camera down
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas;
