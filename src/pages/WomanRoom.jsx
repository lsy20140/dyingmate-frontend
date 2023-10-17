import React, { useEffect, useState } from 'react'
import { Canvas } from "@react-three/fiber";
import { Woman_Room } from '../components/models/WomanRoom/WomanRoom';
import {OrbitControls} from '@react-three/drei'
import { CameraControls } from '../Camera';
import { useRoomFocus } from '../contexts/RoomFocus';
import CharMainDialog from '../components/ui/CharMainDialog';
import { MessageArr } from '../data/woman_script';

export default function WomanRoom() {
  const {focus} = useRoomFocus();
  const [position, setPosition] = useState({ x: 24, y: 8, z: 0 });
  const [target, setTarget] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    if(focus) {
      setPosition({ x: 0, y: 3, z: 1 });
      setTarget({ x: -4, y: 0, z: 0 });
    }
    else {
      setPosition({ x: 24, y: 8, z: 0 });
      setTarget({ x: 0, y: 0, z: 0});
    }
  },[focus])

  return (
    <>
      <Canvas camera={{fov: 30, position:[30,8,0]}} colorManagement>
        <OrbitControls/>
        {/* <LightHelper /> */}
        <axesHelper args={[200, 200, 200]} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={1}  decay={2} color="#eca864" position={[ 17, 12.421, -2]} target-position={[0, 9, 2]} />
        <directionalLight intensity={1.2} castShadow decay={2} color="#d8b58d" position={[22, 15.344, -5]} target-position={[2, 10, 0]} />
        <CameraControls position={position} target={target} />
        <group rotation-y={-Math.PI} rotation-z={-Math.PI/10} position-y={-6}>
          <Woman_Room/>
          {/* Woman 에셋 넣기 */}
        </group>
      </Canvas>
      <CharMainDialog messageArr={MessageArr} stageNum={3} />
    </>
  )
}
