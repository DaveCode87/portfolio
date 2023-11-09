"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio",
    description:
      "My personal site built with Next.js, EmailJS, and Tailwind CSS.",
    image: "/images/projects/pro-1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DaveCode87/portfolio",
    previewUrl: "",
  },
  {
    id: 2,
    title: "Quiz App",
    description:"15-question quiz app in Next.js, utilizing Zustand for state management.",
    image: "/images/projects/pro-2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DaveCode87/quiz-app",
    previewUrl: "https://quiz-app-davecode.vercel.app/",
  },
  {
    id: 3,
    title: "Weather App",
    description:"5-day weather forecast app in Next.js, TypeScript, Tailwind, and Lucide React, using OpenWeather API.",
    image: "/images/projects/pro-3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DaveCode87/weather-app",
    previewUrl: "https://weather-app-davecode.vercel.app/",
  },
  {
    id: 4,
    title: "Gym App",
    description:"WIP fitness tracker app in Next.js, TypeScript, Clerck, Lucide React, and Shadcn/ui.",
    image: "/images/projects/pro-4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DaveCode87/gym-app",
    previewUrl: "https://gym-app-davecode.vercel.app/",
  },
  {
    id: 5,
    title: "Crud Laravel",
    description: "Simple Laravel CRUD system in Docker environment with JWT authentication.",
    image: "/images/projects/pro-5.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/DaveCode87/crud-laravel-docker-jwt",
    previewUrl: null,
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
        <ProjectTag
          onClick={handleTagChange}
          name="Backend"
          isSelected={tag === "Backend"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
