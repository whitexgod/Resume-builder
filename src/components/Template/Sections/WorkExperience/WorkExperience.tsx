import { useEffect, useState } from "react";
import { LocalStorage } from "../../../../lib/enum/localStorage.enum";
import Experience from "./Experience/Experience";

const WorkExperience = ({
  workExperiencesRef,
}: {
  workExperiencesRef: React.RefObject<HTMLDivElement>;
}) => {
  const [workExperiences, setWorkExperiences] = useState(1);

  const addWorkExperiences = () => {
    setWorkExperiences((prevWorkExperiences) => prevWorkExperiences + 1);
  };

  useEffect(() => {
    const savedObjective = localStorage.getItem(LocalStorage.WORK_EXPERIENCE);
    if (savedObjective && workExperiencesRef.current) {
      workExperiencesRef.current.innerHTML = savedObjective; // Set saved content
    }
  }, [workExperiencesRef]);
  return (
    <div
      contentEditable
      suppressContentEditableWarning
      ref={workExperiencesRef}
    >
      <p
        onClick={addWorkExperiences}
        className="text-left cursor-pointer text-lg font-medium text-red-800"
      >
        Work Experience
      </p>
      <hr className="p-[.5px] mt-2 bg-red-800" />
      <div className="flex flex-col">
        {Array.from({ length: workExperiences }).map((_, index) => (
          <Experience key={index} />
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
