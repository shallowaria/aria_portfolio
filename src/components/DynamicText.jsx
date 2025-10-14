import { Sparkles, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const DynamicText = ({ fontSize }) => {
  const textRef = useRef();
  const lightRef = useRef();
  const light2Ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // 文字轻微浮动
    if (textRef.current) {
      textRef.current.position.y = Math.sin(t * 0.2) * 0.2;
      textRef.current.rotation.y = Math.sin(t * 0.2) * 0.1;
    }
    // 主光源围绕文字旋转
    if (lightRef.current) {
      lightRef.current.position.x = Math.cos(t) * 8;
      lightRef.current.position.z = Math.sin(t) * 8;
      lightRef.current.position.y = 5 + Math.sin(t * 0.5) * 2;
    }

    // 次光源反向旋转
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
        bevelEnabled
        bevelThickness={0.1}
        bevelSize={0.03}
        bevelSegments={8}
        castShadow
        receiveShadow
      >
        Shallow Aria
        <meshStandardMaterial
          color="#5e3b3b"
          roughness={0.3}
          metalness={0.9}
          emissive="#330000"
          emissiveIntensity={0.2}
        />
        <Sparkles
          count={50}
          scale={8}
          size={6}
          speed={0.002}
          noise={0.2}
          color="yellow"
        />
      </Text>

      {/* 环境光 */}
      <ambientLight intensity={0.2} />

      {/* 主旋转光源 - 暖色调 */}
      <pointLight
        ref={lightRef}
        position={[8, 5, 0]}
        intensity={150}
        color="#2cb8f0"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* 次旋转光源 - 冷色调 */}
      <pointLight
        ref={light2Ref}
        position={[-6, 3, 0]}
        intensity={100}
        color="#6bc4e7"
      />

      {/* 顶部定向光 */}
      <directionalLight
        position={[0, 10, 5]}
        intensity={1}
        color="#ffffff"
        castShadow
      />

      {/* 底部补光 */}
      <pointLight position={[0, -5, 3]} intensity={30} color="#9b59b6" />

      {/* 背景聚光灯效果 */}
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
