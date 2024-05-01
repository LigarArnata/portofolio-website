"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "GTravel Website",
    description: "Travel Website Mini Project",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/LigarArnata/Mini_Project_1_WebDev",
  },
  {
    id: 2,
    title: "React Website Project",
    description: "Register, Login, & Fetch Reqres.in API",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/LigarArnata/Mini_Project_2_React",
  },
  {
    id: 3,
    title: "Website Penggajian",
    description: "Website Penggajian using CodeIgniter Framework",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/LigarArnata/Final-Project-PBKK",
  },
  {
    id: 4,
    title: "Github User",
    description: "Application to Fetch and Store Github User API",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
  },
  {
    id: 5,
    title: "Asclepius",
    description: "Skin Cancer Detection Application",
    image: "/images/projects/5.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/LigarArnata/Asclepius",
  },
  {
    id: 6,
    title: "Arnata Coffee",
    description: "UI/UX for Online Coffee Shop",
    image: "/images/projects/6.png",
    tag: ["All", "UI/UX"],
    gitUrl: "https://www.figma.com/file/MbyptMMU2zq4o4Z7Q35umI/Arnata-Coffee-Mobile?type=design&node-id=0%3A1&mode=design&t=zuCy34z0jGLlHaDR-1",
  },
  {
    id: 7,
    title: "Garrr Store",
    description: "UI/UX for E-Commerce Desktop Website",
    image: "/images/projects/7.png",
    tag: ["All", "UI/UX"],
    gitUrl:"https://www.figma.com/file/c0aI9ke7rw7QXnV3iVP7sp/E-Commerce-for-Desktop?type=design&node-id=0%3A1&mode=design&t=Zvn6oW86FcOHEwTJ-1",
  },
  {
    id: 8,
    title: "BFI Mobile",
    description: "UI/UX for Mini Hackaton Challenge BFI",
    image: "/images/projects/8.png",
    tag: ["All", "UI/UX"],
    gitUrl: "https://www.figma.com/file/e5ZW7g1dvcws12cz9rRX7o/BFI-Mobile?type=design&node-id=0%3A1&mode=design&t=MISW7uGnFoNThqtS-1",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

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
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="UI/UX"
          isSelected={tag === "UI/UX"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
        ))}
        </div>
    </section>
  );
};

export default ProjectsSection;