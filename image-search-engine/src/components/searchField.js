import { useState, useContext } from "react";
import { ImageContext } from "../App";

const SearchField = () => {
  const [searchValue, setSearchValue] = useState("");
  const [imagesPerPage, setImagesPerPage] = useState(24); 
  const { fetchData, setSearchImage } = useContext(ImageContext);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleImagesPerPageChange = (e) => {
    setImagesPerPage(e.target.value);
  };

  const handleButtonSearch = () => {
    fetchData(
      `search/photos?page=1&per_page=${imagesPerPage}&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
    );
    setSearchValue("");
    setSearchImage(searchValue);
  };

  const handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      handleButtonSearch();
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
      <input
        className="bg-gray-50 border border-gray-300 text-sm w-full md:w-auto indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl md:rounded-tr-none md:rounded-br-none"
        type="search"
        placeholder="Search Anything..."
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}
      />
      <select
        value={imagesPerPage}
        onChange={handleImagesPerPageChange}
        className="bg-gray-50 border border-gray-300 text-sm w-full md:w-auto p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-md"
      >
        <option value="none">Image count</option>
        <option value="10">10 Images</option>
        <option value="20">20 Images</option>
        <option value="30">30 Images</option>
        <option value="50">50 Images</option>
      </select>
      <button
        onClick={handleButtonSearch}
        disabled={!searchValue}
        className="bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br md:rounded-tl-none md:rounded-bl-none focus:ring-2 focus:ring-blue-200 disabled:bg-gray-400"
      >
        Search
      </button>
    </div>
  );
};

export default SearchField;
