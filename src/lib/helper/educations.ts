import { LocalStorage } from "../enum/localStorage.enum";

export const handleSaveEducations = ({
  educationRef,
}: {
  educationRef: React.RefObject<HTMLDivElement>;
}) => {
  if (educationRef.current) {
    const content = educationRef.current.innerHTML;
    if (content) {
      localStorage.setItem(LocalStorage.EDUCATION, content);
      console.log("Educations saved:", content);
    }
  }
};

export const handleClearEducations = () => {
  localStorage.removeItem(LocalStorage.EDUCATION);
};
