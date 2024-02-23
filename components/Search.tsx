import { FaMagnifyingGlass } from "react-icons/fa6";

const Search = () => {
  return (
    <div className="flex items-center bg-neutral-100 px-2 py-1 text-[0.5rem] leading-3 rounded-2xl w-52">
      <FaMagnifyingGlass className="size-2 mr-2" />
      <input type="text" className="bg-inherit outline-none flex-1" />
    </div>
  );
};

export default Search;
