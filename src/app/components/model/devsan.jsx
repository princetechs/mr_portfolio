import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import React, { useEffect, useMemo, useRef, useState } from "react";

const corresponding = {
  A: "viseme_PP",
  B: "viseme_kk",
  C: "viseme_I",
  D: "viseme_AA",
  E: "viseme_O",
  F: "viseme_U",
  G: "viseme_FF",
  H: "viseme_TH",
  X: "viseme_PP",
};


export function Devsan(props) {
 
  const {
    playAudio,
    script,
    headFollow,
    smoothMorphTarget,
    morphTargetSmoothing,
  } = useControls({
    playAudio: false,
    headFollow: true,
    smoothMorphTarget: true,
    morphTargetSmoothing: 0.5,
    script: {
      value: "welcome",
      options: ["welcome", "pizzas"],
    },
  });

  const audio = useMemo(() => new Audio(`/audios/${script}.mp3`), [script]);
  // const jsonFile = useLoader(THREE.FileLoader, `audios/${script}.json`);
  // const lipsync = JSON.parse(jsonFile);

  // useFrame(() => {
  //   const currentAudioTime = audio.currentTime;
  //   if (audio.paused || audio.ended) {
  //     setAnimation("Idle");
  //     return;
  //   }

  //   Object.values(corresponding).forEach((value) => {
  //     if (!smoothMorphTarget) {
  //       nodes.Wolf3D_Head.morphTargetInfluences[
  //         nodes.Wolf3D_Head.morphTargetDictionary[value]
  //       ] = 0;
  //       nodes.Wolf3D_Teeth.morphTargetInfluences[
  //         nodes.Wolf3D_Teeth.morphTargetDictionary[value]
  //       ] = 0;
  //     } else {
  //       nodes.Wolf3D_Head.morphTargetInfluences[
  //         nodes.Wolf3D_Head.morphTargetDictionary[value]
  //       ] = THREE.MathUtils.lerp(
  //         nodes.Wolf3D_Head.morphTargetInfluences[
  //           nodes.Wolf3D_Head.morphTargetDictionary[value]
  //         ],
  //         0,
  //         morphTargetSmoothing
  //       );

  //       nodes.Wolf3D_Teeth.morphTargetInfluences[
  //         nodes.Wolf3D_Teeth.morphTargetDictionary[value]
  //       ] = THREE.MathUtils.lerp(
  //         nodes.Wolf3D_Teeth.morphTargetInfluences[
  //           nodes.Wolf3D_Teeth.morphTargetDictionary[value]
  //         ],
  //         0,
  //         morphTargetSmoothing
  //       );
  //     }
  //   });

  //   for (let i = 0; i < lipsync.mouthCues.length; i++) {
  //     const mouthCue = lipsync.mouthCues[i];
  //     if (
  //       currentAudioTime >= mouthCue.start &&
  //       currentAudioTime <= mouthCue.end
  //     ) {
  //       if (!smoothMorphTarget) {
  //         nodes.Wolf3D_Head.morphTargetInfluences[
  //           nodes.Wolf3D_Head.morphTargetDictionary[
  //             corresponding[mouthCue.value]
  //           ]
  //         ] = 1;
  //         nodes.Wolf3D_Teeth.morphTargetInfluences[
  //           nodes.Wolf3D_Teeth.morphTargetDictionary[
  //             corresponding[mouthCue.value]
  //           ]
  //         ] = 1;
  //       } else {
  //         nodes.Wolf3D_Head.morphTargetInfluences[
  //           nodes.Wolf3D_Head.morphTargetDictionary[
  //             corresponding[mouthCue.value]
  //           ]
  //         ] = THREE.MathUtils.lerp(
  //           nodes.Wolf3D_Head.morphTargetInfluences[
  //             nodes.Wolf3D_Head.morphTargetDictionary[
  //               corresponding[mouthCue.value]
  //             ]
  //           ],
  //           1,
  //           morphTargetSmoothing
  //         );
  //         nodes.Wolf3D_Teeth.morphTargetInfluences[
  //           nodes.Wolf3D_Teeth.morphTargetDictionary[
  //             corresponding[mouthCue.value]
  //           ]
  //         ] = THREE.MathUtils.lerp(
  //           nodes.Wolf3D_Teeth.morphTargetInfluences[
  //             nodes.Wolf3D_Teeth.morphTargetDictionary[
  //               corresponding[mouthCue.value]
  //             ]
  //           ],
  //           1,
  //           morphTargetSmoothing
  //         );
  //       }

  //       break;
  //     }
  //   }
  // });

  useEffect(() => {
    // nodes.Wolf3D_Head.morphTargetInfluences[
    //   nodes.Wolf3D_Head.morphTargetDictionary["viseme_I"]
    // ] = 1;
    // nodes.Wolf3D_Teeth.morphTargetInfluences[
    //   nodes.Wolf3D_Teeth.morphTargetDictionary["viseme_I"]
    // ] = 1;
    if (playAudio) {
      audio.play();
      if (script === "welcome") {
        setAnimation("Greeting");
      } else {
        setAnimation("Angry");
      }
    } else {
      setAnimation("Idle");
      audio.pause();
    }
  }, [playAudio, script]);

  const { nodes, materials } = useGLTF(
    "/model/devsan.glb"
  ) ; 
  const { animations: idleAnimation } = useFBX("/animations/Idle.fbx");
  const { animations: angryAnimation } = useFBX(
    "/animations/Angry Gesture.fbx"
  );
  const { animations: greetingAnimation } = useFBX(
    "/animations/Standing Greeting.fbx"
  );

  idleAnimation[0].name = "Idle";
  angryAnimation[0].name = "Angry";
  greetingAnimation[0].name = "Greeting";

  const [animation, setAnimation] = useState("Idle");

  const group_anim = useRef();
  const { actions } = useAnimations(
    [idleAnimation[0], angryAnimation[0], greetingAnimation[0]],
    group_anim
  );

  useEffect(() => {
    actions [animation].reset().fadeIn(0.5).play();
    return () => actions[animation].fadeOut(0.5);
  }, [animation]);

  // CODE ADDED AFTER THE TUTORIAL (but learnt in the portfolio tutorial ♥️)
  useFrame((state) => {
    if (headFollow && group_anim.current) {
      const head = (group_anim.current ).getObjectByName("Head");
      if (head) {
        head.lookAt(state.camera.position);
      }
    }
  });


  
  return (
    <group  {...props} dispose={null} ref={group_anim} >
      <primitive object={nodes.Hips} />
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
        name="Wolf3D_Body"
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        name="Wolf3D_Outfit_Bottom"
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        name="Wolf3D_Outfit_Footwear"
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        name="Wolf3D_Outfit_Top"
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        name="Wolf3D_Hair"
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        name="Wolf3D_Glasses"
        geometry={nodes.Wolf3D_Glasses.geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={nodes.Wolf3D_Glasses.skeleton}
      />
    </group>
  );
}

useGLTF.preload("/model/devsan.glb");