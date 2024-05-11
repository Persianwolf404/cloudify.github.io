"use client";
import React from "react";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faHeadphones } from "@fortawesome/free-solid-svg-icons";
function Hero() {
  const [index, setIndex] = useState(0);
  const word = useRef(null);
  const bottom_cloud = useRef(null);
  const hero_title = useRef(null);
  const server_room = useRef(null);
  const dot = useRef(null);
  const line = useRef(null);
  const slogan = useRef(null);

  useEffect(() => {
    const fnc = () => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    };

    let ctx = gsap.context(() => {
      gsap.to(bottom_cloud.current, {
        y: "-100%",
        duration: "1",
        ease: "power4.out",
      });
    });
    gsap
      .timeline()
      .to(server_room.current, {
        opacity: 1,
        scale: 1,
        delay: 0.5,
      })
      .to(dot.current, {
        delay: 0.2,
        opacity: 1,
      })
      .to(line.current, {
        opacity: 1,
      })
      .to(line.current, {
        height: "240px",
        duration: 1,
      });

    gsap
      .timeline()
      .to(hero_title.current, {
        x: "-50",
        duration: 0,
      })
      .to(hero_title.current, {
        x: "",
        opacity: 1,
      });
    gsap
      .timeline()
      .to(slogan.current, {
        x: "-50",
        duration: 0,
      })
      .to(slogan.current, {
        x: "",
        opacity: 1,
      });

    gsap
      .timeline({ repeat: -1, repeatDelay: 3, delay: 1 })
      .to(word.current, {
        opacity: 0,
        y: "-40",
        duration: 0.5,
      })
      .to(word.current, {
        y: "40",
        duration: 0,
      })
      .add(fnc)
      .to(word.current, {
        y: "0",
        opacity: 1,
        duration: 0.5,
      });

    return () => ctx.revert();
  }, []);

  const words = [
    "Accelerate",
    "Innovate",
    "Optimize",
    "Streamline",
    "Transform",
    "Revolutionize",
    "Empower",
    "Enhance",
    "Evolve",
    "Thrive",
  ];
  return (
    <div className="hero overflow-hidden flex-grow  relative">
      <main className="absolute flex z-10 h-full w-full">
        <div className="app flex">
          <section className="w-[40%] mb-[250px] flex flex-col justify-center h-auto">
            <h1
              ref={hero_title}
              className="text-white opacity-0 text-4xl leading-[55px]"
            >
              Cloudify, <br />
              Cloud Technology,{" "}
              <span className="inline-block" ref={word}>
                {words[index]}
              </span>
            </h1>
            <div ref={slogan} className="opacity-0">
              <p className="text-xl  text-white ml-1 mt-4 ">
                Unlocking the Power of the Cloud: Your Sky's the Limit
              </p>
              <div>
                <button className="bg-white text-[#047EB3] rounded-3xl ml-1 p-3 px-4  mt-5">
                  <span>Lest Get Started</span>{" "}
                  <FontAwesomeIcon className=" ml-1" icon={faArrowDown} />
                </button>
                <button className="bg-white text-[#047EB3] rounded-full ml-4 p-3 px-4  mt-5">
                  <FontAwesomeIcon
                    className="scale-[1.5]"
                    icon={faHeadphones}
                  />
                </button>
              </div>
            </div>
          </section>
          <section className="w-[60%] relative  flex flex-col justify-end items-end h-auto">
            <div className="absolute left-[17%]  items-end top-[31%] flex flex-col ">
              <div
                ref={line}
                className="border-r-2 mr-[6px]   pr-3 pt-1 border-gray-200 overflow-hidden w-[350px] opacity-0 border-dashed mb-1 h-0 "
              >
                <div className="flex mb-3 justify-end w-full">
                  <span className="mx-1 bg-[#E3A689] w-[40px]  h-1 rounded"></span>
                  <span className="mx-1 bg-[#07C9C7] w-[60px]  h-1 rounded"></span>
                  <span className="mx-1 bg-[#E5E2E0] w-[30px]  h-1 rounded"></span>
                </div>
                <div className="flex mb-4 justify-end w-full">
                  <span className="mx-1 bg-[#E5E2E0] w-[10px]  h-1 rounded"></span>
                  <span className="mx-1 bg-[#07C9C7] w-[20px]  h-1 rounded"></span>
                  <span className="mx-1 bg-[#E3A689] w-[30px]  h-1 rounded"></span>
                </div>{" "}
                <div className="flex mb-4 justify-end w-full">
                  <span className="mx-1 bg-[#E5E2E0] w-[40px]  h-1 rounded"></span>
                  <span className="mx-1 bg-[#E3A689] w-[120px]  h-1 rounded"></span>
                  <span className="mx-1 bg-[#E5E2E0] w-[50px]  h-1 rounded"></span>
                </div>{" "}
                <div className="flex mb-4 justify-end w-full">
                  <span className="mx-1 bg-[#E5E2E0] w-[10px]  h-1 rounded"></span>
                  <span className="mx-1 bg-[#07C9C7] w-[30px]  h-1 rounded"></span>
                  <span className="mx-1 bg-[#E3A689] w-[60px]  h-1 rounded"></span>
                </div>{" "}
                <div className="flex mb-4 justify-end w-full">
                  <span className="mx-1 bg-[#E3A689] w-[40px]  h-1 rounded"></span>
                  <span className="mx-1 bg-[#07C9C7] w-[70px]  h-1 rounded"></span>
                  <span className="mx-1 bg-[#E5E2E0] w-[20px]  h-1 rounded"></span>
                </div>{" "}
                <div className="flex mb-4 justify-end w-full">
                  <span className="mx-1 bg-[#E5E2E0] w-[10px]  h-1 rounded"></span>
                  <span className="mx-1 bg-[#07C9C7] w-[40px]  h-1 rounded"></span>
                  <span className="mx-1 bg-[#E3A689] w-[70px]  h-1 rounded"></span>
                </div>
                <div className="flex mb-4 justify-end w-full">
                  <span className="mx-1 bg-[#E3A689] w-[40px]  h-1 rounded"></span>
                  <span className="mx-1 bg-[#07C9C7] w-[10px]  h-1 rounded"></span>
                  <span className="mx-1 bg-[#E5E2E0] w-[60px]  h-1 rounded"></span>
                </div>
                <div className="flex mb-4 justify-end w-full">
                  <span className="mx-1 bg-[#E3A689] w-[70px]  h-1 rounded"></span>
                  <span className="mx-1 bg-[#07C9C7] w-[10px]  h-1 rounded"></span>
                  <span className="mx-1 bg-[#E5E2E0] w-[40px]  h-1 rounded"></span>
                </div>
                <div className="flex mb-4 justify-end w-full">
                  <span className="mx-1 bg-[#E3A689] w-[90px]  h-1 rounded"></span>
                  <span className="mx-1 bg-[#07C9C7] w-[50px]  h-1 rounded"></span>
                  <span className="mx-1 bg-[#E5E2E0] w-[70px]  h-1 rounded"></span>
                </div>
                <div className="flex mb-4 justify-end w-full">
                  <span className="mx-1 bg-[#E5E2E0] w-[90px]  h-1 rounded"></span>
                  <span className="mx-1 bg-[#07C9C7] w-[50px]  h-1 rounded"></span>
                  <span className="mx-1 bg-[#E3A689] w-[50px]  h-1 rounded"></span>
                </div>
                <div className="flex mb-4 justify-end w-full">
                  <span className="mx-1 bg-[#E5E2E0] w-[40px]  h-1 rounded"></span>
                  <span className="mx-1 bg-[#07C9C7] w-[10px]  h-1 rounded"></span>
                  <span className="mx-1 bg-[#E3A689] w-[30px]  h-1 rounded"></span>
                </div>
              </div>
              <span
                ref={dot}
                className=" w-3 h-3 rounded-full opacity-0 bg-gray-300 "
              ></span>
            </div>

            <Image
              className=" scale-[0.7] opacity-0 "
              ref={server_room}
              src="/datacenter.svg"
              alt="Logo"
              width={10000}
              height={50}
            />
          </section>
        </div>
      </main>
      <div className="h-[25vh] z-2 w-full absolute top-[100%]">
        <div ref={bottom_cloud} className="content z-1"></div>
      </div>
    </div>
  );
}

export default Hero;
