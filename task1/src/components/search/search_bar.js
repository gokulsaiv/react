import "./styles.css";
import React, { useState } from "react";
export default function SearchBar(props) {
  const [query, setQuery] = React.useState("");
  function handleInputChange(event) {
    setQuery(event.target.value);
  }
  function handleClick() {
    props.handleSearchOnChange(query);
  }

  return (
    <>
      <input
        className="input"
        type="text"
        value={query}
        placeholder="Search"
        onChange={handleInputChange}
      />
      <button className="btn-search" onClick={handleClick}>
        search
      </button>
    </>
  );
}
