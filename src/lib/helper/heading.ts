import { LocalStorage } from "../enum/localStorage.enum";

export const handleSaveHeading = ({
  headingRef,
}: {
  headingRef: React.RefObject<HTMLDivElement>;
}) => {
  if (headingRef.current) {
    const content = headingRef.current.innerHTML;
    if (content) {
      localStorage.setItem(LocalStorage.HEADING, content);
      console.log("Heading saved:", content);
    }
  }
};

export const handleClearHeading = () => {
  localStorage.removeItem(LocalStorage.HEADING);
};
