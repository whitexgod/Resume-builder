const Green = ({ onGreen, text }: { text: string; onGreen: () => void }) => {
  return (
    <button
      type="button"
      onClick={onGreen}
      className="focus:outline-none text-white bg-green-600 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
    >
      {text}
    </button>
  );
};

export default Green;
