
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function TunnelRing({
    position,
    rotation,
    scale,
    color,
    opacity
}: {
    position: [number, number, number],
    rotation: [number, number, number],
    scale: number,
    color: string,
    opacity: number
}) {
    return (
        <mesh position={position} rotation={rotation} scale={scale}>
            {/* Large thin ring */}
            <torusGeometry args={[4, 0.05, 32, 120, Math.PI * 1.2]} />
            <meshPhysicalMaterial
                color={color}
                emissive={color}
                emissiveIntensity={2}
                transparent
                opacity={opacity}
                roughness={0.2}
                metalness={0.8}
                toneMapped={false}
            />
        </mesh>
    );
}

function GlowingTunnelScene({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        if (!groupRef.current) return;

        // Smooth mouse look
        const targetRotX = mouse.current[1] * 0.15; // Look up/down
        const targetRotY = mouse.current[0] * 0.15; // Look left/right

        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, delta * 2);
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, delta * 2);

        // Slight idle sway
        groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    });

    // Generate a structured tunnel of rings
    const rings = useMemo(() => {
        return Array.from({ length: 8 }).map((_, i) => ({
            // Stack them in depth (Z axis)
            position: [0, 0, -i * 1.5] as [number, number, number],
            // No random rotation, they form a cohesive tunnel structure
            rotation: [0, 0, 0] as [number, number, number],
            // Scale down slightly as they go back to enhance perspective
            scale: 1 - i * 0.05,
            // Golden fading to darker orange in back
            color: i < 3 ? "#FFD700" : "#EFAA00",
            opacity: Math.max(0.1, 1 - i * 0.15)
        }));
    }, []);

    return (
        <group ref={groupRef} position={[0, 1, 0]} rotation={[0.4, 0, 0]}> {/* Tilted up to form an arc overhead */}
            {rings.map((props, i) => (
                <TunnelRing key={i} {...props} />
            ))}
            {/* Ambient glow mesh in the distance */}
            <mesh position={[0, 0, -15]}>
                <sphereGeometry args={[8, 32, 32]} />
                <meshBasicMaterial color="#FF5500" transparent opacity={0.1} fog={false} />
            </mesh>
        </group>
    );
}

export default function InteractiveOrb() {
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
                gl={{ antialias: true, toneMapping: THREE.ReinhardToneMapping, toneMappingExposure: 1.5 }}
            >
                <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={60} />

                <color attach="background" args={['#030303']} />
                <fog attach="fog" args={['#030303', 5, 20]} />

                {/* Lights */}
                <ambientLight intensity={2} />
                <pointLight position={[0, 0, 5]} intensity={5} color="#FFAA00" distance={10} />

                <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
                    <GlowingTunnelScene mouse={mouse} />
                </Float>

                <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />
            </Canvas>
        </div>
    );
}
