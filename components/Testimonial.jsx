"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const testimonialData = [
  {
    img: "/testimonials/img-1.png",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas a repellat dolorem veritatis maxime magni nesciunt unde, eveniet quam eum molestiae eos doloremque sapiente dolores. Modi corporis cum sunt id iusto voluptatem soluta tenetur inventore eos delectus corrupti cumque praesentium, reiciendis, mollitia, itaque non repellat ratione quibusdam.",
    personName: "Robert Rene",
    location: "Singapore",
  },
  {
    img: "/testimonials/img-2.png",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas a repellat dolorem veritatis maxime magni nesciunt unde, eveniet quam eum molestiae eos doloremque sapiente dolores. Modi corporis cum sunt id iusto voluptatem soluta tenetur inventore eos delectus corrupti cumque praesentium, reiciendis, mollitia, itaque non repellat ratione quibusdam.",
    personName: "Robert Rene",
    location: "Singapore",
  },
];

const Testimonial = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className="bg-soft_green xl:h-[880px]"
    >
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="container"
      >
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="xl:h-[680px] overflow-hidden"
        >
          {testimonialData.map((slide, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-1 xl:grid-cols-2 py-12 xl:py-24">
                  <Image
                    src={slide.img}
                    width={470}
                    height={470}
                    quality={100}
                    alt="testimonial image"
                    className="hidden xl:flex"
                  />
                  <div className="flex-1 bg-white/20 text-white p-12">
                    <p className="text-lg leading-9 mb-8">{slide.message}</p>
                    <p className="text-xl font-bold">{slide.personName}</p>
                    <p>{slide.location}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </motion.section>
  );
};

export default Testimonial;
