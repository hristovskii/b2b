"use client";

import Feature from "./Feature";
import { MdCode } from "react-icons/md";
import { MdOutlineSchool } from "react-icons/md";
import { MdOutlineTrendingUp } from "react-icons/md";
import { RevealList } from "next-reveal";

export default function KeyFeatures() {
  return (
    <section className="my-10 md:mx-6 mx-12">
      <RevealList interval={200} delay={500}>
        <div className="md:flex justify-center items-center gap-20">
          <Feature icon={MdCode} text={"Learn Development"} />
          <Feature icon={MdOutlineSchool} text={"Educational Sessions"} />
          <Feature icon={MdOutlineTrendingUp} text={"Career Opportunities"} />
        </div>
      </RevealList>
    </section>
  );
}
