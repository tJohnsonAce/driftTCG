"use client";

import { motion } from "framer-motion";

import styles from "@/styles";
import { TitleText, TypingText } from "@/components";
import { fadeIn, staggerContainer } from "@/utils/motion";
import Image from "next/image";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}></section>
);

export default World;
