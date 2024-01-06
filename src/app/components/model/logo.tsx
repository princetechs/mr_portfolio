// pages/index.tsx
"use client"
import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { CameraShake, Center, Text3D } from '@react-three/drei';

const Logo: React.FC = () => {
    const [logoSize, setLogoSize] = useState({ width: '15vw', height: '12vh' });

    useEffect(() => {
        const handleResize = () => {
            setLogoSize({
                width: window.innerWidth < 768 ? '80vw' : '15vw', // Adjust width based on window width
                height: window.innerWidth < 768 ? '20vh' : '12vh', // Adjust height based on window width
            });
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call initially to set logo size
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <Canvas shadows camera={{ position: [0, 0, 3] }} style={{ width: logoSize.width, height: logoSize.height }}>
                {/* <color attach="background" args={['#fff']} /> */}
                <Suspense fallback={null}>
                    <CameraShake
                        maxPitch={0.05}
                        maxRoll={0.05}
                        maxYaw={0.05}
                        pitchFrequency={0.8}
                        rollFrequency={0.8}
                        yawFrequency={0.8}
                    />
                    <Center >
                        <Text3D font={"/font/roboto.typeface.json"}>
                            <meshBasicMaterial attach="material" color="#8B5CF6" />
                            DevSan
                        </Text3D>
                    </Center>
                </Suspense>
            </Canvas>
        </>
    );
};

export default Logo;
