/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 room_model.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Room(props) {
  const { nodes, materials } = useGLTF('/models/room_model.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[14.22, 10.673, -2.912]} rotation={[Math.PI / 2, 0, 2.777]} scale={[0.057, 0.057, 0.082]}>
        <mesh geometry={nodes.Potted_plants004_1.geometry} material={materials['Potted_plants.003']} />
        <mesh geometry={nodes.Potted_plants004_2.geometry} material={materials['Material.044']} />
        <mesh geometry={nodes.Potted_plants004_3.geometry} material={materials['Material.016']} />
        <mesh geometry={nodes.Potted_plants004_4.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Potted_plants004_5.geometry} material={materials['Material.012']} />
        <mesh geometry={nodes.Potted_plants004_6.geometry} material={materials['Material #2.003']} />
        <mesh geometry={nodes.Potted_plants004_7.geometry} material={materials['Material.035']} />
        <mesh geometry={nodes.Potted_plants004_8.geometry} material={materials['Material.032']} />
        <mesh geometry={nodes.Potted_plants004_9.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Potted_plants004_10.geometry} material={materials['Material.050']} />
        <mesh geometry={nodes.Potted_plants004_11.geometry} material={materials['Material.051']} />
        <mesh geometry={nodes.Potted_plants004_12.geometry} material={materials['Material.049']} />
        <mesh geometry={nodes.Potted_plants004_13.geometry} material={materials['Potted_plants.001']} />
        <mesh geometry={nodes.Potted_plants004_14.geometry} material={materials['Potted_plants.002']} />
        <mesh geometry={nodes.Potted_plants004_15.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Potted_plants004_16.geometry} material={materials['Material.033']} />
        <mesh geometry={nodes.Potted_plants004_17.geometry} material={materials['Material.048']} />
        <mesh geometry={nodes.Potted_plants004_18.geometry} material={materials['Material.052']} />
        <mesh geometry={nodes.Potted_plants004_19.geometry} material={materials['Material.053']} />
        <mesh geometry={nodes.Potted_plants004_20.geometry} material={materials['Material.054']} />
        <mesh geometry={nodes.Potted_plants004_21.geometry} material={materials['Material.056']} />
        <mesh geometry={nodes.Potted_plants004_22.geometry} material={materials['Material.057']} />
        <mesh geometry={nodes.Potted_plants004_23.geometry} material={materials['Material.019']} />
        <mesh geometry={nodes.Potted_plants004_24.geometry} material={materials['Material.082']} />
        <mesh geometry={nodes.Potted_plants004_25.geometry} material={materials['Material.083']} />
        <mesh geometry={nodes.Potted_plants004_26.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Potted_plants004_27.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Potted_plants004_28.geometry} material={nodes.Potted_plants004_28.material} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/room_model.gltf')
