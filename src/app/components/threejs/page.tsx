// pages/index.tsx
"use client"
import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Exp from '../model/exp';

export default function Home() {
    const [canvasSize, setCanvasSize] = useState({ width: '45vw', height: '90vh' });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) { // Adjust this breakpoint as needed
                setCanvasSize({
                    width: `${window.innerWidth}px`, // Full width of the window
                    height: `${window.innerHeight}px`, // Full height of the window
                });
            } else {
                setCanvasSize({
                    width: `${window.innerWidth * 0.45}px`, // 45% of the window width
                    height: `${window.innerHeight * 0.9}px`, // 90% of the window height
                });
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call initially to set canvas size
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <Canvas shadows style={{ width: canvasSize.width, height: canvasSize.height }}>
                {/* <color attach="background" args={['#fff']} /> */}
                <Exp />
            </Canvas>
        </>
    );
}

