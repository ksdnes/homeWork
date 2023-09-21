import React, { useState } from "react";
import styles from "./Search.module.css";
import RunButton from "./Button";

const Search = ({ setSearch, updatePageNumber }) => {
  const [inputValue, setInputValue] = useState("");
  let timeout;

  const searchBtn = (e) => {
    e.preventDefault();
    setSearch(inputValue);
    updatePageNumber(1);
  };

  const clearBtn = () => {
    setInputValue("");
    setSearch("");
  };

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchBtn(e);
    }
  };

  const handleChange = (e) => {
    clearTimeout(timeout);
    setInputValue(e.target.value);
    timeout = setTimeout(() => {
      searchBtn(e);
    }, 2000);
  };

  return (
    <form
      className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
    >
      <input
        onChange={handleChange}
        onKeyPress={handleKeypress}
        value={inputValue}
        placeholder="Search for characters"
        className={styles.input}
        type="text"
      />
      <RunButton onClick={searchBtn} label="Search" marginLeft="1%" />
      {inputValue && (
        <RunButton onClick={clearBtn} label="Clear" marginLeft="3%" />
      )}
    </form>
  );
};

export default Search;
