import React, { useState, useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import Wave from "react-wavify";
import "./Search.css";

const SearchBody = ({ data, setSearch, hoaxData, hateData }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [inputValue, setInputValue] = useState("");
  const [term, setTerm] = useState(new URLSearchParams(location.search).get("q") || "");

  //set term
  useEffect(() => {
    const queryParam = new URLSearchParams(location.search).get("q");
    if (queryParam && queryParam !== term) {
      setTerm(queryParam);
      setInputValue(queryParam);
    }
  }, [location, term]);

  //clear term
  const clearTerm = () => {
    setTerm("");
    sessionStorage.removeItem("searchTerm");
  };

  //   handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  //   handle search
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // handle search
  const handleSearch = () => {
    if (inputValue.trim()) {
      setTerm(inputValue.trim());
      setSearch(inputValue.trim());
      sessionStorage.setItem("searchTerm", inputValue.trim());
      navigate(`/search?q=${inputValue.trim()}`);
    }
  };

  return (
    <Container>
      <div className="search-box2 d-flex py-2 align-items-center ">
        <button type="button" className="btn search2" onClick={handleSearch}>
          <i className="fa fa-search"></i>
        </button>
        <form className="form-search text-form" onSubmit={handleSubmit}>
          <input type="text" name="term" id="term" className="search-google" value={inputValue} onChange={handleInputChange} placeholder="Cari Datamu Sekarang Juga..." />
          {term ? (
            <button type="button" className="btn closing" onClick={clearTerm}>
              <i className="fa fa-close"></i>
            </button>
          ) : null}
        </form>
      </div>
      <div className="dl">
        <div className="category">Category:</div>
        {hoaxData.prediction === "Hoax" ? (
          <div className="hoax">
            <div className="text-hoax">{hoaxData.prediction}</div>
          </div>
        ) : (
          <div className="hoax2">
            <div className="text-hoax2">{hoaxData.prediction}</div>
          </div>
        )}

        {hateData.prediction === "Hate Speech" ? (
          <div className="hate">
            <div className="text-hate">{hateData.prediction}</div>
          </div>
        ) : (
          <div className="hate2">
            <div className="text-hate2">{hateData.prediction}</div>
          </div>
        )}
      </div>
      <div className="google">
        <div className="line-col2"></div>
        {data?.items?.length === 0 ? (
          <p>Data tidak tersedia, silahkan melakukan pencarian kembali</p>
        ) : (
          data.items.slice(0, 5).map((item) => (
            <div key={item.displayLink} className="border-content-google">
              <div className="row-title">
                <div className="image-content">
                  <Image src={`https://logo.clearbit.com/${item.displayLink}`} className="for-image" />
                </div>
                <div className="title-link">{item.displayLink}</div>
              </div>
              <a href={item.formattedUrl} className="block-content-google">
                <h5 className="link-heading">
                  <a href={item.formattedUrl} className="font-title" dangerouslySetInnerHTML={{ __html: item.htmlTitle }} />
                </h5>
              </a>
              <p className="paragraph" dangerouslySetInnerHTML={{ __html: item.htmlSnippet }} style={{ color: "#666" }} />
            </div>
          ))
        )}
      </div>
      <Wave
        fill="#ffffff"
        paused={false}
        style={{ display: "fixed" }}
        options={{
          height: 2,
          bones: 6,
          amplitude: 20,
          color: "#ffffff",
          speed: 0.35,
        }}
        className="wave-page2"
      />
    </Container>
  );
};

export default SearchBody;
