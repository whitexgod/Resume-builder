import { LocalStorage } from "../enum/localStorage.enum";

export const handleSaveSkills = ({
  skillsRef,
}: {
  skillsRef: React.RefObject<HTMLDivElement>;
}) => {
  if (skillsRef.current) {
    const content = skillsRef.current.innerHTML;
    if (content) {
      localStorage.setItem(LocalStorage.SKILLS, content);
      console.log("Skills saved:", content);
    }
  }
};

export const handleClearSkills = () => {
  localStorage.removeItem(LocalStorage.SKILLS);
};
