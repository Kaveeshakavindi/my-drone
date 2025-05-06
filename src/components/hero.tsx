import DroneModel from "../components/DroneModel";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
export default function Hero() {
  return (
    <div className="h-[100vh] font-sans w-[100vw] bg-[linear-gradient(45deg,rgba(28,26,26,1)_0%,rgba(38,38,38,1)_42%,rgba(112,112,112,1)_92%,rgba(143,141,141,1)_100%)]  flex flex-col justify-center items-start">
      <div className="fixed inset-0 flex items-start top-[15rem] justify-center text-9xl font-bold text-black opacity-[25%] text-center z-50 ">
        DRONE
      </div>
      <div className="font-sans font-thin fixed inset-0 flex items-start top-[18rem] justify-center text-4xl text-white z-60">
        MINI
      </div>
      <div className="h-[90%] w-full z-10000">
        <Canvas
          camera={{
            position: [0, 0, 50],
            fov: 10,
          }}
        >
          <ambientLight intensity={10} />
          <directionalLight position={[5, 40, 0]} intensity={10} />
          <Suspense fallback={null}>
            <DroneModel />
            <OrbitControls enablePan={false} enableZoom={false} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
