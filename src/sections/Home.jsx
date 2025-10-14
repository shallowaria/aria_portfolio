import { PerspectiveCamera, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import DynamicText from "../components/DynamicText";
import * as THREE from "three";
import TextCamera from "../components/TextCamera";
import InteractiveEarth from "../components/InteractiveEarth";
import CanvasLoader from "../components/CanvasLoader";

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
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera
                makeDefault
                position={[0, 0, 10]}
                near={1}
                far={100}
              />
              <TextCamera>
                <DynamicText fontSize={fontSize} />
              </TextCamera>
              <InteractiveEarth />
            </Suspense>
          </Canvas>
        </div>
        <div className="absolute bottom-30 left-0 right-0 w-full z-10 sm:px-10 px-5">
          <p className="w-fit mx-auto sm:text-3xl text-2xl font-medium text-zinc-500 text-center">
            有时勉强自己拼尽全力反而容易坚持不下去。时刻以70%的力量奋斗才是专业人士噢。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
