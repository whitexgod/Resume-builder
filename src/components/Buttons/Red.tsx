const Red = ({ onRed, text }: { text: string; onRed: () => void }) => {
  return (
    <button
      type="button"
      onClick={onRed}
      className="focus:outline-none text-white bg-red-600 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
    >
      {text}
    </button>
  );
};

export default Red;
