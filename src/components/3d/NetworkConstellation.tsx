"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

interface NetworkConstellationProps {
  scrollProgress: number; // 0 to 1
  isReducedMotion?: boolean;
}

interface NodeData {
  pos: THREE.Vector3;
  basePos: THREE.Vector3;
  velocity: THREE.Vector3;
  passedTimer: number; // 0 (normal) to 1 (passed/green)
}

export default function NetworkConstellation({
  scrollProgress,
  isReducedMotion = false,
}: NetworkConstellationProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const packetRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  const [isMobile, setIsMobile] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Node count: ~70 desktop / ~35 mobile
  const nodeCount = isMobile ? 35 : 70;
  const connectionThreshold = isMobile ? 3.8 : 3.2;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: -(e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Initialize node positions & velocities
  const nodes = useMemo<NodeData[]>(() => {
    const list: NodeData[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * 16,
        -Math.random() * 16 + 2,
        (Math.random() - 0.5) * 8 - 2
      );
      list.push({
        pos: pos.clone(),
        basePos: pos.clone(),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.004,
          (Math.random() - 0.5) * 0.004,
          (Math.random() - 0.5) * 0.003
        ),
        passedTimer: 0,
      });
    }
    return list;
  }, [nodeCount]);

  // Reusable colors
  const normalNodeColor = useMemo(() => new THREE.Color("#C7D2FE"), []); // Muted indigo-white
  const passedNodeColor = useMemo(() => new THREE.Color("#34D399"), []); // Soft green (success)
  const tempColor = useMemo(() => new THREE.Color(), []);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Packet state
  const packetState = useRef({
    startNode: 0,
    endNode: 1,
    progress: 0,
    active: false,
    timer: 1.0, // trigger every 1-2s
  });

  // Pre-allocate line segments geometry
  const maxLinePairs = nodeCount * 4;
  const linePositions = useMemo(
    () => new Float32Array(maxLinePairs * 2 * 3),
    [maxLinePairs]
  );
  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    return geo;
  }, [linePositions]);

  useFrame((_, delta) => {
    if (isReducedMotion) return;

    const progress = Math.min(Math.max(scrollProgress, 0), 1);

    // Section choreography:
    // In Skills (0.25 - 0.5): mesh tightens slightly
    // In Projects (0.5 - 0.8): mesh dims so cards are the focus
    // In Contact (0.8 - 1.0): settles calmly
    const inSkills = progress > 0.22 && progress < 0.48;
    const inProjects = progress >= 0.48 && progress < 0.82;

    const targetScale = inSkills ? 0.88 : 1.0;
    const targetLineOpacity = inProjects ? 0.05 : inSkills ? 0.22 : 0.15;
    const targetNodeOpacity = inProjects ? 0.15 : 0.4;

    if (groupRef.current) {
      // Gentle parallax towards cursor and scroll
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mousePos.x * 0.08,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mousePos.y * 0.05,
        0.05
      );
      groupRef.current.scale.setScalar(
        THREE.MathUtils.lerp(groupRef.current.scale.x, targetScale, 0.05)
      );
    }

    // Update node positions and compute connections
    let lineIdx = 0;
    const activeEdges: [number, number][] = [];

    for (let i = 0; i < nodeCount; i++) {
      const node = nodes[i];

      // Slow drift around base position
      node.pos.add(node.velocity);
      if (node.pos.distanceTo(node.basePos) > 1.2) {
        node.velocity.negate();
      }

      // Update node instance transform
      dummy.position.copy(node.pos);
      // If node is currently in passed state, pulse slightly
      const pulse = 1 + node.passedTimer * 0.4;
      dummy.scale.setScalar(0.06 * pulse);
      dummy.updateMatrix();
      meshRef.current?.setMatrixAt(i, dummy.matrix);

      // Node color: fade passedTimer back to 0
      if (node.passedTimer > 0) {
        node.passedTimer = Math.max(0, node.passedTimer - delta * 0.8);
      }
      tempColor.lerpColors(normalNodeColor, passedNodeColor, node.passedTimer);
      meshRef.current?.setColorAt(i, tempColor);

      // Find nearby neighbors to draw line connections
      for (let j = i + 1; j < nodeCount; j++) {
        const other = nodes[j];
        const dist = node.pos.distanceTo(other.pos);
        if (dist < connectionThreshold && lineIdx < maxLinePairs * 6) {
          activeEdges.push([i, j]);

          linePositions[lineIdx++] = node.pos.x;
          linePositions[lineIdx++] = node.pos.y;
          linePositions[lineIdx++] = node.pos.z;

          linePositions[lineIdx++] = other.pos.x;
          linePositions[lineIdx++] = other.pos.y;
          linePositions[lineIdx++] = other.pos.z;
        }
      }
    }

    // Clear remaining line coordinates
    for (let k = lineIdx; k < maxLinePairs * 6; k++) {
      linePositions[k] = 0;
    }

    if (linesRef.current) {
      linesRef.current.geometry.attributes.position.needsUpdate = true;
      (linesRef.current.material as THREE.LineBasicMaterial).opacity = targetLineOpacity;
    }

    if (meshRef.current) {
      meshRef.current.instanceMatrix.needsUpdate = true;
      if (meshRef.current.instanceColor) {
        meshRef.current.instanceColor.needsUpdate = true;
      }
      (meshRef.current.material as THREE.MeshBasicMaterial).opacity = targetNodeOpacity;
    }

    // Packet transmission logic
    const ps = packetState.current;
    ps.timer -= delta;

    if (ps.timer <= 0 && !ps.active && activeEdges.length > 0) {
      // Pick a random edge
      const edge = activeEdges[Math.floor(Math.random() * activeEdges.length)];
      ps.startNode = edge[0];
      ps.endNode = edge[1];
      ps.progress = 0;
      ps.active = true;
      ps.timer = 1.2 + Math.random() * 0.8; // 1-2 seconds interval
    }

    if (ps.active && packetRef.current) {
      ps.progress += delta * 1.5; // Travels in ~0.66s
      if (ps.progress >= 1.0) {
        ps.active = false;
        // Node reached: pulses into soft green (#34D399) passed state!
        nodes[ps.endNode].passedTimer = 1.0;
        packetRef.current.visible = false;
      } else {
        packetRef.current.visible = true;
        const start = nodes[ps.startNode].pos;
        const end = nodes[ps.endNode].pos;
        packetRef.current.position.lerpVectors(start, end, ps.progress);
      }
    } else if (packetRef.current) {
      packetRef.current.visible = false;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Network Nodes (InstancedMesh) */}
      <instancedMesh
        ref={meshRef}
        args={[undefined, undefined, nodeCount]}
        frustumCulled={false}
      >
        <sphereGeometry args={[1, 10, 10]} />
        <meshBasicMaterial
          transparent
          opacity={0.35}
          toneMapped={false}
        />
      </instancedMesh>

      {/* Network Lines */}
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial
          color="#6366F1"
          transparent
          opacity={0.15}
          depthWrite={false}
        />
      </lineSegments>

      {/* Traveling Cyan Data Packet */}
      <mesh ref={packetRef} visible={false}>
        <sphereGeometry args={[0.08, 12, 12]} />
        <meshBasicMaterial color="#22D3EE" toneMapped={false} />
      </mesh>
    </group>
  );
}

