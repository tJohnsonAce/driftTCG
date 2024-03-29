"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import styles from "../styles";
import ExploreCard from "@/components/ExploreCard";
import { exploreCards } from "@/constants";
import { staggerContainer } from "@/utils/motion";
import { TitleText, TypingText } from "@/components";

const Explore = () => {
  const [active, setActive] = useState("card-2");

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The Vehicle" textStyles="text-center" />
        <TitleText
          title={
            <>
              eprehenderit in voluptate velit <br className="md:block hidden" />{" "}
              voluptate velit
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreCards.map((card, index) => (
            <ExploreCard
              key={card.id}
              {...card}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
