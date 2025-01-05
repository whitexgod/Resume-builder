import { useRef, useState } from "react";
import Red from "../Buttons/Red";
import Achievements from "./Sections/Achievements/Achievements";
import Education from "./Sections/Education/Education";
import Heading from "./Sections/Heading/Heading";
import Objective from "./Sections/Objective/Objective";
import Projects from "./Sections/Projects/Projects";
import Skills from "./Sections/Skills/Skills";
import WorkExperience from "./Sections/WorkExperience/WorkExperience";
import Green from "../Buttons/Green";
import { LocalStorage } from "../../lib/enum/localStorage.enum";
import { handleTemplateDownload } from "../../lib/helper/handleTemplateDownload";

const Template = () => {
  const [candidateName, setCandidateName] = useState("resume");
  const templateRef = useRef<HTMLDivElement>(null);
  const objectiveRef = useRef<HTMLDivElement>(null);

  const updateCandidateName = (name: string) => {
    setCandidateName(name);
  };

  const onClear = () => {
    localStorage.clear();
  };

  const handleSaveObjective = () => {
    if (objectiveRef.current) {
      const content = objectiveRef.current.innerHTML;
      if (content) {
        localStorage.setItem(LocalStorage.OBJECTIVE, content);
        console.log("Objective saved:", content);
      }
    }
  };

  const handleClearObjective = () => {
    localStorage.removeItem(LocalStorage.OBJECTIVE);
  };

  return (
    <div className="flex flex-col justify-center items-center mb-10">
      <p className="text-2xl font-bold p-2">Template 1</p>
      <button
        onClick={async () => {
          handleTemplateDownload({ candidateName, templateRef });
        }}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Download Resume
        </span>
      </button>
      <div className="flex gap-4">
        <div
          ref={templateRef}
          className="w-[210mm] h-[297mm] bg-white shadow-md border border-gray-300 pb-6 pt-3 px-8"
        >
          <div className="flex flex-col gap-2">
            {/* heading */}
            <Heading updateCandidateName={updateCandidateName} />
            {/* objective */}
            <Objective objectiveRef={objectiveRef} />
            {/* skills */}
            <Skills />
            {/* education */}
            <Education />
            {/* Work Experience */}
            <WorkExperience />
            {/* Projects */}
            <Projects />
            {/* Achievements */}
            <Achievements />
          </div>
        </div>
        <div className="w-fit h-[297mm] bg-white shadow-md border border-gray-300 pl-2 py-4 flex flex-col gap-2">
          <div className="flex justify-center">
            <Red onRed={onClear} text="Clear All" />
          </div>
          <div className="flex gap-2">
            <Green text="Save Objective" onGreen={handleSaveObjective} />
            <Red onRed={handleClearObjective} text="Clear Objective" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
