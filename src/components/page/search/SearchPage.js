import React, { useEffect } from "react";
import SearchBody from "./SearchBody";
import HeaderSearch from "./Header";
import "./Search.css";

const SearchPage = ({ searchData, setSearch, hoaxData, hateData }) => {
  useEffect(() => {
    document.title = "Cek Berita";
  }, []);
  return (
    <div className="myThirdBG">
      <HeaderSearch />
      <SearchBody data={searchData} setSearch={setSearch} hoaxData={hoaxData} hateData={hateData} />
    </div>
  );
};

export default SearchPage;
