import { useEffect, useState } from "react";
import { LocalStorage } from "../../../../lib/enum/localStorage.enum";
import Education from "./Education/Education";

const Educations = ({
  educationRef,
}: {
  educationRef: React.RefObject<HTMLDivElement>;
}) => {
  const [educations, setEducations] = useState(2);

  const addEducations = () => {
    setEducations((prevEducations) => prevEducations + 1);
  };
  useEffect(() => {
    const savedObjective = localStorage.getItem(LocalStorage.EDUCATION);
    if (savedObjective && educationRef.current) {
      educationRef.current.innerHTML = savedObjective; // Set saved content
    }
  }, [educationRef]);
  return (
    <div contentEditable suppressContentEditableWarning ref={educationRef}>
      <p
        onClick={addEducations}
        className="text-left text-lg font-medium text-red-800 cursor-pointer"
      >
        Education
      </p>
      <hr className="p-[.5px] mt-2 bg-red-800" />
      <div className="flex flex-col">
        {Array.from({ length: educations }).map((_, index) => (
          <Education key={index} />
        ))}
      </div>
    </div>
  );
};

export default Educations;
