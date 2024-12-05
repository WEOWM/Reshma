import { Canvas } from "@react-three/fiber";
import "./Experience.scss";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Developer from "../../components/developer/Developer";

const Experience = () => {
  const experiencecontant = [
    {
      icon: "https://media.licdn.com/dms/image/C4E12AQEBVCR2SpRr9g/article-cover_image-shrink_720_1280/0/1625909824541?e=2147483647&v=beta&t=Y_zSoI8cPUR3wQvPyYK15PLWpQJJ0si6OvsuXFnIC18",
      name: "React Native",
      pos: "Cross-platform mobile",
      duration: "2025 - Present",
      title:
        "I specialize in React Native, building intuitive and high-performance mobile applications that provide seamless, cross-platform experiences. With a focus on clean architecture, optimized performance, and reusable components, I create scalable solutions tailored to meet evolving user needs. My approach ensures fast, responsive apps that deliver exceptional user engagement.",
    },
    {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW6eyjw-sncwZxtTnaQj66DdHF2PJ0uL6PGQ&s",
      name: "Firebase",
      pos: "Backend as a Service (BaaS) Solutions",
      duration: "2025 - Present",
      title:
        "I leverage Firebase to build scalable, serverless applications with real-time database integration, authentication, and cloud storage. By utilizing its comprehensive suite of tools, including Firestore, Cloud Functions, and Firebase Hosting, I create secure and responsive apps that deliver exceptional performance and seamless user experiences. My approach ensures fast development cycles, robust backend services, and reliable deployment strategies.",
    },
    {
      icon: "https://media.licdn.com/dms/image/v2/C510BAQHPG420VJc-Cw/company-logo_200_200/company-logo_200_200/0/1630569652455?e=2147483647&v=beta&t=XkngbZW32H6XzshcXnwAA69hYh4QsnslQMbc6AcSWZk",
      name: "CometChat",
      pos: "Cross-Platform Communication Solutions",
      duration: "2025 - Present",
      title:
        "I integrate CometChat to deliver real-time communication features, including chat, voice, and video calls, into web and mobile applications. By leveraging its robust APIs and SDKs, I create seamless messaging experiences with features like user presence, typing indicators, and push notifications. My approach focuses on building scalable and secure communication solutions that enhance user engagement and collaboration.",
    },
    {
      icon: "https://madewithreact.com/content/images/2020/04/formik.png",
      name: "Formik",
      pos: "Form State Management in React",
      duration: "2025 - Present",
      title:
        "I utilize Formik to create dynamic, user-friendly forms in React applications. By managing form state, validation, and error handling efficiently, I ensure a seamless user experience. Leveraging Formik's integration with Yup for schema-based validation, I build scalable forms that simplify data handling and improve submission workflows.",
    },
  ];
  return (
    <div className="experience w-full   ">
      <p className="capitalize p-5 text-[25px] font-bold text-white hover-target">
        My work Experience{" "}
      </p>
      <div className="grid xl:grid-cols-5   md:grid-cols-1 max-sm:grid-cols-1  ">
        <div className=" xl:col-span-2  xl:border-r  border-b max-sm:h-screen">
          <Canvas>
            <ambientLight intensity={7} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <OrbitControls enableZoom={false}  maxPolarAngle={Math.PI / 2} />
            {/* <Suspense fallback={}> */}
            <Developer position-y={-3} scale={3} />

            {/* </Suspense> */}
          </Canvas>
        </div>
        <div className=" xl:col-span-3  h-auto   grid grid-cols-[auto_1fr] items  items-center p-3">
          <div className="flex flex-col gap-5 text-white ">
            {experiencecontant.map((item) => {
              return (
                <div className="px-3 hover:border hover:border-gray-300 transition-transform duration-200 ease-in-out rounded-md">
                  <div className="flex   items-center">
                    <img
                      src={item?.icon}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="px-2">
                      <p className="font-bold text-[20px]">{item?.name}</p>
                      <p className="text-[14px] font-semibold">
                        {item.pos} -- {item.duration}
                      </p>
                    </div>
                  </div>
                  <p className="ps-12 py-2">{item?.title}</p>
                  <div className="work-content_bar" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
