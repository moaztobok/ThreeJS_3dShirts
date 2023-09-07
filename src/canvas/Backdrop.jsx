import React, { useRef } from 'react'
import {easing} from 'maath'
import {useFrame} from '@react-three/fiber'
import { AccumulativeShadows,RandomizedLight } from '@react-three/drei'
import state from '../store'
import { useSnapshot } from 'valtio'
const Backdrop = () => {
  const snap = useSnapshot(state)
  const color = snap.color
    const shadows = useRef()
  return (
    <AccumulativeShadows
    ref={shadows}
    position={[0,0,-0.14]}
    color={color}
    temporal
    frames={60}
    alphaTest={0.85}
    scae={10}
    rotation={[Math.PI/2,0,0]}>
        <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.8}
        ambient={0.25}
        position={[5,5,-10]}
        />
         <RandomizedLight
        amount={5}
        radius={15}
        intensity={0.7}
        ambient={0.25}
        position={[-8,5,-7]}
        />
    </AccumulativeShadows>
  )
}

export default Backdrop