import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";

function TextCamera({ children }) {
  const groupRef = useRef();
  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 10], 0.25, delta);

    easing.dampE(
      groupRef.current.rotation,
      [-state.pointer.y / 5, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });

  return (
    <group ref={groupRef} position={[0, 3, 0]}>
      {children}
    </group>
  );
}

export default TextCamera;
