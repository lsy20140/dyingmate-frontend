  //Camera.tsx
  import { OrbitControls } from "@react-three/drei";
  import { useThree } from "@react-three/fiber";
  import { useEffect, useRef } from "react";
  import { Vector3 } from "three";
  import gsap from 'gsap'

  
   const CameraControls = ({position, target}) => {
     //Initialize camera controls
     const {
       camera,
       gl: { domElement },
     } = useThree();
     const ref = useRef(null);

     // Determines camera up Axis
     camera.up = new Vector3(0, 1, 0);

     function cameraAnimate() {
      if (ref.current) {
        gsap.timeline().to(
          camera.position, 
          {
            duration: 2,
            repeat: 0,
            x: position.x,
            y: position.y,
            z: position.z,
            ease: "power3.inOut",
        });

        gsap.timeline().to(
          ref.current.target,
          {
            duration: 2,
            repeat: 0,
            x: target.x,
            y: target.y,
            z: target.z,
            ease: "power3.inOut",
          },
          "<"
        );
      }
    }

    useEffect(() => {
      cameraAnimate();
    }, [target, position]);

     // return the controls object   
     return (
       <OrbitControls
          ref={ref}
          args={[camera, domElement]}
          maxDistance={22}
          minDistance={10}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI/ 3}
          maxAzimuthAngle={Math.PI / 1.5}
          minAzimuthAngle={Math.PI / 3}
          rotateSpeed={0.1}
       />
     );
   };

  export { CameraControls };
