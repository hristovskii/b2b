"use client";

import Numbers from "./Numbers";
import { RevealList } from  'next-reveal'

export default function Statistics() {
    return(
        <section className="my-10 md:mx-28 mx-12">
            <RevealList interval={100} delay={500}>
            <div className="lg:flex justify-evenly items-center gap-24">
                <Numbers number={"350+"} text={"Participants"}></Numbers>
                <Numbers number={"10+"} text={"Speakers"}></Numbers>
                <Numbers number={"3"} text={"Successful Events"}></Numbers>
            </div>
            </RevealList>
        </section>
    );
}