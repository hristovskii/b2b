"use client";
import React from "react";
import Image from "next/image";
import {
  FaDiscord,
  FaInstagram,
  FaSquareFacebook,
  FaXTwitter,
} from "react-icons/fa6";
import img from "@/app/resources/logo/LC_Skopje_white.png";

import SocialMediaComponent from "./SocialMedia";

const FooterComponent = () => {
  return (
    <div className="md:flex xl:gap-80 gap-20 justify-center bg-eestec p-4">
      <nav className="flex md:justify-between items-center justify-center">
        <div className="grid grid-cols-4 justify-center items-center ">
          <SocialMediaComponent
            mediaLink={"https://www.instagram.com/eesteclcskopje/"}
            icon={FaInstagram}
            text={"Instagram"}
            size={"4rem"}
          />
          <SocialMediaComponent
            mediaLink={"https://www.facebook.com/EESTECLCSkopje"}
            icon={FaSquareFacebook}
            text={"Facebook"}
            size={"4rem"}
          />
          <SocialMediaComponent
            mediaLink={"https://x.com/EESTEC_Skopje"}
            icon={FaXTwitter}
            text={"Twitter"}
            size={"4rem"}
          />
          <SocialMediaComponent
            mediaLink={"https://discord.gg/UPpGaXzbuH"}
            icon={FaDiscord}
            text={"Discord"}
            size={"4rem"}
          />
        </div>
      </nav>
      <article className="grid justify-items-center text-center m-3 my-5">
        <Image
          src={img}
          alt="Feature Image"
          width={250}
          height={100}
          className=" m-2"
        />
        <div>
          <h6 className="text-center text-white">
            <strong>E</strong>lectrical <strong>E</strong>ngineering{" "}
            <strong>ST</strong>udents&apos; <br /> <strong>E</strong>uropean
            asso<strong>C</strong>iation
          </h6>
        </div>
      </article>
      <article className="md:grid justify-items-center text-center flex justify-center m-3 my-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.55183979883628!2d21.406651475247948!3d42.00520273125226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1354144327581731%3A0x6c4349f5875b2625!2sEESTEC%20LC%20Skopje!5e0!3m2!1sen!2smk!4v1709081052322!5m2!1sen!2smk"
          width="500"
          height="250"
          loading="lazy"
        />
      </article>
    </div>
  );
};
export default FooterComponent;
