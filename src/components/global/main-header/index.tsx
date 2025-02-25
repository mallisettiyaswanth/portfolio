"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import Link from "next/link";
import UnderLineAnimation from "../underline-animate";

type Props = {};

const MainHeader = (props: Props) => {
  return (
    <div className="flex lg:gap-12 gap-8 flex-col">
      <div className="flex lg:gap-12 gap-8 items-center">
        <span className="lg:text-8xl text-4xl text-center font-monaco text-secondary tracking-wider">
          &gt;
        </span>
        <div className="flex items-center">
          <TypingAnimation>Yaswanth</TypingAnimation>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "steps(1)",
            }}
            className="lg:text-9xl text-7xl text-center font-monaco text-secondary font-bold"
          >
            &#10074;
          </motion.span>
        </div>
      </div>
      <div className="flex gap-3 flex-col lg:text-2xl/8 text-lg tracking-wide font-extralight text-primary/50">
        <span>
          I am a Full Stack Developer and my passion is to build web
          applications.
        </span>
        <span className="flex gap-2">
          Check out my
          <span>
            <UnderLineAnimation>
              <Link href="#projects" className="font-semibold text-secondary">
                side-projects
              </Link>
            </UnderLineAnimation>
          </span>
          below.
        </span>
      </div>
    </div>
  );
};

export default MainHeader;
