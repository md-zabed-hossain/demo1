import React, { useRef } from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import { Color } from "three";

export function Model(props) {
  const { nodes, materials } = useGLTF("/top.glb");
  return (
    <group {...props} dispose={null}
    rotation={[5, 4.8, 5]}>
      <group
        position={[-4.06, -0.52, 6.44]}
        rotation={[0, Math.PI / 2, 0]}
        scale={1.38}
      >
        <primitive object={nodes.spine} />
        <primitive object={nodes.neutral_bone} />
        <primitive object={nodes.neutral_bone_1} />
        <primitive object={nodes.neutral_bone_2} />
        <primitive object={nodes.neutral_bone_3} />
        <primitive object={nodes.neutral_bone_4} />
        <skinnedMesh
          geometry={nodes.Cube026.geometry}
          material={materials.PANTS}
          skeleton={nodes.Cube026.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube027.geometry}
          material={materials["Rubber.001"]}
          skeleton={nodes.Cube027.skeleton}
        />
        <skinnedMesh
          geometry={nodes.M_Hips.geometry}
          material={materials.Skin}
          skeleton={nodes.M_Hips.skeleton}
        />
        <skinnedMesh
          geometry={nodes.NurbsPath001.geometry}
          material={materials["Lace.002"]}
          skeleton={nodes.NurbsPath001.skeleton}
        />
        <skinnedMesh
          geometry={nodes.NurbsPath001_1.geometry}
          material={materials["Rubber.001"]}
          skeleton={nodes.NurbsPath001_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Vert001.geometry}
          material={materials.Skin}
          skeleton={nodes.Vert001.skeleton}
        />
      </group>
      <group
        position={[-7.25, 0.79, 6.76]}
        rotation={[0, 1.57, 0]}
        scale={0.65}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015.geometry}
          material={materials["Material.011"]}
          position={[1.94, 0.26, 1.47]}
          scale={[1.23, 1.21, 1.21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={materials["Material.006"]}
          position={[0.57, -0.44, 1.47]}
          scale={[1.21, 1.22, 1.15]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020.geometry}
          material={materials["Material.011"]}
          position={[1.94, 0.26, 1.5]}
          scale={[1.23, 1.21, 1.21]}
        />
      </group>
      <PerspectiveCamera
        makeDefault={false}
        far={100}
        near={0.1}
        fov={17.71}
        position={[7.72, 1.84, 2.2]}
        rotation={[3.03, 1.21, 3.04]}
      />
      <group position={[-3.01, 1.35, 6.43]} scale={[0.63, 0.92, 0.65]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials["Material.001"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials["Material.019"]}
        position={[-4.47, 1.36, 6.5]}
        rotation={[1.57, 0.17, -1.57]}
        scale={[0.38, 0.06, 0.46]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube000.geometry}
          material={materials["Material.036"]}
          position={[-0.91, 6.82, 2.99]}
          rotation={[-1.14, -0.7, 0.51]}
          scale={[0.46, 0.11, 0.18]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials["Material.036"]}
          position={[0, 11.31, 3.09]}
          rotation={[-1.01, 0, 0]}
          scale={[0.07, 0.11, 0.49]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials["Material.036"]}
          position={[0.9, 6.92, 3]}
          rotation={[-1.14, 0.7, -0.51]}
          scale={[0.46, 0.11, 0.18]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials["Material.036"]}
          position={[0.56, -0.34, 2.84]}
          rotation={[0.45, -0.12, -1.07]}
          scale={[0.29, 0.11, 0.41]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials["Material.019"]}
          position={[0.01, 5.14, 2.76]}
          rotation={[-1.01, 0, 0]}
          scale={[0.14, 0.2, 0.95]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials["Material.036"]}
          position={[-0.55, -0.34, 2.84]}
          rotation={[0.45, 0.12, 1.07]}
          scale={[0.29, 0.11, 0.41]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials["Material.032"]}
          position={[0, 6.02, 2.15]}
          rotation={[-1.01, 0, 0]}
          scale={[0.07, 0.11, 0.51]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials["Material.016"]}
          position={[0, 7.05, 1.44]}
          rotation={[-1.01, -0.01, 0.02]}
          scale={[1.01, 0.21, 8.23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials["Material.016"]}
          position={[0, 2.86, 1.45]}
          rotation={[-1.01, 0, 0]}
          scale={[0.1, 0.15, 0.69]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011_1.geometry}
          material={materials["Material.019"]}
          position={[0, 7.05, 1.44]}
          rotation={[-1.01, 0, 0]}
          scale={[1, 0.21, 8.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={materials["Material.016"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials["Material.036"]}
          position={[0, 11.34, 3.17]}
          rotation={[-0.93, 0.45, -1.89]}
          scale={[0.13, 0.09, 0.59]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["Material.036"]}
          position={[0.93, 6.85, 3.08]}
          rotation={[-1.04, 0.34, -2.12]}
          scale={[0.13, 0.56, 0.22]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_1.geometry}
          material={materials["Material.036"]}
          position={[0.57, -0.58, 2.92]}
          rotation={[2.18, 0.1, 1.01]}
          scale={[0.13, 0.35, 0.49]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials["Material.036"]}
          position={[-0.93, 6.75, 3.07]}
          rotation={[-1.04, -0.34, -1.02]}
          scale={[0.13, 0.56, 0.22]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
          material={materials["Material.036"]}
          position={[-0.56, -0.58, 2.92]}
          rotation={[0.86, -0.75, -0.26]}
          scale={[0.13, 0.35, 0.49]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={materials["Material.032"]}
        position={[-3.19, 1.48, 5.91]}
        scale={[0.05, 0.12, 0.05]}
      />
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube021.geometry}
        material={nodes.Cube021.material}
        position={[-3.81, 4.09, 6.43]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.12}
      /> */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube024.geometry}
        material={materials.Skin}
        position={[-3.91, 2.14, 6.43]}
        rotation={[Math.PI / 2, 1.41, -Math.PI / 2]}
        scale={[0.21, 0.21, 0.2]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022_1.geometry}
          material={materials.Skin}
          position={[0, -0.27, 0.83]}
          scale={[0.11, 0.11, 0.12]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023.geometry}
          material={materials.HAIR}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ears.geometry}
          material={materials.Skin}
          position={[0.71, -0.03, -0.06]}
          rotation={[1.44, -0.19, -1.11]}
          scale={[3.84, 4.42, 5.29]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NurbsPath006.geometry}
          material={materials["inner mouth"]}
          position={[0.01, -0.51, 0.82]}
          scale={[0.09, 0.14, 0.1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NurbsPath010.geometry}
          material={materials.HAIR}
          position={[-0.29, 0.06, 0.81]}
          scale={[0.08, 0.1, 0.08]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials.eyes}
          position={[-0.28, -0.06, 0.81]}
          scale={[4.82, 5.25, 4.14]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Body001.geometry}
        material={materials["Material.011"]}
        position={[-3.32, 1.38, 6.42]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.3, 0.2, 0.2]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Keyboard001.geometry}
          material={materials["Material.011"]}
          position={[0.72, 0.04, 0.13]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[0.04, 0.03, 0.06]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screen001.geometry}
          material={materials["Material.011"]}
          position={[0, 0.08, -0.94]}
          rotation={[-1.77, 0, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Hinge001.geometry}
            material={materials["Material.011"]}
            position={[0, 0.04, -0.02]}
            rotation={[1.57, 0, 0]}
            scale={[0.99, 1, 1]}
          />
        </mesh>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Screen.geometry}
        material={materials["Material.011"]}
        position={[-2.97, 1.37, 7.24]}
        rotation={[3.14, -0.33, 0]}
        scale={[0.19, 0.3, 0.13]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screen003.geometry}
          material={materials["Material.016"]}
          position={[0, -0.01, 0]}
          scale={0.93}
        />
      </mesh>
      <group
        position={[-5.79, 2.3, 6.35]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.06, 1.06, 0.63]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_1.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_2.geometry}
          material={materials["Material.005"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={materials.Material}
        position={[-6.2, 1.61, 6.35]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.07, 0.02, 0.29]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017.geometry}
        material={materials.Material}
        position={[-3.89, 2.36, 0.98]}
        scale={[0.93, 1.03, 0.22]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials["Material.013"]}
        position={[-3.96, 2.18, 0.95]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.16, 1.23, 1.23]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials["Material.011"]}
        position={[-6.07, 1.08, 7.14]}
        scale={[0.55, 0.8, 0.8]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001.geometry}
        material={materials["Material.016"]}
        position={[-5.93, 0.26, 4.17]}
        scale={0.35}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle002.geometry}
          material={materials["Material.022"]}
          position={[0, 1.01, 0.01]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={materials.HAIR}
          position={[0, 1.96, 0.01]}
          scale={[0.16, 0.12, 0.16]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials.daun}
          position={[0.52, 1.65, -0.12]}
          rotation={[0, 0.21, 0]}
          scale={0.53}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008.geometry}
          material={materials.daun}
          position={[-0.1, 1.65, -0.51]}
          rotation={[-Math.PI, 1.52, -Math.PI]}
          scale={0.53}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane010.geometry}
          material={materials.daun}
          position={[-0.53, 1.65, 0.18]}
          rotation={[Math.PI, -0.24, Math.PI]}
          scale={0.53}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane011.geometry}
          material={materials.daun}
          position={[0.13, 1.65, 0.58]}
          rotation={[0, -1.53, 0]}
          scale={0.53}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012.geometry}
          material={materials.daun}
          position={[0.39, 2.07, 0.43]}
          rotation={[0, -0.99, 0]}
          scale={0.53}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane013.geometry}
          material={materials.daun}
          position={[-0.37, 2.07, -0.39]}
          rotation={[-Math.PI, 0.97, -Math.PI]}
          scale={0.53}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane014.geometry}
          material={materials.daun}
          position={[0.36, 2.07, -0.37]}
          rotation={[0, 0.76, 0]}
          scale={0.53}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane015.geometry}
          material={materials.daun}
          position={[-0.37, 2.07, 0.43]}
          rotation={[Math.PI, -0.78, Math.PI]}
          scale={0.53}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016.geometry}
          material={materials.daun}
          position={[0.53, 2.6, 0.21]}
          rotation={[0, -0.52, 0]}
          scale={0.53}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane017.geometry}
          material={materials.daun}
          position={[-0.52, 2.6, -0.18]}
          rotation={[-Math.PI, 0.51, -Math.PI]}
          scale={0.53}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane018.geometry}
          material={materials.daun}
          position={[0.14, 2.6, -0.5]}
          rotation={[0, 1.22, 0]}
          scale={0.53}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019.geometry}
          material={materials.daun}
          position={[-0.14, 2.6, 0.55]}
          rotation={[Math.PI, -1.25, Math.PI]}
          scale={0.53}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane020.geometry}
          material={materials.daun}
          position={[0.39, 3.2, 0.43]}
          rotation={[0, -0.99, 0]}
          scale={0.53}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane021.geometry}
          material={materials.daun}
          position={[-0.37, 3.2, -0.39]}
          rotation={[-Math.PI, 0.97, -Math.PI]}
          scale={0.53}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane022.geometry}
          material={materials.daun}
          position={[0.36, 3.2, -0.37]}
          rotation={[0, 0.76, 0]}
          scale={0.53}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane023.geometry}
          material={materials.daun}
          position={[-0.37, 3.2, 0.43]}
          rotation={[Math.PI, -0.78, Math.PI]}
          scale={0.53}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018.geometry}
        material={nodes.Cube018.material}
        position={[-6.72, 4.31, 5.93]}
        scale={0.27}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube019.geometry}
        material={materials["Material.025"]}
        position={[-6.68, 4.3, 5.93]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube025.geometry}
        material={materials["Material.025"]}
        position={[-6.68, 4.3, 5.93]}
        rotation={[1.98, 0, 0]}
        scale={0.01}
      />
      <group position={[-2.74, -0.02, 5.16]} scale={4}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_2.geometry}
          material={materials["Material.022"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/top.glb");