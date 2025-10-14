import { Sparkles, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const DynamicText = ({ fontSize }) => {
  const textRef = useRef();
  const lightRef = useRef();
  const light2Ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (textRef.current) {
      textRef.current.position.y = Math.sin(t * 0.2) * 0.2;
      textRef.current.rotation.y = Math.sin(t * 0.2) * 0.1;
    }
    if (lightRef.current) {
      lightRef.current.position.x = Math.cos(t) * 8;
      lightRef.current.position.z = Math.sin(t) * 8;
      lightRef.current.position.y = 5 + Math.sin(t * 0.5) * 2;
    }

    if (light2Ref.current) {
      light2Ref.current.position.x = Math.cos(t + Math.PI) * 6;
      light2Ref.current.position.z = Math.sin(t + Math.PI) * 6;
      light2Ref.current.position.y = 3 + Math.cos(t * 0.7) * 2;
    }
  });

  return (
    <>
      <Text
        ref={textRef}
        fontSize={fontSize}
        color="#792828"
        position={[0, 0, 0]}
      >
        凯 布
        <meshStandardMaterial
          color="#5e3b3b"
          roughness={0.3}
          metalness={0.9}
          emissive="#330000"
          emissiveIntensity={0.2}
        />
        <Sparkles
          count={100}
          scale={8}
          size={6}
          speed={0.002}
          noise={0.5}
          color="yellow"
        />{" "}
      </Text>

      <ambientLight intensity={0.2} />

      <pointLight
        ref={lightRef}
        position={[8, 5, 0]}
        intensity={150}
        color="#2cb8f0"
      />

      <pointLight
        ref={light2Ref}
        position={[-6, 3, 0]}
        intensity={100}
        color="#6bc4e7"
      />

      <directionalLight position={[0, 10, 5]} intensity={1} color="#ffffff" />

      <pointLight position={[0, -5, 3]} intensity={30} color="#9b59b6" />

      <spotLight
        position={[0, 0, -10]}
        angle={0.5}
        penumbra={1}
        intensity={50}
        color="#ffffff"
      />
    </>
  );
};

export default DynamicText;
