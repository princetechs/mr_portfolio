// pages/index.tsx
"use client"
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Box, CameraControls, Center, GizmoViewport, OrbitControls, PerspectiveCamera, Text3D } from '@react-three/drei';
import { useState, Suspense } from 'react';
import { Euler } from 'three'; // Import Euler
import Exp from '../model/exp';
export default function Home() {

    return (
        <>
            <Canvas shadows  style={{ width: '30vw', height: '35vh' }}  >
                {/* <color attach="background" args={['#fff']} /> */}
                <Suspense fallback={null}>
                    <Exp />
                </Suspense>
               
            </Canvas>
        </>
    );


}