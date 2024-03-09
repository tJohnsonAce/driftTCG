"use client";

import { motion } from "framer-motion";
import styles from "@/styles";
import { navVariants } from "@/utils/motion";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <CiSearch className="text-white w-8 h-8" />{" "}
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        DriftTCG
      </h2>
      <RxHamburgerMenu className="text-white w-8 h-8" />{" "}
    </div>
  </motion.nav>
);

export default Navbar;
