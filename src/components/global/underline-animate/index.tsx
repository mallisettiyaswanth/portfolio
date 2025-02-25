import React from 'react'

type Props = {
    children: React.ReactNode
}

const UnderLineAnimation = ({
    children,
}: Props) => {
  return (
    <div className="cursor-pointer text-secondary-foreground link-underline group h-10 flex flex-col justify-between tracking-wide">
        <span>{children}</span>
        <div className="bg-primary h-[4px] w-0 group-hover:w-full transition-all duration-500"></div>
    </div>
  );
}

export default UnderLineAnimation