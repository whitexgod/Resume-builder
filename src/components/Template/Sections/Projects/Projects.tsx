const Projects = () => {
  return (
    <div contentEditable suppressContentEditableWarning>
      <p className="text-left text-lg font-medium text-red-800">Projects</p>
      <hr className="p-[.5px] mt-2 bg-red-800" />
      <div className="flex flex-col">
        <div className="mb-1">
          <p className="font-semibold text-md">Lorem Ipsum (Team Lead)</p>
          <div className="pl-6 text-left text-sm font-light">
            <ul>
              <li>
                ● Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock.
              </li>
              <li>
                ● Contrary to popular belief, Lorem Ipsum is not simply random
                text.
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-1">
          <p className="font-semibold text-md">Contrary (Backend Developer)</p>
          <div className="pl-6 text-left text-sm font-light">
            <ul>
              <li>
                ● Contrary to popular belief, Lorem Ipsum is not simply random
                text.
              </li>
              <li>
                ● Contrary to popular belief, Lorem Ipsum is not simply random
                text.
              </li>
              <li>
                ● Contrary to popular belief, Lorem Ipsum is not simply random
                text.
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-1">
          <p className="font-semibold text-md">
            Contrary to popular belief (Full Stack Developer)
          </p>
          <div className="pl-6 text-left text-sm font-light">
            <ul>
              <li>
                ● Contrary to popular belief, Lorem Ipsum is not simply random
                text.
              </li>
              <li>
                ● Contrary to popular belief, Lorem Ipsum is not simply random
                text.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
