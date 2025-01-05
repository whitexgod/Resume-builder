const WorkExperience = () => {
  return (
    <div contentEditable suppressContentEditableWarning>
      <p className="text-left text-lg font-medium text-red-800">
        Work Experience
      </p>
      <hr className="p-[.5px] mt-2 bg-red-800" />
      <div className="flex flex-col">
        <div className="mb-1">
          <div className="flex justify-between text-md">
            <p className="font-semibold">Lorem Ipsum Lorem Ipsum</p>
            <p className="font-semibold">month, year</p>
          </div>
          <div className="flex justify-between text-sm">
            <p className="font-light font-cursive">
              <i>role</i>
            </p>
            <p>
              <i>Present</i>
            </p>
          </div>
        </div>
        <div className="mb-1">
          <div className="flex justify-between text-md">
            <p className="font-semibold">Lorem Ipsum (internship)</p>
            <p className="font-semibold">month, year - month, year</p>
          </div>
          <div className="flex justify-between text-sm">
            <p className="font-light font-cursive">
              <i>role</i>
            </p>
            <p>
              <i>n months</i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
