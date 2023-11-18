// pages/index.tsx
"use client"

import { Canvas } from '@react-three/fiber';

import Exp from '../model/exp';
export default function Home() {

    return (
        <>
            <Canvas shadows style={{ width: '45vw', height: '90vh' }}  >
                {/* <color attach="background" args={['#fff']} /> */}
                <Exp />

            </Canvas>
        </>
    );


}