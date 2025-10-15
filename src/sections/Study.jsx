import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import CanvasLoader from "../components/CanvasLoader";
import DigitalTwin from "../components/DigitalTwin";
import { studyExperiences } from "../constants/index.js";

const Study = () => {
  const [animationName, setAnimationName] = useState("idle");

  return (
    <section className="sm:px-10 px-5 my-20" id="study">
      <div className="w-full text-zinc-600">
        <h3 className="sm:text-4xl text-3xl font-semibold">My Study Route</h3>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-12">
          <div className="col-span-1 rounded-lg bg-zinc-50 border border-cyan-200">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Suspense fallback={<CanvasLoader />}>
                <DigitalTwin
                  animationName={animationName}
                  position-y={-3}
                  scale={3}
                />
              </Suspense>
            </Canvas>
          </div>
          <div className="col-span-2 rounded-lg bg-black-200 border border-black-300">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {studyExperiences.map(
                ({ id, name, pos, duration, title, animation, icon }) => (
                  <div
                    key={id}
                    className="grid grid-cols-[auto_1fr] items-start gap-5  transition-all ease-in-out duration-500 cursor-pointer hover:bg-cyan-200 rounded-lg sm:px-5 px-2.5 group"
                    onClick={() =>
                      setAnimationName(animation.toLocaleLowerCase())
                    }
                    onPointerOver={() =>
                      setAnimationName(animation.toLocaleLowerCase())
                    }
                    onPointerOut={() => {
                      setAnimationName("idle");
                    }}
                  >
                    <div className="flex flex-col h-full justify-start items-center py-2">
                      <div className="rounded-3xl w-16 h-16 p-2 bg-black-600">
                        <img src={icon} alt="logo" className="w-full h-full" />
                      </div>
                      <div className="flex-1 w-0.5 mt-2 h-full bg-black group-hover:bg-white group-last:hidden" />
                    </div>
                    <div className="sm:p-5 px-2.5 py-5">
                      <p className="font-bold text-white-800">{name}</p>
                      <p className="text-sm mb-5">
                        {pos} -- {duration}
                      </p>
                      <p className="group-hover:text-white transition ease-in-out duration-500">
                        {title}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Study;
