"use client"

import { CameraShake, Cloud, ContactShadows, Environment, Html, OrbitControls, Sky, SpotLight, TransformControls } from "@react-three/drei"
import { Devsan } from '@/app/components/model/devsan'
import { useThree } from "@react-three/fiber";

export default  function Exp(props) {
  const { camera } = useThree();

  // Set the default zoom level by adjusting the camera position
  camera.position.set(0.3, 0.4, 1.6); // Adjust these values as needed

  return (

    <>
      {/* <Sky distance={20000} sunPosition={[-2, 2, 0]} inclination={0} azimuth={0.25} {...props} /> */}
      {/* <Cloud position={[0, 0, -7]} args={[3,2]} /> */}

      {/* <axesHelper scale={2} position={[0, 0, 0]} onUpdate={(self) => self.setColors('#ff2080', '#20ff80', '#2080ff')} /> */}
      <OrbitControls  />
      {/* <ambientLight intensity={0.9} color="blue"/> */}

      {/* <Environment
        background
        blur={0}
        preset="city"
      /> */}
       <SpotLight
        position={[0, 1.5, 1.3]} // Adjust the position of the spotlight
        angle={Math.PI / 8} // Angle of the spotlight cone
        penumbra={0.2} // Softness of the spotlight edges
        intensity={5} // Brightness of the spotlight
        distance={10} // How far the spotlight reaches
        decay={2} // Light decay factor
        color="white" // Spotlight color
      />
      {/* <pointLight position={[1.3, 1.4,1.4]} intensity={20}  /> */}
      {/* <ContactShadows opacity={1} scale={1} blur={1} far={3} position={[0, -1,0]} resolution={100} color="#000000" /> */}
      <Devsan position={[0, -1, 0]} scale={1} />
    

    </>
  );
}
