import React from "react";
import UnderLineAnimation from "../underline-animate";
import { Underline } from "lucide-react";

type Props = {};

const ContactInfo = (props: Props) => {
  return (
    <div className="flex w-full flex-col lg:gap-40 gap-20" id="contact">
      <div className="w-full items-center flex justify-center flex-col h-16">
        <h1 className="w-fit text-2xl h-full flex flex-col justify-between items-center cursor-pointer">
          <span>Contact</span>
          <div className="h-2 bg-primary w-2/3" />
        </h1>
      </div>
      <div className="w-full flex-col lg:flex-row flex lg:items-start items-center justify-center gap-8 text-lg text-primary hover:text-primary/80 cursor-pointer">
        <UnderLineAnimation>
          <span>
            <a target="_blank" href="mailto:mallisettiyaswanth@gmail.com">
              mallisettiyaswanth@gmail.com
            </a>
          </span>
        </UnderLineAnimation>
        <span className="hidden lg:block">||</span>
        <UnderLineAnimation>
          <span>
            <a
              target="_blank"
              href="https://linkedin.com/in/mallisettiyaswanth"
            >
              LinkedIn
            </a>
          </span>
        </UnderLineAnimation>
        <span className="hidden lg:block">||</span>
        <UnderLineAnimation>
          <span>
            <a target="_blank" href="https://github.com//mallisettiyaswanth">
              Github
            </a>
          </span>
        </UnderLineAnimation>
      </div>
      <div className="text-sm flex items-center justify-center text-primary/80">
        Made by Yaswanth © 2025
      </div>
    </div>
  );
};

export default ContactInfo;
