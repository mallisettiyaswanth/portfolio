"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import ShyamSilks from "@/../public/images/shyamsilks.png";
import Brandzhub from "@/../public/images/brandzhub.png";
import IosWhatsapp from "@/../public/images/ios-whatsapp.png";
import ResumeMosaic from "@/../public/images/resume-mosaic.png";
import Spotify from "@/../public/images/spotify.png";
import Portfolio from "@/../public/images/portfolio.png";
import Chat from "@/../public/images/chat.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ActivitySquare, Github } from "lucide-react";
import Link from "next/link";

type Props = {};

type Project = {
  name: string;
  description: string;
  languages: string[];
  sc_link: string;
  image_path: StaticImageData;
  prod_link?: string;
};

const Projects = (props: Props) => {
  const projects: Project[] = [
    {
      name: "Shyamsilks",
      description:
        "Shyam Silks is a Next.js and Supabase-powered e-commerce platform offering a seamless shopping experience with an integrated order system, secure payments, and efficient delivery options.",
      languages: ["Nextjs", "Supabase", "Clerk", "Razorpay"],
      sc_link: "https://github.com/mallisettiyaswanth/shyamsilks.git",
      prod_link: "https://shyamsilks.com",
      image_path: ShyamSilks,
    },
    {
      name: "BrandzHub",
      description:
        "A startup, BrandzHub is a full-featured e-commerce platform built with Next.js and MongoDB, featuring a client and admin app, secure payments, delivery options, and Cloudinary integration for image management.",
      languages: ["Nextjs", "Shadcn", "MongoDB", "Cloudinary"],
      sc_link: "https://github.com/mallisettiyaswanth/brandzhub.git",
      prod_link: "https://brandzhub.shop",
      image_path: Brandzhub,
    },
    {
      name: "TextZLegacy",
      description:
        "TextZLegacy is a real-time messaging app built with Flutter and FastAPI, featuring text, video, and audio chat, status updates, and a seamless user experience powered by PostgreSQL and Material UI.",
      languages: ["Flutter", "FastAPI", "PostgreSQL", "Material UI"],
      sc_link:
        "https://github.com/mallisettiyaswanth/flutter-ios-whatsapp-clone-frontend.git",
      image_path: IosWhatsapp,
    },
    {
      name: "Resume Mosaic",
      description:
        "Resume Mosaic is an AI-powered resume builder developed with Next.js and Firebase, leveraging Gemini AI to generate tailored resumes with a sleek and modern UI using Material UI.",
      languages: ["Nextjs", "Firebase", "Gemini", "Material UI"],
      sc_link:
        "https://github.com/mallisettiyaswanth/flutter-ios-whatsapp-clone-frontend.git",
      prod_link: "https://airesume-theta.vercel.app/",
      image_path: ResumeMosaic,
    },
    {
      name: "Listenify",
      description:
        "Listenify is a music streaming platform built with React.js and Spotify SDK, offering seamless access to curated playlists, user libraries, and real-time music playback, backed by PostgreSQL.",
      languages: ["Reactjs", "SpotifySDK", "PostgreSQL", "Material UI"],
      sc_link: "https://github.com/mallisettiyaswanth/Spotify-clone.git",
      prod_link: "https://listenonfly.vercel.app/",
      image_path: Spotify,
    },
    {
      name: "Portfolio",
      description:
        "Portfolio is a modern, interactive personal website built with Next.js, ShadCN, and Framer Motion, showcasing projects, skills, and experience with smooth animations and a sleek UI.",
      languages: ["Nextjs", "Shadcn", "framer"],
      sc_link: "https://github.com/mallisettiyaswanth/portfolio.git",
      prod_link: "https://listenonfly.vercel.app/",
      image_path: Portfolio,
    },
    {
      name: "Chatify",
      description:
        "Chatify is a real-time chat application built with React.js, Socket.io, and Node.js, featuring instant messaging, MongoDB-backed data storage, and a sleek UI powered by Chakra UI.",
      languages: ["Reactjs", "ChakraUi", "Socket.io", "Nodejs", "MongoDB"],
      sc_link: "https://github.com/mallisettiyaswanth/chat-app-frontend.git",
      prod_link: "https://frontend-mauve-kappa.vercel.app",
      image_path: Chat,
    },
  ];

  return (
    <div className="flex w-full flex-col gap-32" id="projects">
      <div className="w-full items-center flex justify-center flex-col h-16">
        <h1 className="w-fit text-2xl h-full flex flex-col justify-between items-center cursor-pointer">
          <span>Projects</span>
          <div className="h-2 bg-primary w-2/3" />
        </h1>
      </div>
      <div className="flex w-full flex-col lg:gap-24 gap-8">
        {projects.map((project: Project) => {
          return <CustomCard project={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;

const CustomCard = ({ project }: { project: Project }) => {
  
  return (
    <Card className="w-full bg-white rounded-md border-none shadow-lg flex min-h-fit">
      <div className="w-full lg:w-3/5 lg:p-16 p-8 flex flex-col gap-10 text-primary">
        <h1 className="lg:text-4xl text-3xl text-primary">{project.name}</h1>
        <h3 className="leading-6 tracking-wide">{project.description}</h3>
        <div className="flex gap-3 flex-wrap">
          {project.languages.map((language: string) => {
            return (
              <Badge
                className="w-fit max-w-fit text-sm font-normal"
                variant="outline"
              >
                {language}
              </Badge>
            );
          })}
        </div>
        <div className="flex gap-6">
          <Link href={project.sc_link}>
            <Button variant="outline">
              <Github />
              Source Code
            </Button>
          </Link>
          {project.prod_link && (
            <Link href={project.prod_link}>
              <Button>
                <ActivitySquare />
                Visit Live
              </Button>
            </Link>
          )}
        </div>
      </div>
      <div className="hidden lg:w-2/5 relative">
        <Image
          src={project.image_path}
          style={{
            objectFit: "cover",
          }}
          alt="github"
          fill
          className="clip-custom"
        />
        <div className="w-full h-full absolute z-10 bg-secondary/10 clip-custom" />
        <div className="w-full h-full triangle-clip-path bg-gradient-to-b from-secondary/25 via-secondary/75 to-secondary/25 absolute top-0" />
      </div>
    </Card>
  );
};
