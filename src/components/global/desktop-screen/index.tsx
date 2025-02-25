"use client"
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {};

const DesktopScreen = (props: Props) => {
  const [expandedKey, setExpandedKey] = useState<string | null>(null);

  const skills = {
    devSkills: [
      "SaaS",
      "Next.js",
      "TypeScript",
      "React.js",
      "Node.js",
      "TailwindCSS",
    ],
    devOps: ["AWS", "GCP", "Azure", "Docker", "Jenkins", "Ansible"],
  };

  const toggleExpand = (key: string) => {
    setExpandedKey(expandedKey === key ? null : key);
  };

  return (
    <div className="flex flex-col bg-secondary rounded-xl overflow-hidden shadow-2xl">
      {/* Header with Buttons */}
      <div className="w-full bg-zinc-200 px-3 h-8 flex items-center gap-2">
        <div className="rounded-full h-4 w-4 bg-rose-400"></div>
        <div className="rounded-full h-4 w-4 bg-yellow-400"></div>
        <div className="rounded-full h-4 w-4 bg-emerald-400"></div>
      </div>

      {/* Content Section */}
      <div className="flex-1 w-full p-8 flex flex-col gap-8 font-mono">
        {/* Location */}
        <div className="text-white flex flex-col gap-1">
          <div className="flex gap-2">
            <span>&gt;</span>
            <span>Yaswanth.currentLocation</span>
          </div>
          <div className="text-[#FFCF50]">"Bhimavaram, AndhraPradesh"</div>
        </div>

        {/* Contact Info */}
        <div className="text-white flex flex-col gap-1">
          <div className="flex gap-2">
            <span>&gt;</span>
            <span>Yaswanth.contactInfo</span>
          </div>
          <div className="text-[#FFCF50]">
            ["
            <Link
              target="_blank"
              href="mailto:mallisettiyaswanth@gmail.com"
              className="text-[#35feff] hover:text-[#35feff]/90"
            >
              mallisettiyaswanth@gmail.com
            </Link>
            ", "
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/mallisettiyaswanth"
              className="text-[#35feff] hover:text-[#35feff]/90"
            >
              linkedIn
            </Link>
            ", "
            <Link
              target="_blank"
              href="https://www.github.com/mallisettiyaswanth"
              className="text-[#35feff] hover:text-[#35feff]/90"
            >
              github
            </Link>
            "]
          </div>
        </div>

        {/* Resume */}
        <div className="text-white flex flex-col gap-1">
          <div className="flex gap-2">
            <span>&gt;</span>
            <span>Yaswanth.resume</span>
          </div>
          <div className="text-[#FFCF50]">
            <Link
              target="_blank"
              href={"/yaswanth.pdf"}
              download={true}
              className="text-[#35feff] hover:text-[#35feff]/90"
            >
              "yaswanth.pdf"
            </Link>
          </div>
        </div>

        {/* Education */}
        <div className="text-white flex flex-col gap-1">
          <div className="flex gap-2">
            <span>&gt;</span>
            <span>Yaswanth.education</span>
          </div>
          <div className="text-[#FFCF50]">
            ["B.Tech in Information Technology, Vishnu Institute of Technology"]
          </div>
        </div>

        {/* Skills (Expandable JSON) */}
        <div className="text-white flex flex-col gap-1">
          <div className="flex gap-2">
            <span>&gt;</span>
            <span>Yaswanth.skills</span>
          </div>
          <div className="text-[#FFCF50] pl-4">
            {Object.keys(skills).map((key) => (
              <div key={key} className="cursor-pointer">
                <span
                  onClick={() => toggleExpand(key)}
                  className="hover:underline"
                >
                  "{key}": {expandedKey === key ? "[" : "..."}
                </span>
                {expandedKey === key && (
                  <>
                    {skills[key as keyof typeof skills].map(
                      (item, index, array) => (
                        <span key={index} className="ml-2">
                          "{item}"{index !== array.length - 1 && ","}
                        </span>
                      )
                    )}
                    <span>]</span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="text-white flex flex-col gap-1">
          <span className="flex gap-2 items-center">
            <span>&gt;</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1] }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "steps(1)",
              }}
              className="text-2xl text-center font-monaco text-white font-bold"
            >
              &#10074;
            </motion.span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DesktopScreen;
