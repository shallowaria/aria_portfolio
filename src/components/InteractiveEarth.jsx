import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const InteractiveEarth = () => {
  const earthRef = useRef();
  const groupRef = useRef();
  const labelsRef = useRef([]);
  const isDragging = useRef(false);
  const previousMouse = useRef({ x: 0, y: 0 });
  const rotationVelocity = useRef({ x: 0, y: 0 });
  const [earthTexture, setEarthTexture] = useState(null);

  // 加载地球纹理
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(
      "https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg",
      (texture) => setEarthTexture(texture)
    );
  }, []);

  // 城市位置数据
  const locations = [
    { lat: 29.33, lng: 103.45, name: "我在这儿！", color: "#ff6b6b" },
  ];

  // 将经纬度转换为3D坐标
  const latLngTo3D = (lat, lng, radius) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);

    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);

    return new THREE.Vector3(x, y, z);
  };

  useFrame(({ camera }) => {
    if (!groupRef.current) return;

    // 自动旋转（当不拖拽时）
    if (!isDragging.current) {
      groupRef.current.rotation.y += 0.002;
    }

    // 让标签始终面向相机
    labelsRef.current.forEach((label) => {
      if (label) label.lookAt(camera.position);
    });
  });

  // 鼠标事件处理
  const handlePointerDown = (e) => {
    isDragging.current = true;
    previousMouse.current = { x: e.clientX, y: e.clientY };
    rotationVelocity.current = { x: 0, y: 0 };
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current || !groupRef.current) return;

    const deltaX = e.clientX - previousMouse.current.x;
    const deltaY = e.clientY - previousMouse.current.y;

    groupRef.current.rotation.y += deltaX * 0.005;
    groupRef.current.rotation.x += deltaY * 0.005;

    // 限制X轴旋转角度
    groupRef.current.rotation.x = Math.max(
      -Math.PI / 3,
      Math.min(Math.PI / 3, groupRef.current.rotation.x)
    );

    previousMouse.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  if (!earthTexture) return null;

  return (
    <group
      ref={groupRef}
      position={[0, 0, 0]}
      onPointerDown={handlePointerDown}
    >
      {/* 地球主体 */}
      <mesh ref={earthRef} castShadow receiveShadow>
        <sphereGeometry args={[2, 64, 64]} />
        <meshPhongMaterial map={earthTexture} bumpScale={0.5} />
      </mesh>

      {/* 城市标记 */}
      {locations.map((loc, idx) => {
        const pos = latLngTo3D(loc.lat, loc.lng, 2.05);
        const labelPos = latLngTo3D(loc.lat, loc.lng, 2.5);

        return (
          <group key={loc.name}>
            {/* 标记点 */}
            <mesh position={pos}>
              <sphereGeometry args={[0.05, 16, 16]} />
              <meshBasicMaterial color={loc.color} />
            </mesh>

            {/* 城市标签 */}
            <CityLabel
              position={labelPos}
              text={loc.name}
              ref={(el) => (labelsRef.current[idx] = el)}
            />
          </group>
        );
      })}

      {/* 地球光照 */}
      <ambientLight intensity={8} />
      <directionalLight position={[5, 3, 5]} intensity={0.8} />
      <OrbitControls enableZoom={false} />
    </group>
  );
};

// 城市标签组件
const CityLabel = ({ position, text }) => {
  const spriteRef = useRef();

  const texture = (() => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = 256;
    canvas.height = 64;

    context.fillStyle = "rgba(0, 0, 0, 0.7)";
    context.roundRect(0, 0, canvas.width, canvas.height, 10);
    context.fill();

    context.font = "Bold 24px Arial";
    context.fillStyle = "#a9dd56";
    context.textAlign = "center";
    context.fillText(text, 128, 40);

    return new THREE.CanvasTexture(canvas);
  })();

  return (
    <sprite ref={spriteRef} position={position} scale={[0.8, 0.2, 1]}>
      <spriteMaterial map={texture} transparent />
    </sprite>
  );
};

export default InteractiveEarth;
