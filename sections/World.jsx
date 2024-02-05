"use client";

import { motion } from "framer-motion";

import styles from "@/styles";
import { TitleText, TypingText } from "@/components";
import { fadeIn, staggerContainer } from "@/utils/motion";
import Image from "next/image";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People around the World" textStyles="text-center" />
      <TitleText
        title={<>Play with friends around the world</>}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <Image
          src="/map.png"
          alt="map"
          className="w-full h-full object-cover"
          width={1000}
          height={1000}
        />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <Image
            src="/people1.webp"
            alt="people"
            className="w-full h-full"
            width={1000}
            height={1000}
          />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <Image
            src="/people2.webp"
            alt="people"
            className="w-full h-full"
            width={1000}
            height={1000}
          />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <Image
            src="/people3.webp"
            alt="people"
            className="w-full h-full"
            width={1000}
            height={1000}
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;