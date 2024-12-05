"use client";

import Image from "next/image";
import img1 from "@/app/resources/b2b1.jpg";
import Heading from "./Heading";
import { RevealList } from "next-reveal";

export default function Agenda() {
  return (
    <section className="my-10 md:mx-28 mx-12">
      <RevealList interval={100} delay={500}>
        <div className="lg:px-36 md:px-16 px-4 grid justify-center items-center">
          <Heading heading={"Agenda for the event"} />
        </div>
        <div className="lg:flex justify-evenly items-center gap-14 text-center">
          <div>
            <Heading heading={"day 1"} />
            <Image
              src={img1}
              alt="Sponsor Logo"
              height={400}
              style={{ border: "5px solid #fbbe22" }}
              className="mt-8 mb-8"
            />
          </div>

          <div>
            <Heading heading={"day 2"} />
            <Image
              src={img1}
              alt="Sponsor Logo"
              height={400}
              style={{ border: "5px solid #fbbe22" }}
              className="mt-8 mb-8"
            />
          </div>

          <div>
            <Heading heading={"day 3"} />
            <Image
              src={img1}
              alt="Sponsor Logo"
              height={400}
              style={{ border: "5px solid #fbbe22" }}
              className="mt-8 mb-8"
            />
          </div>
        </div>
      </RevealList>
    </section>
  );
}
