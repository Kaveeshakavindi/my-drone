import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function DroneModel(props: any) {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF("/drone.glb");
  const { actions } = useAnimations(animations, group);
  const hasLanded = useRef(false); //track if drone landed
  const slowingDown = useRef(false); //track if slowing down

  useEffect(() => {
    Object.values(actions).forEach((action) => {
      if (action) {
        action.play();
        action.timeScale = 1; // normal speed initially
      }
    });

    if (group.current) {
      group.current.position.set(5, 5, 0);
      group.current.rotation.set(1, 10.5, 0);
    }
  }, [actions]);

  useFrame(() => {
    if (!group.current) return;

    const pos = group.current.position;
    const rot = group.current.rotation;

    //move down and left
    if (pos.y > 0) pos.y -= 0.05;
    if (pos.x > 0) pos.x -= 0.05;

    //slight tilt
    if (rot.z < 0.2) rot.z += 0.005;
    if (rot.x > 0.3) rot.x = 0.3;

    //begin slowing down animation
    if (pos.y <= 0 && !slowingDown.current) {
      slowingDown.current = true;
    }

    //gradually slow animation
    if (slowingDown.current && !hasLanded.current) {
      Object.values(actions).forEach((action) => {
        if (action && action.timeScale > 0.01) {
          action.timeScale *= 0.95; //reduce speed gradually
        } else if (action) {
          action.stop();
        }
      });
      const allStopped = Object.values(actions).every(
        (action) => !action || action.timeScale <= 0.01
      );
      if (allStopped) hasLanded.current = true;
    }
  });

  return <primitive ref={group} object={scene} scale={0.5} {...props} />;
}
