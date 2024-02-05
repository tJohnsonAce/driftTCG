"use client";

import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import styles from "@/styles";
import { footerVariants } from "@/utils/motion";
import "../styles/globals.css";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Play RC Duels
        </h4>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#6e2020] rounded-[32px] gap-[12px] transition-transform duration-300 hover-target"
        >
          <IoIosArrowForward className="text-white w-6 h-6 icon-rotate" />
          <span className="font-normal text-[16px] text-white">
            Play RC Duels
          </span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">RC DUELS</h4>

          <div className="flex gap-4">
            <FaFacebookSquare className="w-[24px] h-[24px] text-white cursor-pointer" />
            <FaInstagramSquare className="w-[24px] h-[24px] text-white cursor-pointer" />
            <FaLinkedin className="w-[24px] h-[24px] text-white cursor-pointer" />
            <FaSquareXTwitter className="w-[24px] h-[24px] text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
