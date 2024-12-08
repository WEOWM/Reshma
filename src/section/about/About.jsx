import { useRef, useState } from "react";
import "./About.scss";
import { IoCopyOutline } from "react-icons/io5";
import { LuCopyCheck } from "react-icons/lu";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  useTexture,
} from "@react-three/drei";
import Button from "../../components/button/Button";


const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("reshma.resh.1242@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const RotationCube = () => {
    const meshRef = useRef();
    const earthTexture = useTexture("/2k_earth_daymap.jpg"); // Adjust path for public folder

    useFrame(() => {
      if (meshRef.current) {
        meshRef.current.rotation.y -= 0.01 * 0.1;
      }
    });

    return (
      <mesh ref={meshRef}>
        <sphereGeometry args={[2, 32, 32]} /> {/* Use JSX form */}
        <meshStandardMaterial map={earthTexture} /> {/* Use JSX form */}
      </mesh>
    );
  };

  return (
    <section className="about-section pt-1">
      <div className="xl:col-span-1 xl:row-span-3 border rounded-md p-5">
        <img
          src="/assets/grid1.png"
          alt=""
          className="w-full sm:h-[276px] h-fit object-contain"
        />
        <div className="text-white">
          <p className="text-2xl font-bold hover-target w-44">Hi, I’m Reshma</p>
          <p className="text-2xl font-semibold capitalize text-[17px] text-slate-300 ">
            a skilled React Native developer with 4+ years of experience
            building cross-platform applications and dynamic web solutions. I
            specialize in creating intuitive, responsive user interfaces and
            delivering performant, maintainable code.
          </p>
        </div>
      </div>
      <div className="xl:col-span-1 xl:row-span-3 border rounded-md p-5">
        <img
          src="/assets/grid2.png"
          alt=""
          className="w-full sm:h-[276px] h-fit object-contain"
        />
        <div className="text-white">
          <p className="text-2xl font-bold hover-target w-36 ">Tech Stack</p>
          <p className="text-2xl font-semibold capitalize text-[17px] text-slate-300 ">
            A dedicated React Native developer with 4+ years of experience in
            building high-quality, cross-platform mobile applications. I
            specialize in creating intuitive, responsive user interfaces and
            delivering optimized, maintainable code for both iOS and Android,
            ensuring a seamless user experience.
          </p>
        </div>
      </div>
      <div className="xl:col-span-1 xl:row-span-4 border rounded-md">
        <div className="w-full h-[50vh]">
          <Canvas className="w-full h-fit rounded-md flex justify-center items-center ">
            {/* <OrbitControls enableZoom={true} enablePan={true} enableRotate={false}  /> */}
            <directionalLight position={[1, 1, 1]} intensity={8} />
            <color />
            <RotationCube  />
          </Canvas>
        </div>

        <div className="text-white p-5">
          <p className="text-2xl font-bold hover-target">I’m very flexible with time zone communications & locations</p>
          <p className="text-2xl font-semibold capitalize text-[17px] text-slate-300 ">
          I'm based in Kochi, Kerala, and open to collaborating with teams and clients across the globe. My flexible approach to time zones and locations ensures seamless communication and productivity, regardless of where you are.
          </p>
        </div>

        <div className="flex justify-center pb-3  ">
          <Button path={"/"} className={"hover-target "}>
            Contact Me
          </Button>
        </div>
        
      </div>
      <div className="xl:col-span-2 xl:row-span-5 border rounded-md p-5">
        <img
          src="/assets/grid3.png"
          alt=""
          className="w-full sm:h-[276px] h-fit object-contain"
        />
        <div className="text-white">
          <p className="text-2xl w-72  font-bold hover-target">
            My Passion for Coding
          </p>
          <p className="text-2xl font-semibold capitalize text-[17px] text-slate-300 ">
            My passion for coding lies in transforming ideas into powerful,
            user-centric mobile applications. With React Native, I enjoy
            creating seamless cross-platform experiences that bring value to
            users. The ability to solve challenges, innovate, and constantly
            learn fuels my drive to develop high-quality, impactful software.
          </p>
        </div>
      </div>
      <div className="xl:col-span-1 md:col-span-2 xl:row-span-4 border rounded-md">
        <img
          src="/assets/grid4.png"
          alt=""
          className="w-full sm:h-[276px] h-fit object-contain"
        />
        <div className="text-white max-sm:pb-4">
          <p className="grid-subtext text-center ">Contact me</p>
          <div
            className="flex justify-center items-center gap-3 capitalize cursor-pointer "
            onClick={handleCopy}
          >
            <p className="hover-target ">
              {hasCopied ? (
                <LuCopyCheck size={35} />
              ) : (
                <IoCopyOutline size={35} />
              )}
            </p>
            <p> reshma.resh.1242@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
