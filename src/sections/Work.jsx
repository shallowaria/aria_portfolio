import { Suspense, useState } from "react";
import { myProjects } from "../constants/index.js";
import { Canvas } from "@react-three/fiber";
import WorkComputer from "../components/WorkComputer.jsx";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";

const projectCount = myProjects.length;
const Work = () => {
  const [selectedProjectIndex, setSelectProjectIndex] = useState(0);
  const currentProject = myProjects[selectedProjectIndex];

  const handleNavigation = (direction) => {
    setSelectProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section className="sm:px-10 px-5 my-20" id="work">
      <p className="sm:text-4xl text-3xl font-semibold text-zinc-600">
        My Work
      </p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-sm shadow-cyan-200 h-full">
          <div className="p-3 backdrop-blur-3xl w-fit rounded-lg">
            <img
              src={currentProject.logo}
              alt="logo"
              className="w-10 h-10 shadow-sm bg-zinc-50 text-shadow-2xs"
            />
          </div>
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-2xl font-semibold">{currentProject.title}</p>
            <p>{currentProject.desc}</p>
            <p>{currentProject.subdesc}</p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div
                  key={index}
                  className="w-10 h-10 rounded-md p-2 bg-neutral-100 opacity-90 backdrop-blur-lg flex justify-center items-center"
                >
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            <a
              className="flex items-center gap-2 cursor-pointer text-zinc-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
            >
              Check Live Site
              <img src="/assets/arrow-up.png" className="w-3 h-3" alt="arrow" />
            </a>
          </div>
          <div className="flex justify-between items-center mt-7">
            <button
              className="w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient bg-cyan-300"
              onClick={() => handleNavigation("previous")}
            >
              <img
                src="/assets/left-arrow.svg"
                alt="left arrow"
                className="w-4 h-4"
              />
            </button>
            <button
              className="w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient bg-cyan-300"
              onClick={() => handleNavigation("next")}
            >
              <img
                src="/assets/right-arrow.svg"
                alt="right arrow"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>

        <div className="border border-cyan-200  rounded-lg h-96 md:h-full shadow-sm shadow-cyan-200">
          <Canvas>
            <ambientLight intensity={3} />
            <directionalLight position={[10, 10, 10]} intensity={5} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group
                  scale={1.8}
                  position={[0, -3, 0]}
                  rotation={[0, -0.1, 0]}
                >
                  <WorkComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={[Math.PI]} enableZoom />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Work;
