import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex justify-end p-8 px-12 items-center text-lg">
      <ul className="flex gap-14">
        <li className="cursor-pointer text-secondary-foreground link-underline group h-10 flex flex-col justify-between tracking-wide">
          <span>Projects</span>
          <div className="bg-primary h-[4px] w-0 group-hover:w-full transition-all duration-500"></div>
        </li>
        <li className="cursor-pointer text-secondary-foreground link-underline group h-10 flex flex-col justify-between tracking-wide">
          <span>Contact</span>
          <div className="bg-primary h-[4px] w-0 group-hover:w-full transition-all duration-500"></div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
