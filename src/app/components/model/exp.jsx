"use client"

import { FaceControls, OrbitControls, SpotLight, Se } from "@react-three/drei"
import { Devsan } from '@/app/components/model/devsan'
import { useThree } from "@react-three/fiber";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { useEffect } from "react";
export default function Exp(props) {
  const { camera } = useThree();

  // Set the default zoom level by adjusting the camera position
  camera.position.set(0.3, 0.4, 1.6); // Adjust these values as needed

  useEffect(() => {
    const hasSeenWalkthrough = localStorage.getItem('hasSeenWalkthrough');
    if (!hasSeenWalkthrough) {
      const driverObj = driver({
        showProgress: true,
        steps: [
          { element: 'saj', popover: { title: 'Intro', description: 'Click On Shirt For Intro', side: "right", align: 'start' } },
          { element: '#dev_chat', popover: { title: 'Ask Me AnyThing', description: 'You can type any questions about my experience.', side: "bottom", align: 'start' } },
          { popover: { title: 'Enjoy', description: 'Please Give A Star On Github.' } }
        ]
      });
      driverObj.drive();
      localStorage.setItem('hasSeenWalkthrough', 'true');

    }


  }, []);

  return (

    <>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.2} color="blue" />
      <SpotLight
        position={[0, 2, 1.3]} // Adjust the position of the spotlight
        angle={Math.PI / 8} // Angle of the spotlight cone
        penumbra={0.2} // Softness of the spotlight edges
        intensity={6} // Brightness of the spotlight
        distance={20} // How far the spotlight reaches
        decay={2} // Light decay factor
        color="white" // Spotlight color
      />
      <Devsan position={[0, -1, 0]} scale={1} />

    </>
  );
}
