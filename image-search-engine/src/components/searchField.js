import { useState } from "react";
import { useContext } from "react";
import { ImageContext } from "../App";

const SearchField = () => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData, setSearchImage } = useContext(ImageContext);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const hancleButtonSearch = () => {
    fetchData(
      `search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
    );
    setSearchValue("");
    setSearchImage(searchValue);
  };

  const handleEnterSearch = e => {
    if(e.key==="Enter"){
      hancleButtonSearch();

    }
  };

  return (
    <div className="flex justify-center">
      <input
        className="flex justify-center bg-gray-50 border border-gray-300 text-sm w-full indent-2 items center p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl"
        type="search"
        placeholder="Search Anything..."
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}
      />
      <button
        onClick={hancleButtonSearch}
        disabled={!searchValue}
        className="bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-200 disabled:bg-gray-400"
      >
        {" "}
        Search
      </button>
    </div>
  );
};

export default SearchField;
