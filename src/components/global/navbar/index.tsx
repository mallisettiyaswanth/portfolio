import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex md:justify-end justify-center p-8 px-12 items-center text-lg">
      <ul className="flex gap-14">
        <li className="cursor-pointer text-secondary-foreground link-underline group h-10 flex flex-col justify-between tracking-wide">
          <Link href="#projects">Projects</Link>
          <div className="bg-primary h-[4px] w-0 group-hover:w-full transition-all duration-500"></div>
        </li>
        <li className="cursor-pointer text-secondary-foreground link-underline group h-10 flex flex-col justify-between tracking-wide">
          <Link href="#contact">Contact</Link>
          <div className="bg-primary h-[4px] w-0 group-hover:w-full transition-all duration-500"></div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
