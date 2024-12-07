import { Suspense, useState } from "react";
import { GiPaperArrow } from "react-icons/gi";
import { GoArrowLeft } from "react-icons/go";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import Room from "../../components/demo/room/Room";
import './Work.scss'

const Work = () => {
  const work = [
    {
      name: "MeetUrDream (ios and android)",
      dec: "An online consultation Application used across the world",
      tech: "React Native, redux Toolkit, AsyncStorage, Firebase, 100ms videocall, chat, screenshare, Facebook login, Google login, Apple login",
      icon: [{}],
    },
    {
      name: "DentCare (android and ios)",
      dec: "its is aligners product management and doctors payment management and clinics payment managment app",
      tech: "React Native, redux Toolkit, AsyncStorage, Firebase, chate, Ccavenue payment",
      icon: [{}],
    },
    {
      name: "BazarOne (android and ios)",
      dec: "BazarOne simplifies the wholesale meat purchasing process with a robust mobile application. It enables users to browse products, place bulk orders, and securely make payments, ensuring convenience and efficiency.",
      tech: "React Native, redux Toolkit, AsyncStorage, firbase, phonepay, payment.",
      icon: [{}],
    },
    {
      name: "MyEats (ios and android)",
      dec: "a food ordering  app designed for customer, delivery partner, and restaurants separately .",
      tech: "React Native, redux Toolkit, AsyncStorage, firbase, formik, yup, payMongo, payment , Google Map ",
      icon: [{}],
    },
  ];

  const [selectedProject, setSelectedProject] = useState(0);

  const projectcount = work?.length;

  const handleNavigation = (direction) => {
    setSelectedProject((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectcount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectcount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section className=" grid lg:grid-cols-2 grid-cols-1 h-[40rem]">
      <div className="lg:border-r max-sm:border-b p-2 text-white flex items-center">
        <div className="w-full h-auto bg-black border rounded-md p-5 break-words">
          <div className="">
            <img
              className="w-16 h-12 border rounded-md backdrop-filter object-fill"
              src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg"
              alt="Project"
            />
            <p className="">{work[selectedProject]?.name}</p>
            <p className="capitalize font-bold">{work[selectedProject]?.dec}</p>
            <p className="text-gray-400 capitalize font-bold">
              {work[selectedProject]?.tech}
            </p>
            <div className="flex justify-between items-center mt-3">
              <div>
                <div className="w-10 h-10 border rounded-md"></div>
              </div>
              <p className="flex items-center gap-2">
                Check Live <GiPaperArrow />
              </p>
            </div>
            <div className="mt-4 flex gap-3 justify-end">
              <button onClick={() => handleNavigation("previous")}>
                <GoArrowLeft size={30} />
              </button>
              <button onClick={() => handleNavigation("next")}>
                <GoArrowLeft size={30} className="rotate-180" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full h-full">
        <Canvas>
            <ambientLight intensity={Math.PI / 2}/>
            <directionalLight position={[10, 10, 5]}/>
            <Center>
                {/* <Suspense> */}
                <group scale={2} position={[0, 4, -3]} rotation={[0, -1.1, 0 ]}>
                    <Room/>
                </group>
                {/* </Suspense> */}
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false}/>
        </Canvas>


      </div>
    </section>
  );
};

export default Work;
