import DroneModel from "../components/DroneModel";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import "../styles/styles.css";

export default function Hero() {
  const width = window.innerWidth;
  return (
    <div className="h-[100vh] w-[100vw] bg-[linear-gradient(45deg,rgba(28,26,26,1)_0%,rgba(38,38,38,1)_42%,rgba(112,112,112,1)_92%,rgba(143,141,141,1)_100%)]  flex flex-col justify-center items-start">
      <div
        className="fixed inset-0 flex items-start top-[12rem] justify-center font-bold text-black opacity-[25%] text-center z-50 font-[var(--font-russo)]"
        style={{ fontSize: "clamp(5rem, 12vw, 15rem)" }}
      >
        DRONE
      </div>
      <div className="ember  z-60">EMBER</div>
      <div className="h-[100%] w-full z-10000">
        <Canvas
          camera={{
            position: [5, 10, 50],
            fov: width < 768 ? 30 : 12,
            //change fov according to the media screen width if lower higher fov
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
