import React, { Suspense, useRef,useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Bounds, OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Model } from "./Model";
import { HeroModel } from "./HeroModel";
import { TubeModel } from "./TubeModel";
import { MeetingModel } from "./MeetingModel";
export default function Viewer() {
  const orbitControlsRef = useRef(null);
  const ref = useRef();
  useEffect(() => {
    if(!!orbitControlsRef.current){
      console.log(orbitControlsRef.current)
    }
  }, [orbitControlsRef.current])
  
  return (
    <>
      <div style={{left: 100}}>
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 50}}>
          <Suspense fallback={null}>
            <Stage
              controls={ref}
              preset="soft"
              intensity={1}
              environment="city" 
              position={[-2, -2, -5]}             
            >
              <ambientLight/>
              <Model/>
            </Stage>
          </Suspense>
          <PerspectiveCamera makeDefault position={[12,6,6]} />
          <OrbitControls ref={orbitControlsRef} enableZoom={false} enableRotate={true} 
          />
          {/* minPolarAngle={angleToRadians(1)} */}
        </Canvas>
      </div>

      <div>
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
          <Suspense fallback={null}>
            <Stage
              controls={ref}
              preset="soft"
              intensity={1}
              environment="city"
            >
      
              <HeroModel />
            </Stage>
          </Suspense>
          <OrbitControls ref={ref} />
        </Canvas>
      </div>

      <div>
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
          <Suspense fallback={null}>
            <Stage
              controls={ref}
              preset="soft"
              intensity={1}
              environment="city"
            >
      
              <TubeModel />
            </Stage>
          </Suspense>
          <OrbitControls ref={ref} />
        </Canvas>
      </div>

      <div>
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
          <Suspense fallback={null}>
            <Stage
              controls={ref}
              preset="soft"
              intensity={1}
              environment="city"
            >
      
              <MeetingModel />
            </Stage>
          </Suspense>
          <OrbitControls ref={ref} />
        </Canvas>
      </div>
              
    </>
  );
}
