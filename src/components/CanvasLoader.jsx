import { Html, useProgress } from "@react-three/drei";
import Spinner from "./Spinner";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html as="div" center className="flex justify-center items-center flex-col">
      <p className="text-2xl text-zinc-800 font-bold mt-20">
        {progress !== 0 ? `${progress.toFixed(2)}%` : <Spinner />}
      </p>
    </Html>
  );
};

export default CanvasLoader;
