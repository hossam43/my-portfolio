/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.8 envelop.gltf
*/

import React, { useRef } from 'react'
import { useGLTF, OrthographicCamera } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/envelop.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[28, 30, 18]}>
          <mesh geometry={nodes.Rectangle_4.geometry} material={materials['default']} position={[-1.456, -0.127, 1.175]} scale={0.861} />
          <mesh geometry={nodes.Rectangle_3.geometry} material={materials['default']} position={[-1.456, 11.472, 1.175]} scale={0.861} />
          <mesh geometry={nodes.Rectangle_2.geometry} material={materials['default']} position={[-1.006, -6.227, -2.442]} scale={0.861} />
          <mesh geometry={nodes.Cube.geometry} material={materials['default']} position={[0, -22.939, 9.254]} scale={0.861} />
        </group>
        <OrthographicCamera makeDefault={false} far={100000} near={0} position={[-709.299, 258.773, 1014.486]} rotation={[-0.229, -0.704, -0.15]} />
        <pointLight intensity={1} decay={2} distance={2000} position={[32.196, 102.737, 0]} />
        <directionalLight intensity={0.7} decay={2} rotation={[-0.078, 0.308, 0.254]} />
        <OrthographicCamera makeDefault={false} far={100000} near={0} position={[-445.383, 642.686, 989.54]} rotation={[-0.746, -0.456, -0.387]} />
      </group>
    </group>
  )
}

useGLTF.preload('/envelop.gltf')