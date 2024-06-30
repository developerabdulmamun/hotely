"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { useInView } from "react-intersection-observer";
import { Button } from "./ui/button";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import Stats from "./Stats";

const About = () => {
  return (
    <section className="py-12 xl:py-24">
      <div className="container">
        <div className="flex flex-col xl:flex-row">
          {/* img */}
          <div className="flex-1 relative">
            <Image
              src={"/about/img2.png"}
              width={559}
              height={721}
              alt="about photo"
            />
          </div>

          {/* text */}
          <div className="xl:max-w-[470px]">
            <h2 className="h2 mb-[38px]">About Hotely</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              porro asperiores deleniti culpa blanditiis sapiente iusto in
              consequuntur sed esse quas neque, debitis qui adipisci repellat.
              Est sapiente vitae tenetur?
            </p>
            {/* stats */}
            <div className="my-5 xl:my-10 min-h-[35px]">
              <Stats />
            </div>
            <p className="mb-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui nisi
              iusto dolor aspernatur sed ut in incidunt quas provident voluptate
              deleniti eaque eligendi, fuga minima, at quaerat, fugit ipsum
              error?
            </p>
            <Button variant="accent">Explore More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
