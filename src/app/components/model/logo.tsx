// pages/index.tsx
"use client"
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { CameraShake, Center, OrbitControls, Text3D } from '@react-three/drei';
export default function Logo() {

    return (
        <>
            <Canvas shadows camera={{ position: [0, 0, 3] }} style={{ width: '10vw', height: '8vh' }} >
                {/* <color attach="background" args={['#fff']} /> */}
                <Suspense fallback={null}>
                    <OrbitControls />
                    <CameraShake
                        maxPitch={0.05}
                        maxRoll={0.05}
                        maxYaw={0.05}
                        pitchFrequency={0.8} 
                        rollFrequency={0.8}
                        yawFrequency={0.8}
                    />
                    <Center >
                        <Text3D font={"/font/roboto.typeface.json"} smooth={0.1}
                        >
                            <meshBasicMaterial attach="material" color="#8B5CF6" />
                            DevSan
                        </Text3D>
                    </Center>
                </Suspense>

            </Canvas>
        </>
    );


}