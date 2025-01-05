import { LocalStorage } from "../../../lib/enum/localStorage.enum";
import {
  handleClearEducations,
  handleSaveEducations,
} from "../../../lib/helper/educations";
import {
  handleSaveHeading,
  handleClearHeading,
} from "../../../lib/helper/heading";
import {
  handleSaveObjective,
  handleClearObjective,
} from "../../../lib/helper/objective";
import {
  handleClearProjects,
  handleSaveProjects,
} from "../../../lib/helper/projects";
import {
  handleSaveSkills,
  handleClearSkills,
} from "../../../lib/helper/skills";
import {
  handleClearWorkExperiences,
  handleSaveWorkExperiences,
} from "../../../lib/helper/workExperience";
import Green from "../../Buttons/Green";
import Red from "../../Buttons/Red";

const ActionBar = ({
  templateRef,
  headingRef,
  objectiveRef,
  skillsRef,
  educationRef,
  workExperiencesRef,
  projectsRef,
}: {
  templateRef: React.RefObject<HTMLDivElement>;
  headingRef: React.RefObject<HTMLDivElement>;
  objectiveRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement>;
  educationRef: React.RefObject<HTMLDivElement>;
  workExperiencesRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
}) => {
  const onClear = () => {
    localStorage.clear();
  };

  const handleSaveAll = () => {
    if (templateRef.current) {
      const content = templateRef.current.innerHTML;
      if (content) {
        localStorage.setItem(LocalStorage.TEMPLATE, content);
        console.log("Template saved:", content);
      }
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <Green
          text="Save All"
          onGreen={() => {
            handleSaveAll();
          }}
        />
        <Red onRed={onClear} text="Clear All" />
      </div>
      {/* heading actions */}
      <div className="flex justify-around">
        <Green
          text="Save Heading"
          onGreen={() => {
            handleSaveHeading({ headingRef });
          }}
        />
        <Red
          onRed={() => {
            handleClearHeading();
          }}
          text="Clear Heading"
        />
      </div>
      {/* objective actions */}
      <div className="flex justify-around">
        <Green
          text="Save Objective"
          onGreen={() => {
            handleSaveObjective({ objectiveRef });
          }}
        />
        <Red
          onRed={() => {
            handleClearObjective();
          }}
          text="Clear Objective"
        />
      </div>
      {/* skills actions */}
      <div className="flex justify-around">
        <Green
          text="Save Skills"
          onGreen={() => {
            handleSaveSkills({ skillsRef });
          }}
        />
        <Red
          onRed={() => {
            handleClearSkills();
          }}
          text="Clear Skills"
        />
      </div>
      {/* education actions */}
      <div className="flex justify-around">
        <Green
          text="Save Educations"
          onGreen={() => {
            handleSaveEducations({ educationRef });
          }}
        />
        <Red
          onRed={() => {
            handleClearEducations();
          }}
          text="Clear Educations"
        />
      </div>
      {/* work experience actions */}
      <div className="flex justify-around">
        <Green
          text="Save Work Experiences"
          onGreen={() => {
            handleSaveWorkExperiences({ workExperiencesRef });
          }}
        />
        <Red
          onRed={() => {
            handleClearWorkExperiences();
          }}
          text="Clear Work Experiences"
        />
      </div>
      {/* projects actions */}
      <div className="flex justify-around">
        <Green
          text="Save Projects"
          onGreen={() => {
            handleSaveProjects({ projectsRef });
          }}
        />
        <Red
          onRed={() => {
            handleClearProjects();
          }}
          text="Clear Projects"
        />
      </div>
    </div>
  );
};

export default ActionBar;
