import React, { useEffect, useMemo, useRef } from 'react'
import { usePlay } from '../contexts/Play';
import { useFrame } from "@react-three/fiber";
import {PerspectiveCamera, OrbitControls, useScroll} from "@react-three/drei";
import * as THREE from "three";
import { Euler, Group, Vector3 } from "three";
import { MainBackground } from './MainBackground';
import { Main_Ground } from './models/Outside/MainGround';

// 상수 선언
const CURVE_AHEAD_CAMERA = 0.1
const LINE_NB_POINTS = 50


export default function MainExperience() {

  const cameraRef = useRef();
  const scroll = useScroll();
  const lastScroll = useRef(0)
  const sceneOpacity = 0

  const {play, setHasScroll, end} = usePlay()

  const curvePoints = useMemo(
    () => [
      new THREE.Vector3(126,3,-27),
      new THREE.Vector3(90,3,-15),
      new THREE.Vector3(63,3,-9),
      new THREE.Vector3(20,4,-7),
      new THREE.Vector3(0,4,-12),
      new THREE.Vector3(-30,4,-28),
      new THREE.Vector3(-55,5,-50),
      new THREE.Vector3(-65,5,-75),
      new THREE.Vector3(-73,5,-105),
      new THREE.Vector3(-80,5,-145),
      new THREE.Vector3(-60,5,-185),
      new THREE.Vector3(-40,5,-203),
      new THREE.Vector3(0,5,-215),
    ],
    []
  );

  // 경로 생성
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(
      curvePoints,
      false, 
      "catmullrom",
      0.5
    )
  },[])

  const linePoints = useMemo(() => {
    return curve.getPoints(LINE_NB_POINTS)
  }, [curve])

  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -2)
    shape.lineTo(0, 0.2)
    
    return shape
  }, [curve])

  const backgroundColors = useRef({
    colorA: "#a8daff",
    colorB: "white",
  });

  useFrame((_state, delta) => {
    if (lastScroll.current <= 0 && scroll.offset > 0) {
      setHasScroll(true);
    }

    if (play && !end && sceneOpacity.current < 1) {
      sceneOpacity.current = THREE.MathUtils.lerp(
        sceneOpacity.current,
        1,
        delta * 0.1 
      );
    }

    if (end && sceneOpacity.current > 0) {
      sceneOpacity.current = THREE.MathUtils.lerp(
        sceneOpacity.current,
        0,
        delta
      );
    }

    if (end) {
      return;
    }

    const scrollOffset = Math.max(0, scroll.offset);

    let friction = 1;


    // CALCULATE LERPED SCROLL OFFSET
    let lerpedScrollOffset = THREE.MathUtils.lerp(
      lastScroll.current,
      scrollOffset,
      delta * friction * 48
    );
    // PROTECT BELOW 0 AND ABOVE 1
    lerpedScrollOffset = Math.min(lerpedScrollOffset, 1);
    lerpedScrollOffset = Math.max(lerpedScrollOffset, 0);

    lastScroll.current = lerpedScrollOffset;

    const curPoint = curve.getPoint(lerpedScrollOffset);
    cameraRef.current.position.lerp(curPoint, delta);

    // Make the group look ahead on the curve

    const lookAtPoint = curve.getPoint(
      Math.min(lerpedScrollOffset + CURVE_AHEAD_CAMERA, 1)
    );

    const currentLookAt = cameraRef.current.getWorldDirection(
      new THREE.Vector3()
    );
    const targetLookAt = new THREE.Vector3()
      .subVectors(curPoint, lookAtPoint)
      .normalize();

    const lookAt = currentLookAt.lerp(targetLookAt, delta);
    cameraRef.current.lookAt(
      cameraRef.current.position.clone().add(lookAt)
    );
  })

  return useMemo(() =>
  (
    <>
      {/* <OrbitControls/> */}
      <directionalLight position={[0, 3, 1]} intensity={1} />
      <group ref={cameraRef} position={[126,3,-27]}>
        <MainBackground backgroundColors={backgroundColors} />
        <PerspectiveCamera position={[0,-1,0]} fov={60} makeDefault />
      </group>

      {/* <group position={[0, -2, 0]}>
        <mesh>
          <extrudeGeometry
            args={[
              shape, 
              {
                steps: LINE_NB_POINTS,
                bevelEnabled: false,
                extrudePath: curve,
              }
            ]} />
            <meshStandardMaterial color={"red"} opacity={1} transparent/>
        </mesh>
      </group> */}
      <group position={[0,-22,0]}>
        <Main_Ground />
      </group>


    </>

  )
  ) 
}
