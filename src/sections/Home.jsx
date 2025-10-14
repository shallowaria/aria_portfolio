import { PerspectiveCamera, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import DynamicText from "../components/DynamicText";
import * as THREE from "three";
import TextCamera from "../components/TextCamera";
import InteractiveEarth from "../components/InteractiveEarth";

const Home = () => {
  const [fontSize, setFontSize] = useState(1.2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setFontSize(0.8);
      else if (window.innerWidth < 1024) setFontSize(1.0);
      else setFontSize(1.2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 gap-3 sm:px-10 px-5">
        <div className="w-full h-full absolute inset-0">
          <Canvas shadows className="w-full h-full">
            <PerspectiveCamera makeDefault position={[0, 0, 10]} />
            <TextCamera>
              <DynamicText fontSize={fontSize} />
            </TextCamera>
            <InteractiveEarth />
            <fog attach="fog" args={["#1a1a1a", 10, 25]} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Home;
