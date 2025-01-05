import { LocalStorage } from "../enum/localStorage.enum";

export const handleSaveObjective = ({
  objectiveRef,
}: {
  objectiveRef: React.RefObject<HTMLDivElement>;
}) => {
  if (objectiveRef.current) {
    const content = objectiveRef.current.innerHTML;
    if (content) {
      localStorage.setItem(LocalStorage.OBJECTIVE, content);
      console.log("Objective saved:", content);
    }
  }
};

export const handleClearObjective = () => {
  localStorage.removeItem(LocalStorage.OBJECTIVE);
};
