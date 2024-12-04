"use client";

import Image from "next/image";
import tmf from "@/app/resources/tmf.jpeg";
import finki from "@/app/resources/finki.png";
import dose from "@/app/resources/dose.png";
import kvatro from "@/app/resources/kvatro.webp";
import morino from "@/app/resources/Morino.webp";
import redbull from "@/app/resources/redbull.png";
import pekara from "@/app/resources/Pekarata_od_karshi.webp";
import Heading from "./Heading";
import { RevealList } from  'next-reveal'

export default function Sponsors() {
    return(
        <section className="my-10 md:mx-28 mx-12">
            <RevealList interval={100} delay={500}>
            <div className="lg:px-36 md:px-16 px-4 grid justify-center items-center">
            <Heading heading={"Our Supporters"}></Heading>
            </div>
            
            <div className="lg:flex justify-evenly items-center gap-14">
            
                <div className="text-eestec text-center items-center" >
                <Image src={finki} alt="Sponsor Logo" height={400} className="mt-8 mb-8"></Image>
                </div>
                
                <div className="text-eestec text-center items-center" >
                <Image src={tmf} alt="Sponsor Logo" height={250} className="mt-8 mb-8"></Image>
                </div>

            </div>

            </RevealList>


            <RevealList interval={100} delay={500}>
            <div className="lg:px-36 md:px-16 px-4 grid justify-center items-center">
            <Heading heading={"Our Sponsors"}></Heading>
            </div>
            
            <div className="lg:flex justify-evenly items-center gap-14">
            
                 <div className="text-eestec text-center items-center" >
                <Image src={redbull} alt="Sponsor Logo" height={300} className="mt-8 mb-8"></Image>
                </div>

                <div className="text-eestec text-center items-center" >
                <Image src={morino} alt="Sponsor Logo" height={300} className="mt-8 mb-8"></Image>
                </div>
                
                <div className="text-eestec text-center items-center" >
                <Image src={kvatro} alt="Sponsor Logo" height={300} className="mt-8 mb-8"></Image>
                </div>

                <div className="text-eestec text-center items-center" >
                <Image src={pekara} alt="Sponsor Logo" height={300} className="mt-8 mb-8"></Image>
                </div>

                <div className="text-eestec text-center items-center" >
                <Image src={dose} alt="Sponsor Logo" height={300} className="mt-8 mb-8"></Image>
                </div>

            </div>

            
            </RevealList>
        </section>
    );
}