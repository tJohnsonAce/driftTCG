"use client";

import { motion } from "framer-motion";
import { TypingText } from "@/components/CustomTexts";
import styles from "@/styles";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { IoIosArrowDown } from "react-icons/io";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About RC Duels" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">RC Duels</span> mco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.{" "}
        <span className="font-extrabold text-white">
          dolore eu fugiat nulla
        </span>{" "}
        dolore eu fugiat <span className="font-extrabold text-white">DF</span>{" "}
        reprehenderit in voluptate velit esse cillum{" "}
        <span className="font-extrabold text-white">velit</span>cillum dolore eu
        fugiat nulla
      </motion.p>

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="mt-[28px]"
      >
        <IoIosArrowDown className="w-[18px] h-[28px] text-secondary-white" />
      </motion.div>
    </motion.div>
  </section>
);

export default About;
