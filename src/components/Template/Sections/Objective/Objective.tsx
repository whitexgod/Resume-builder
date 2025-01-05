import { useEffect } from "react";
import { LocalStorage } from "../../../../lib/enum/localStorage.enum";

const Objective = ({
  objectiveRef,
}: {
  objectiveRef: React.RefObject<HTMLDivElement>;
}) => {
  useEffect(() => {
    const savedObjective = localStorage.getItem(LocalStorage.OBJECTIVE);
    if (savedObjective && objectiveRef.current) {
      objectiveRef.current.innerHTML = savedObjective; // Set saved content
    }
  }, [objectiveRef]);

  return (
    <div contentEditable suppressContentEditableWarning ref={objectiveRef}>
      <p className="text-left text-lg text-red-800 font-medium">Objective</p>
      <hr className="p-[.5px] mt-2 bg-red-800" />
      <p className="text-sm font-light">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </div>
  );
};

export default Objective;
