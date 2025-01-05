import { useEffect, useState } from "react";
import Skill from "./Skill/Skill";
import { LocalStorage } from "../../../../lib/enum/localStorage.enum";

const Skills = ({
  skillsRef,
}: {
  skillsRef: React.RefObject<HTMLDivElement>;
}) => {
  const [skills, setSkills] = useState(4);

  const addSkills = () => {
    setSkills((prevSkills) => prevSkills + 1);
  };

  useEffect(() => {
    const savedObjective = localStorage.getItem(LocalStorage.SKILLS);
    if (savedObjective && skillsRef.current) {
      skillsRef.current.innerHTML = savedObjective; // Set saved content
    }
  }, [skillsRef]);

  return (
    <div contentEditable suppressContentEditableWarning ref={skillsRef}>
      <p
        onClick={addSkills}
        className="text-left text-lg font-medium text-red-800 cursor-pointer"
      >
        Skills
      </p>
      <hr className="p-[.5px] mt-2 bg-red-800" />
      <div className="text-sm">
        {Array.from({ length: skills }).map((_, index) => (
          <Skill key={index} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
