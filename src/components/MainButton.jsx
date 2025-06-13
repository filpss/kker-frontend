function MainButton({ Text, Color }) {
  return (
    <button
      style={{ backgroundColor: Color }}
      className="hidden sm:block cursor-pointer shadow-xl/14 shadow-amber-600/80 w-50 text-[18px] text-white font-semibold p-2 pl-4 pr-4 rounded-full"
    >
      {Text}
    </button>
  );
}

export default MainButton;
