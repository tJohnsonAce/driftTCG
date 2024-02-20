"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "@/styles";
import { slideIn, staggerContainer, textVariant } from "@/utils/motion";

const Hero = () => (
  <section className={`${styles.yPaddings} overflow-hidden text-white`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col items-center justify-center text-center"
    >
      <motion.div
        variants={textVariant(1)}
        className="z-10 max-w-xl mx-auto space-y-4"
      >
        <h1
          className="text-6xl font-bold md:text-8xl"
          style={{ letterSpacing: "0.05em" }}
        >
          Explore the Thrill
        </h1>
        <h2
          className="text-4xl font-bold md:text-6xl"
          style={{ letterSpacing: "0.05em" }}
        >
          of RC Duels
        </h2>
      </motion.div>
      <motion.div
        variants={slideIn("up", "tween", 0.3, 0.6)}
        className="w-full mt-[-4rem] md:mt-[-10rem]"
      >
        <Image
          src="/cover.png"
          alt="hero"
          layout="responsive"
          width={1920}
          height={1080}
          className="object-cover rounded-tl-lg z-10"
          priority
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
