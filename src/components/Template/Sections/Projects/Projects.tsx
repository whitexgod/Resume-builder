import { useEffect, useState } from "react";
import { LocalStorage } from "../../../../lib/enum/localStorage.enum";
import Project from "./Project/Project";

const Projects = ({
  projectsRef,
}: {
  projectsRef: React.RefObject<HTMLDivElement>;
}) => {
  const [projects, setProjects] = useState(2);

  const addProjects = () => {
    setProjects((prevProjects) => prevProjects + 1);
  };

  useEffect(() => {
    const savedObjective = localStorage.getItem(LocalStorage.PROJECTS);
    if (savedObjective && projectsRef.current) {
      projectsRef.current.innerHTML = savedObjective; // Set saved content
    }
  }, [projectsRef]);
  return (
    <div contentEditable suppressContentEditableWarning ref={projectsRef}>
      <p
        onClick={addProjects}
        className="text-left text-lg cursor-pointer font-medium text-red-800"
      >
        Projects
      </p>
      <hr className="p-[.5px] mt-2 bg-red-800" />
      <div className="flex flex-col">
        {Array.from({ length: projects }).map((_, index) => (
          <Project key={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
