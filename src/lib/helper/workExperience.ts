import { LocalStorage } from "../enum/localStorage.enum";

export const handleSaveWorkExperiences = ({
  workExperiencesRef,
}: {
  workExperiencesRef: React.RefObject<HTMLDivElement>;
}) => {
  if (workExperiencesRef.current) {
    const content = workExperiencesRef.current.innerHTML;
    if (content) {
      localStorage.setItem(LocalStorage.WORK_EXPERIENCE, content);
      console.log("WorkExperience saved:", content);
    }
  }
};

export const handleClearWorkExperiences = () => {
  localStorage.removeItem(LocalStorage.WORK_EXPERIENCE);
};
