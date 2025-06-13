import { IoMdSearch } from "react-icons/io";

function SearchBar() {
  return (
    <>
      <div className="bg-[#E9E9E9] w-90 sm:w-60 rounded-full flex justify-between items-center p-2 pl-4 pr-4">
        <input
          className="focus:outline-none text-gray-500"
          type="text"
          placeholder="Buscar cliente por nome"
        />
        <IoMdSearch size={25} />
      </div>
    </>
  );
}

export default SearchBar;
