import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html as="div" center className="flex justify-center items-center flex-col">
      <span>
        <p className="text-2xl text-zinc-800 font-bold mt-20">
          {progress !== 0 ? `${progress.toFixed(2)}%` : "Loading..."}
        </p>
      </span>
    </Html>
  );
};

export default CanvasLoader;
