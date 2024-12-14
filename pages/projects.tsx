import React, { useCallback, useEffect, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectsNavbar from "@/components/ProjectsNavbar";
import { projects as projectsData } from "@/utils/data";
import { Category, IProject } from "@/utils/type";

const Projects = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [active, setActive] = useState("all");
  const [showDetail, setShowDetail] = useState<number | null>(null);

  useEffect(() => {
    getReversedProjectsSlice();
  }, []);

  const getReversedProjectsSlice = useCallback(() => {
    const newProjectsArray = [...projectsData].reverse().slice(0,6);
    setProjects(newProjectsArray);
  }, []);

  const handleFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      getReversedProjectsSlice();
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) => project.category.includes(category));
    setProjects(newArray);
    setActive(category);
  };

  return (
    <div className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }}>
      <ProjectsNavbar handleFilterCategory={handleFilterCategory} active={active} />
      <div className="relative grid grid-cols-12 gap-4 my-3">
        {projects.map((project) => (
          <div
            key={project.name}
            className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
          >
            <ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDetail} />
          </div>
        ))}
      </div>
      { active === 'all' ? <span className="text-gray-400">※最新の6件のみを表示しています。</span> : <></>}
    </div>
  );
};

export default Projects;
