import { LocalStorage } from "../enum/localStorage.enum";

export const handleSaveProjects = ({
  projectsRef,
}: {
  projectsRef: React.RefObject<HTMLDivElement>;
}) => {
  if (projectsRef.current) {
    const content = projectsRef.current.innerHTML;
    if (content) {
      localStorage.setItem(LocalStorage.PROJECTS, content);
      console.log("Projects saved:", content);
    }
  }
};

export const handleClearProjects = () => {
  localStorage.removeItem(LocalStorage.PROJECTS);
};
