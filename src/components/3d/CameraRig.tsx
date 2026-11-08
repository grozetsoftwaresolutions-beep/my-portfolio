"use client";

import { useRef } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";

interface CameraRigProps {
  scrollProgress: number; // 0 to 1
}

export default function CameraRig({ scrollProgress }: CameraRigProps) {
  const { camera } = useThree();
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));
  const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useFrame(() => {
    const p = Math.min(Math.max(scrollProgress, 0), 1);

    // Calculate target camera position along a vertical dolly spline
    // Start at hero (y=0, z=5.5) down to contact (y=-14, z=4.5)
    const targetY = -p * 14;
    const targetX = Math.sin(p * Math.PI * 2) * 0.8;
    const targetZ = 5.2 - Math.sin(p * Math.PI) * 0.8;

    // Smooth camera position damping
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.05);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.05);

    // Target lookAt point
    targetLookAt.current.set(0, targetY, 0);
    currentLookAt.current.lerp(targetLookAt.current, 0.05);
    camera.lookAt(currentLookAt.current);
  });

  return null;
}

