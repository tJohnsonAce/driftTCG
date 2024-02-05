"use client";

import { motion } from "framer-motion";

import styles from "@/styles";
import { startingFeatures } from "@/constants";
import Image from "next/image";
import StartSteps from "@/components/StartSteps";
import { TypingText, TitleText } from "@/components";
import { staggerContainer, fadeIn, Variants } from "@/utils/motion";

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={Variants("left")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <Image
          src="/playingCard2.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
          width={1000}
          height={1000}
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| How RC Duels Works" />
        <TitleText title={<>Get started with just a few clicks</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? "0" : ""} ${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
