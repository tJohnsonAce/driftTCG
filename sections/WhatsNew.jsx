"use client";

import { motion } from "framer-motion";

import styles from "@/styles";
import { newFeatures } from "@/constants";
import { NewFeatures, TitleText, TypingText } from "@/components";
import { Variants, staggerContainer, fadeIn } from "@/utils/motion";
import Image from "next/image";

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| Whats new?" />
        <TitleText title={<>What&apos;s new about DriftTCG?</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={Variants("right")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <Image
          src="/playingCard4.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
          width={1000}
          height={1000}
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
