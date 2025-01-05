const Education = () => {
  return (
    <div contentEditable suppressContentEditableWarning>
      <p className="text-left text-lg font-medium text-red-800">Education</p>
      <hr className="p-[.5px] mt-2 bg-red-800" />
      <div className="flex flex-col">
        <div className="mb-1">
          <div className="flex justify-between text-md">
            <p className="font-semibold">College name</p>
            <p className="font-semibold">2019-2023</p>
          </div>
          <div className="flex justify-between text-sm">
            <p className="font-light font-cursive">
              <i>B.Tech in Computer Science Engineering</i>
            </p>
            <p>
              <i>9/10 CGPA</i>
            </p>
          </div>
        </div>
        <div className="mb-1">
          <div className="flex justify-between text-md">
            <p className="font-semibold">School name</p>
            <p className="font-semibold">2019-2023</p>
          </div>
          <div className="flex justify-between text-sm">
            <p className="font-light font-cursive">
              <i>Course</i>
            </p>
            <p>
              <i>Percentage</i>
            </p>
          </div>
        </div>
        <div className="mb-1">
          <div className="flex justify-between text-md">
            <p className="font-semibold">School name</p>
            <p className="font-semibold">2019-2023</p>
          </div>
          <div className="flex justify-between text-sm">
            <p className="font-light font-cursive">
              <i>Course</i>
            </p>
            <p>
              <i>9/10 CGPA</i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
