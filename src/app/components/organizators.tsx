"use client";

import Image from "next/image";
import img1 from "@/app/resources/organizators/teovel.jpg";
import img2 from "@/app/resources/organizators/paulina.jpg";
import img3 from "@/app/resources/organizators/jovan.jpg";
import img4 from "@/app/resources/organizators/bojan.jpg";
import img5 from "@/app/resources/organizators/angela.jpg";
import Heading from "./Heading";
import { RevealList } from  'next-reveal'

export default function Organizators() {
    return(
        
        <section className="my-10 md:mx-28 mx-12">
            <RevealList interval={100} delay={500}>
            <div className="lg:px-36 md:px-16 px-4 grid justify-center items-center">
            <Heading heading={"Organizators for the coming event"}></Heading>
            </div>
            <div className="lg:flex justify-evenly items-center gap-14">
                <div className="text-eestec text-center items-center" >
                <Image src={img1} alt="Sponsor Logo" height={300} style={{ borderRadius: "50%", border: "5px solid #fbbe22" }} className="mt-8 mb-8"></Image>
                <h1 className="md:text-3xl text-4xl font-semibold my-3 text-center text-white"> <span className="text-eestec font-bold">Teodor Krstevski </span></h1>
                <h1 className="md:text-2xl text-4xl font-semibold my-3 text-center text-white"> <span className="text-eestec font-bold">Head Organizator</span></h1>
                </div>
                
                <div className="text-eestec text-center items-center" >
                <Image src={img2} alt="Sponsor Logo" height={300} style={{ borderRadius: "50%", border: "5px solid #fbbe22" }} className="mt-8 mb-8"></Image>
                <h1 className="md:text-3xl text-4xl font-semibold my-3 text-center text-white"> <span className="text-eestec font-bold">Paulina Kiprevska</span></h1>
                <h1 className="md:text-2xl text-4xl font-semibold my-3 text-center text-white"> <span className="text-eestec font-bold">FR coordinator</span></h1>
                </div>

                <div className="text-eestec text-center items-center" >
                <Image src={img3} alt="Sponsor Logo" height={300} style={{ borderRadius: "50%", border: "5px solid #fbbe22" }} className="mt-8 mb-8"></Image>
                <h1 className="md:text-3xl text-4xl font-semibold my-3 text-center text-white"> <span className="text-eestec font-bold">Jovan Aleksandroski</span></h1>
                <h1 className="md:text-2xl text-4xl font-semibold my-3 text-center text-white"> <span className="text-eestec font-bold">HR coordinator</span></h1>
                </div>
            </div>

            <div className="lg:flex justify-evenly items-center">
                <div className="text-eestec text-center items-center" >
                <Image src={img4} alt="Sponsor Logo" height={300} style={{ borderRadius: "50%", border: "5px solid #fbbe22" }} className="mt-8 mb-8"></Image>
                <h1 className="md:text-3xl text-4xl font-semibold my-3 text-center text-white"> <span className="text-eestec font-bold">Bojan Naumovski</span></h1>
                <h1 className="md:text-2xl text-4xl font-semibold my-3 text-center text-white"> <span className="text-eestec font-bold">PR coordinator</span></h1>
                </div>

                <div className="text-eestec text-center items-center" >
                <Image src={img5} alt="Sponsor Logo" height={300} style={{ borderRadius: "50%", border: "5px solid #fbbe22" }} className="mt-8 mb-8"></Image>
                <h1 className="md:text-3xl text-4xl font-semibold my-3 text-center text-white"> <span className="text-eestec font-bold">Angela Milenkoska </span></h1>
                <h2 className="md:text-2xl text-4xl font-semibold my-3 text-center text-white"> <span className="text-eestec font-bold">Contact Person</span></h2>
                </div>
                
            </div>
            </RevealList>
        </section>
        
    );
}