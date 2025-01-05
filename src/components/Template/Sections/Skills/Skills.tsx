import { useState } from "react";
import Skill from "./Skill/Skill";

const Skills = () => {
  const [skills, setSkills] = useState(4);

  const addSkills = () => {
    setSkills((prevSkills) => prevSkills + 1);
  };

  return (
    <div contentEditable suppressContentEditableWarning>
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
