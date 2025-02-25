import ContactInfo from "@/components/global/contact";
import DesktopScreen from "@/components/global/desktop-screen";
import MainHeader from "@/components/global/main-header";
import Navbar from "@/components/global/navbar";
import Projects from "@/components/global/projects";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="min-h-screen flex flex-col lg:gap-24 gap-12 pb-20">
      <Navbar />
      <MainHeader />
      <DesktopScreen />
      <Projects />
      <ContactInfo />
    </div>
  );
};

export default Home;
