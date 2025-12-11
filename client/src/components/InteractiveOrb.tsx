
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function Orb({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
    const meshRef = useRef<THREE.Mesh>(null);
    const materialRef = useRef<any>(null);

    useFrame((state, delta) => {
        if (!meshRef.current) return;

        // Constant rotation
        meshRef.current.rotation.x += delta * 0.2;
        meshRef.current.rotation.y += delta * 0.3;

        // Mouse interaction - slightly tilt/move based on mouse position
        // We smooth the transition using lerp for a fluid feel
        const targetX = mouse.current[0] * 2; // Multiplier defines intensity
        const targetY = mouse.current[1] * 2;

        meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, delta * 2);
        meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, delta * 2);
    });

    return (
        <Float
            speed={2} // Animation speed, defaults to 1
            rotationIntensity={1} // XYZ rotation intensity, defaults to 1
            floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        >
            <mesh ref={meshRef} position={[0, 0, 0]} scale={2.8}>
                <icosahedronGeometry args={[1, 15]} /> {/* High detail for smoothness */}
                <MeshDistortMaterial
                    color="#4f46e5" // Primary brand color tone (indigo-600)
                    emissive="#6366f1"
                    emissiveIntensity={0.2}
                    roughness={0.1}
                    metalness={0.8}
                    distort={0.4} // Strength, 0 disables the effect (default=1)
                    speed={2} // Speed (default=1)
                    ref={materialRef}
                />
            </mesh>
        </Float>
    );
}

export default function InteractiveOrb() {
    const mouse = useRef<[number, number]>([0, 0]);

    const handleMouseMove = (e: React.MouseEvent) => {
        // Normalize coordinates to -1 to 1
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = -(e.clientY / window.innerHeight) * 2 + 1;
        mouse.current = [x, y];
    };

    return (
        <div
            className="w-full h-full absolute inset-0 z-10"
            onMouseMove={handleMouseMove}
        >
            <Canvas className="w-full h-full">
                <PerspectiveCamera makeDefault position={[0, 0, 8]} />
                <ambientLight intensity={1.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
                <pointLight position={[-10, -10, -10]} intensity={2} color="#ec4899" /> {/* Pinkish fill */}

                <Orb mouse={mouse} />
            </Canvas>
        </div>
    );
}
