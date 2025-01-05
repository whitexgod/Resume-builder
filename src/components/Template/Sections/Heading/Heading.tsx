import { useEffect } from "react";
import { LocalStorage } from "../../../../lib/enum/localStorage.enum";

const Heading = ({
  updateCandidateName,
  headingRef,
  candidateName,
}: {
  headingRef: React.RefObject<HTMLDivElement>;
  candidateName: string;
  updateCandidateName: (name: string) => void;
}) => {
  useEffect(() => {
    const savedObjective = localStorage.getItem(LocalStorage.HEADING);
    if (savedObjective && headingRef.current) {
      headingRef.current.innerHTML = savedObjective; // Set saved content
    }
  }, [headingRef]);

  return (
    <div className="flex flex-col" ref={headingRef}>
      <input
        type="text"
        placeholder="Enter your name"
        value={candidateName}
        onChange={(e) => updateCandidateName(e.target.value)}
        className="w-full text-center text-4xl font-semibold text-red-800"
        style={{ fontFamily: "'Tinos', serif" }}
      />
      {/* contact details */}
      <div className="flex text-md gap-4 justify-center font-thin">
        <p contentEditable suppressContentEditableWarning>
          Contact number
        </p>
        <p contentEditable suppressContentEditableWarning>
          Email address
        </p>
        <a contentEditable suppressContentEditableWarning>
          Website
        </a>
      </div>
    </div>
  );
};

export default Heading;
