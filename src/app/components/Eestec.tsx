"use client";

import Image from "next/image";
import LOGO from "@/app/resources/logo/LC_Skopje_white.png";
import LOGO2 from "@/app/resources/logo/logo.svg";
import Photo1 from "@/app/resources/logo/participants.png";
import Photo2 from "@/app/resources/logo/participants_2.png";
import Icon from "./Icon";
import { MdElectricBolt } from "react-icons/md";
import { RevealList } from "next-reveal";

export default function EESTEC() {
  return (
    <section className="mx-auto my-12 lg:px-16 px-8">
      <RevealList interval={100} delay={500}>
        <div className="lg:flex lg:flex-row lg:gap-3 grid">
          <div className="basis-4/5 lg:order-1 order-2">
            <div className="flex flex-row">
              <div
                style={{
                  backgroundImage: `url(${Photo1.src})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="grow shrink rounded"
              ></div>
              <div className="rounded border-2 border-eestec md:p-16 p-8 ml-3 flex justify-content items-center">
                {/* <RiRobot2Line size={40} color="#149414"></RiRobot2Line> */}
                <Image
                  src={LOGO2}
                  alt="Sponsor Logo"
                  height={100}
                  className="mt-8 mb-8"
                />
              </div>
            </div>
            <div
              className="rounded bg-eestec mt-3 grow px-6 py-5 flex items-end lg:block hidden"
              style={{ height: "96px" }}
            >
              <h3 className="text-4xl text-red font-eestec font-light px- my-2 flex ">
                Power Your Future{" "}
                <Icon icon={MdElectricBolt} color={""} size={""} />
              </h3>
            </div>
          </div>
          <div className="basis-1/5 lg:order-2 order-1">
            <div className="rounded bg-eestec mb-3 py-5 flex justify-center items-center">
              <Image
                src={LOGO}
                alt="EESTEC LC Skopje Logo"
                height={125}
                className="md:p-3 p-1"
              />
            </div>
            <div
              style={{
                backgroundImage: `url(${Photo2.src})`,
                height: "220px",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="lg:block hidden rounded"
            ></div>
          </div>
        </div>
      </RevealList>
    </section>
  );
}
