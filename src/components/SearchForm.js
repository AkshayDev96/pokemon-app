import React, { useState } from "react";
//Search Box
const SearchForm = ({ onSearch, types }) => {
  //states
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");

  //Handle the search
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ search, type });
    console.log(
      "Attributes of select:",
      document.querySelector("select").attributes,
    );
    console.log(
      "Attributes of input:",
      document.querySelector("input").attributes,
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-[#ccc] rounded-[10px] mb-5 shadow-md flex flex-wrap justify-between"
    >
      <div className="w-full md:w-auto flex-grow md:flex-grow-0 mb-4 md:mb-0 md:mr-4">
        <select
          className="block w-full mt-1 py-3 px-3 rounded"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">All Types</option>
          {types.map((t) => (
            <option key={t.name} value={t.name}>
              {t.name}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full md:w-auto flex-grow">
        <input
          type="text"
          className="block w-full mt-1 py-3 px-3 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Pokemon here..."
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded mt-4 md:mt-0"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
