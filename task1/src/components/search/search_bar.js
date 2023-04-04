import "./styles.css";
import React, { useState } from "react";
export default function SearchBar(props) {
  const [query, setState] = React.useState("");
  function handleInputChange(event) {
    setState(event.target.value);
  }
  function handleClick() {
    props.handlestate(query);
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
