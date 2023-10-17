import React, {useEffect, useState } from 'react'
import { Canvas } from "@react-three/fiber";
import { Man_Room } from '../components/models/ManRoom/ManRoom';
import {OrbitControls} from '@react-three/drei'
import { CameraControls } from '../Camera';
import { useRoomFocus } from '../contexts/RoomFocus';
import { Man } from '../components/models/ManRoom/Man';
import CharMainDialog from '../components/ui/CharMainDialog';
import { MessageArr } from '../data/man_script';

export default function ManRoom() {
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
      <Canvas camera={{fov: 30, position:[24,8,0]}} colorManagement>
        <OrbitControls/>
        {/* <LightHelper /> */}
        <axesHelper args={[200, 200, 200]} />
        <ambientLight intensity={50} />
        <directionalLight intensity={8}  decay={1} color="#ffffff" position={[ 20, 3, -2]} target-position={[-5, 2, 2]} />
        <directionalLight intensity={10} castShadow decay={2} color="#ffffff" position={[20, 5, -5]} target-position={[2, 2, 0]} />
        <CameraControls position={position} target={target} />
        <group rotation-y={-Math.PI} rotation-z={-Math.PI/10} position-y={-5}>
          <Man_Room/>
          <Man/>
        </group>
      </Canvas>
      <CharMainDialog messageArr={MessageArr} stageNum={2} />
    </>
  )
}
