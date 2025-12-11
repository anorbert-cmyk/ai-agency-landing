
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Stars } from "@react-three/drei";
import * as THREE from "three";

function Ring({
    position,
    rotation,
    scale,
    color,
    speed
}: {
    position: [number, number, number],
    rotation: [number, number, number],
    scale: number,
    color: string,
    speed: number
}) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (!meshRef.current) return;
        // Rotate rings
        meshRef.current.rotation.x += delta * speed * 0.5;
        meshRef.current.rotation.y += delta * speed * 0.3;
        meshRef.current.rotation.z += delta * speed * 0.1;
    });

    return (
        <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
            <torusGeometry args={[3, 0.02, 16, 100]} />
            <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={2}
                roughness={0.1}
                metalness={1}
                toneMapped={false}
            />
        </mesh>
    );
}

function GlowingRingsScene({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        if (!groupRef.current) return;

        // Mouse parallax for the whole group
        const targetX = mouse.current[0] * 0.5;
        const targetY = mouse.current[1] * 0.5;

        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetY * 0.2, delta * 2);
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX * 0.2, delta * 2);
    });

    // Generate multiple rings
    const rings = useMemo(() => {
        return Array.from({ length: 12 }).map((_, i) => ({
            position: [0, 0, 0] as [number, number, number],
            rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number],
            scale: 1 + i * 0.15, // Increasing size
            color: i % 2 === 0 ? "#FFD700" : "#FFA500", // Gold and Orange
            speed: (Math.random() * 0.2 + 0.1) * (i % 2 === 0 ? 1 : -1) // Alternating direction
        }));
    }, []);

    return (
        <group ref={groupRef}>
            {rings.map((props, i) => (
                <Ring key={i} {...props} />
            ))}
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </group>
    );
}

export default function InteractiveOrb() { // Keeping component name for compatibility check first
    const mouse = useRef<[number, number]>([0, 0]);

    const handleMouseMove = (e: React.MouseEvent) => {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = -(e.clientY / window.innerHeight) * 2 + 1;
        mouse.current = [x, y];
    };

    return (
        <div
            className="w-full h-full absolute inset-0 -z-10 bg-black"
            onMouseMove={handleMouseMove}
        >
            <Canvas
                className="w-full h-full"
                camera={{ position: [0, 0, 8], fov: 45 }}
                gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
            >
                <color attach="background" args={['#000000']} />

                {/* Environment for reflections */}
                <Environment preset="city" />

                {/* Lights */}
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#ffaa00" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#ff4400" />

                <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                    <GlowingRingsScene mouse={mouse} />
                </Float>
            </Canvas>
        </div>
    );
}
