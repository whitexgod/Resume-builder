const Heading = ({
  updateCandidateName,
}: {
  updateCandidateName: (name: string) => void;
}) => {
  return (
    <div className="flex flex-col">
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => updateCandidateName(e.target.value)}
        className="w-full text-center text-4xl font-semibold text-red-800"
        style={{ fontFamily: "'Tinos', serif" }}
      />
      {/* contact details */}
      <div className="flex text-md gap-4 justify-center">
        <p contentEditable suppressContentEditableWarning>
          Contact number
        </p>
        <p contentEditable suppressContentEditableWarning>
          Email address
        </p>
        <p contentEditable suppressContentEditableWarning>
          Website
        </p>
      </div>
    </div>
  );
};

export default Heading;
