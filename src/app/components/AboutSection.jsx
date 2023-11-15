"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Hard Skills",
    id: "hard",
    content: (
      <ul className="list-disc pl-2">
        <li>Javascript</li>
        <li>Typescript</li>
        <li>React</li>
        <li>Next</li>
        <li>React Native</li>
        <li>Angular</li>
        <li>Laravel</li>
        <li>Git</li>
      </ul>
    ),
  },
  {
    title: "Soft Skills",
    id: "soft",
    content: (
      <ul className="list-disc pl-2">
        <li>Problem Solving</li>
        <li>Communication</li>
        <li>Team Collaboration</li>
        <li>Adaptability</li>
        <li>Creativity</li>
        <li>Figma</li>
      </ul>
    ),
  },
  {
    title: "Work",
    id: "work",
    content: (
      <ul className="list-disc pl-2">
        <li>Frontend Developer Coderblock <br/> November 2020 - Present</li><br/>
        <li>Junior Frontend Developer DevelHope <br/> June 2020 - November 2020</li>
      </ul>
    ),
  },
  // {
  //   title: "Certifications",
  //   id: "certifications",
  //   content: (
  //     <ul className="list-disc pl-2">
  //       <li>AWS Cloud Practitioner</li>
  //       <li>Google Professional Cloud Developer</li>
  //     </ul>
  //   ),
  // },
];

const AboutSection = () => {
  const [tab, setTab] = useState("hard");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hello everyone, my name is Davide Trovato, although everyone calls
            me Dave, and I am a Frontend developer. I primarily work on web
            applications, with a current focus on developing React applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("hard")}
              active={tab === "hard"}
            >
              {" "}
              Hard Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("soft")}
              active={tab === "soft"}
            >
              {" "}
              Soft Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("work")}
              active={tab === "work"}
            >
              {" "}
              Work{" "}
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton> */}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
